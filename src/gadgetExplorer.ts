import * as vscode from 'vscode';
import * as fs from 'fs';
import { GadgetFile, GadgetFileStoreEntry } from './gadgetFile';
import { HighlighterStoreEntry, HighlighterDecorationTypes, ColorKey, HighlightService } from './highlighters';
import { GadgetFileItem, GadgetFileProvider } from './treeView';
import { colors, ContextStoreKeys, GadgetFileCommandKeys, highlightCommandKeys, TreeViewCommandKeys } from './config';
import { InstructionsHoverProvider } from './Hover';

export class GadgetExplorer {
	private readonly context: vscode.ExtensionContext;
	private currentFile?: GadgetFile;
	private currentEditor?: vscode.TextEditor;
	private workspaceRootPath?: string;
	private decorationTypes: vscode.TextEditorDecorationType[] = [];
	private treeViewProvider?: GadgetFileProvider;

	constructor(context: vscode.ExtensionContext) {
		this.context = context;
		this.currentEditor = vscode.window.activeTextEditor;
		this.workspaceRootPath = vscode.workspace.workspaceFolders![0].uri.fsPath;

		this.registerCommands();
		this.registerEvents();
		// this.registerDecorationTypes();
		this.registerViewProviders();
		this.registerViewElements();
		this.registerLanguageFeatures();

		console.log('Gadget Explorer initialized');
		const currentFilename = vscode.window.activeTextEditor?.document.fileName;

		this.loadGadgetFile(currentFilename);
		this.currentFile?.renderHighlighters(this.currentEditor, HighlighterDecorationTypes);
		console.log('Current global storage uri: ', this.context.globalStorageUri);

		// list all directories in extensionPath
	}

	private registerDecorationTypes() {
		const decorationType = vscode.window.createTextEditorDecorationType({
			backgroundColor: colors['red']
		});

		this.context?.subscriptions.push(decorationType);
		this.decorationTypes.push(decorationType);
	}

	private validateSnapshotId(snapshotId: number, filename: string): boolean {
		const gadgetFile = this.context.workspaceState.get<GadgetFileStoreEntry>(filename);

		if (snapshotId < 0 || snapshotId >= gadgetFile!.hlSnapshots.length) {
			console.error('Invalid snapshot id. restoring 0 :', snapshotId);
			this.context.workspaceState.update(filename, {
				hlSnapshotId: 0,
				hlSnapshots: gadgetFile!.hlSnapshots
			});
			return false;
		}

		return true;
	}

	private loadSnapshot(
		direction: 'prev' | 'next',
		gadgetFileEntry: GadgetFileItem
	) {

		let gadgetFile = this.context.workspaceState.get<GadgetFileStoreEntry>(gadgetFileEntry.resourceUri!.fsPath);
		let currSnapshotId = gadgetFileEntry?.snapshotId;


		if (!gadgetFile) {
			console.error('Gadget file not found in workspace state, skipping snapshot load');
			return;
		}

		if (!this.validateSnapshotId(currSnapshotId, gadgetFileEntry.resourceUri!.fsPath)) {
			currSnapshotId = 0;

			// updating the selected snapshot id in the workspace state
			this.context.workspaceState.update(gadgetFileEntry.resourceUri!.fsPath, {
				hlSnapshotId: 0,
				hlSnapshots: gadgetFile.hlSnapshots
			});

			if (this.currentFile?.filename === gadgetFileEntry.resourceUri!.fsPath) {
				this.currentFile.snapshotId = 0;
				this.currentFile.highlighters = gadgetFile.hlSnapshots[0];
				this.renderCurrentFileHighlighters();
			}

			vscode.commands.executeCommand(TreeViewCommandKeys.refresh);

			return;
		}

		let newSnapshotId;

		switch (direction) {
			case 'prev':
				if (currSnapshotId === 0) {
					console.error('Already at the first snapshot');
					return;
				}
				newSnapshotId = currSnapshotId - 1;
				break;
			case 'next':
				if (currSnapshotId === gadgetFile.hlSnapshots.length - 1) {
					console.error('Already at the last snapshot');
					return;
				}
				newSnapshotId = currSnapshotId + 1;
				break;
		}

		// updating the selected snapshot id in the workspace state
		this.context.workspaceState.update(gadgetFileEntry.resourceUri!.fsPath, {
			hlSnapshotId: newSnapshotId,
			hlSnapshots: gadgetFile.hlSnapshots
		});

		// updating the snapshot id in the current file
		if (this.currentFile?.filename === gadgetFileEntry.resourceUri!.fsPath) {
			this.currentFile.snapshotId = newSnapshotId;
			this.currentFile.highlighters = gadgetFile.hlSnapshots[newSnapshotId];
			this.renderCurrentFileHighlighters();
		}

		vscode.commands.executeCommand(TreeViewCommandKeys.refresh);
	}

	private registerCommands() {
		for (const [key, value] of Object.entries(colors)) {
			this.context?.subscriptions.push(
				vscode.commands.registerCommand(highlightCommandKeys[key], () => {
					const cursorStart = this.currentEditor?.selection.start.line;
					const cursorEnd = this.currentEditor?.selection.end.line;
					const selectedText = this.currentEditor?.document.getText(new vscode.Range(cursorStart!, 0, cursorEnd!, Number.MAX_VALUE));

					const highlighter: HighlighterStoreEntry = {
						start: cursorStart!,
						end: cursorEnd!,
						color: key as ColorKey,
						gadget: selectedText!
					};

					this.setCurrentFileHighlighter(highlighter);
					// this.currentFile?.clearHighlighters();
					this.renderCurrentFileHighlighters();
				})
			);
		}

		vscode.commands.registerCommand(GadgetFileCommandKeys.createSnapshot, (gadgetFileEntry: GadgetFileItem) => {
			console.log('Creating snapshot');
			let gadgetFile = this.context.workspaceState.get<GadgetFileStoreEntry>(gadgetFileEntry.resourceUri!.fsPath);
			if (!gadgetFile) {
				console.error('Gadget file not found in workspace state, skipping snapshot creation');
				return;
			}

			const newSnapshotId = gadgetFile.hlSnapshots.length;

			this.context.workspaceState.update(gadgetFileEntry.resourceUri!.fsPath, {
				hlSnapshotId: newSnapshotId,
				hlSnapshots: [...gadgetFile.hlSnapshots, []]
			});

			vscode.commands.executeCommand(TreeViewCommandKeys.refresh);
			// check if the updated gadget file is opened in the editor
			if (this.currentFile?.filename === gadgetFileEntry.resourceUri!.fsPath) {
				this.currentFile.snapshotId = newSnapshotId;
				this.currentFile.highlighters = [];
				this.renderCurrentFileHighlighters();
			}
		});

		vscode.commands.registerCommand(GadgetFileCommandKeys.loadSnapshotPrev, (gadgetFileEntry: GadgetFileItem) => {
			console.log('Loading prev snapshot');
			this.loadSnapshot('prev', gadgetFileEntry);
		});

		// todo: this looks really bad.
		// loadSnapshot should be a method of GadgetFile
		// and i can probably avoid 2 handlers for prev and next
		vscode.commands.registerCommand(GadgetFileCommandKeys.loadSnapshotNext, (gadgetFileEntry: GadgetFileItem) => {
			console.log('Loading next snapshot');
			this.loadSnapshot('next', gadgetFileEntry);
		});

		vscode.commands.registerCommand(GadgetFileCommandKeys.clearHighlighters, () => {
			// this.clearHighlighters();
		});
	}

	private registerLanguageFeatures() {
		const instructionsHoverProvider = new InstructionsHoverProvider(this.context, "x86");
		try {
			this.context.subscriptions.push(
				vscode.languages.registerHoverProvider('gadgetsFile', instructionsHoverProvider)
			);
		} catch {
			vscode.window.showErrorMessage('Error loading x86 instructions docs');
		}
	}

	private registerEvents() {
		this.context?.subscriptions.push(
			vscode.window.onDidChangeActiveTextEditor((editor) => {
				if (editor) {
					this.handleActiveTextEditorChange(editor);
				}
			})
		);
	}

	private registerViewProviders() {
		this.treeViewProvider = new GadgetFileProvider(this.workspaceRootPath!, this.context);
		vscode.window.registerTreeDataProvider('gadget-files-tree', this.treeViewProvider);
	}

	private registerViewElements() {
		vscode.window.createTreeView('gadget-files-tree', {
			treeDataProvider: this.treeViewProvider!
		});
	}

	private handleActiveTextEditorChange(editor: vscode.TextEditor | undefined) {
		this.currentEditor = editor;
		const filename = editor?.document.fileName;
		if (this.loadGadgetFile(filename)) {
			this.renderCurrentFileHighlighters();
		}
	}

	private loadGadgetFile(filename: string | undefined): boolean {
		console.log('trying to load gadget file: ', filename);
		if (!filename?.endsWith('.gadgets.txt')) {
			console.error('Current file is not a gadget file. Skipping handle.');
			this.currentFile = undefined;
			vscode.commands.executeCommand('setContext', ContextStoreKeys.gadgetFileFlag, false);
			return false;
		}

		const existingGadgetFile = this.context.workspaceState.get<GadgetFileStoreEntry>(filename!);
		const snapshotId = existingGadgetFile?.hlSnapshotId || 0;
		const highlightService = new HighlightService(this.context);

		try {
			this.currentFile = new GadgetFile(
				filename as string,
				snapshotId,
				highlightService
			);
		} catch (error) {
			console.error('Error creating gadget file: ', error);
			return false;
		}

		vscode.commands.executeCommand('setContext', ContextStoreKeys.gadgetFileFlag, true);
		return true;
	}

	private ensureStoreGadgetFile(filename: string) {
		let storeEntry = this.context.workspaceState.get<GadgetFileStoreEntry>(filename!);

		if (storeEntry) {
			console.log('Store entry for gadget file already exists: ', storeEntry);
			this.currentFile = new GadgetFile(
				filename as string,
				storeEntry.hlSnapshotId,
				new HighlightService(this.context)
			);

			return;

		} else {
			this.context.workspaceState.update(filename, {
				hlSnapshotId: 0,
				hlSnapshots: []
			});
		}

		this.currentFile = new GadgetFile(
			filename as string,
			0,
			new HighlightService(this.context)
		);

		console.log('Created new store entry for gadget file: ', filename);
	}

	private renderCurrentFileHighlighters() {
		try {
			this.currentFile?.renderHighlighters(this.currentEditor, HighlighterDecorationTypes);
		} catch (error) {
			console.error('Error rendering highlighters: ', error);
		}
	}

	private setCurrentFileHighlighter(highlighter: HighlighterStoreEntry) {
		try {
			this.currentFile?.setHighlighter(highlighter);
			vscode.commands.executeCommand(TreeViewCommandKeys.refresh);

		} catch (error) {
			console.error('Error setting highlighter: ', error);
		}
	}

	private init() {

	}
}