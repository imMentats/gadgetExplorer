import * as vscode from 'vscode';
import { ColorKey, HighlighterStoreEntry } from './highlighters';
import { TreeViewCommandKeys } from './config';
import { GadgetFileStoreEntry } from './gadgetFile';

export class GadgetFileItem extends vscode.TreeItem {
	constructor(
		public readonly filename: string,
		public readonly snapshotId: number,
		public readonly snapshotCount: number,
		public readonly collapsibleState: vscode.TreeItemCollapsibleState,
		public readonly resourceUri: vscode.Uri,
		public readonly iconPath = vscode.ThemeIcon.File,
		public readonly fsPath = resourceUri.fsPath,
		public readonly contextValue = 'gadgetFile'
	) {
		const label = GadgetFileItem.formatLabel(filename, snapshotId!, snapshotCount);
		super(label, collapsibleState);
		this.command = {
			command: TreeViewCommandKeys.onItemClicked,
			title: 'Open',
			arguments: [this]
		};
	}

	private static formatLabel(filename: string, snapshotId: number, snapshotCount?: number): string {
		return snapshotCount ? `${filename} (${snapshotId}/${snapshotCount - 1})` : `${filename} (${snapshotId})`;
	}
}

class HighlighterItemColorSection extends vscode.TreeItem {
	constructor(
		public readonly color: string,
		public readonly fsPath: string,
		public readonly collapsibleState: vscode.TreeItemCollapsibleState,
		public readonly childCount: number,
		public readonly command?: vscode.Command
	) {
		super(color, collapsibleState);
	}
}

class HighlighterItem extends vscode.TreeItem {
	constructor(
		// public readonly highlightedGadget: string,
		public readonly collapsibleState: vscode.TreeItemCollapsibleState,
		public readonly resourceUri: vscode.Uri,
		public readonly rangeStart: number,
		public readonly rangeEnd: number,
		public readonly color: ColorKey,
		public readonly gadget?: string,
		public readonly command?: vscode.Command,
		public readonly iconPath?: vscode.ThemeIcon,
		public readonly contextValue = 'highlighter'
	) {
		super({
			label: HighlighterItem.formatLabel(rangeStart, rangeEnd, gadget!),
			highlights: [[0, 1]],
		}, collapsibleState);

		this.command = {
			command: TreeViewCommandKeys.onItemClicked,
			title: 'Open',
			arguments: [this]
		};

		try {
			this.iconPath = new vscode.ThemeIcon('circle-filled', new vscode.ThemeColor(`terminal.ansi${color.charAt(0).toUpperCase() + color.slice(1)}`))
		} catch (error) {
			console.error('Error creating icon path for tree view: ', error);
		}
	}

	private static formatLabel(rangeStart: number, rangeEnd: number, gadget: string): string {
		const rangeStr = rangeStart !== rangeEnd ? `${rangeStart}-${rangeEnd}` : `${rangeStart}`;
		return `[${rangeStr}] ${gadget.toUpperCase()}`;
	}
}

export class GadgetFileProvider implements vscode.TreeDataProvider<GadgetFileItem | HighlighterItem | HighlighterItemColorSection> {
	private _onDidChangeTreeData: vscode.EventEmitter<any> = new vscode.EventEmitter<any>();
	readonly onDidChangeTreeData: vscode.Event<any> = this._onDidChangeTreeData.event;

	constructor(
		private workspaceRoot: string,
		private context: vscode.ExtensionContext
	) {
		this.registerCommands();
	}

	getTreeItem(element: GadgetFileItem | HighlighterItem): vscode.TreeItem {
		return element;
	}

	getChildren(element?: GadgetFileItem | HighlighterItemColorSection | undefined): vscode.ProviderResult<(GadgetFileItem | HighlighterItem | HighlighterItemColorSection)[]> {
		if (!this.workspaceRoot) {
			vscode.window.showInformationMessage('No gadget files in empty workspace');
			return Promise.resolve([]);
		}

		if (!element) {
			return Promise.resolve(this.getWorkspaceGadgetFiles());
		} else if (element instanceof GadgetFileItem) {
			return Promise.resolve(this.getGadgetFileHighlighters(element.fsPath));
		} else if (element instanceof HighlighterItemColorSection) {
			return Promise.resolve(this.getGadgetFileHighlightersColors(element.fsPath));
		}
	}

	private async getWorkspaceGadgetFiles(): Promise<GadgetFileItem[]> {
		// todo: refactor
		let fsGadgetFiles = await vscode.workspace.findFiles('**/*.gadgets.txt', '**/node_modules/**', 10);

		const gadgetFilenames = fsGadgetFiles.map(file => {
			const snapshotId = this.context.workspaceState.get<GadgetFileStoreEntry>(file.fsPath)?.hlSnapshotId || 0;
			const snapshotsCount = this.context.workspaceState.get<GadgetFileStoreEntry>(file.fsPath)?.hlSnapshots?.length || 0;

			const relativePath = vscode.workspace.asRelativePath(file);
			return new GadgetFileItem(
				relativePath,
				snapshotId,
				snapshotsCount,
				vscode.TreeItemCollapsibleState.Collapsed,
				vscode.Uri.file(file.fsPath)
			);
		});

		const sortedGadgetFilenames = gadgetFilenames.sort((a, b) => a.filename.localeCompare(b.filename));
		return sortedGadgetFilenames;
	}

	private getGadgetFileHighlightersColors(filename: string): HighlighterItemColorSection[] {
		const gadgetFile = this.context.workspaceState.get<GadgetFileStoreEntry>(filename);
		const snapshotId = gadgetFile?.hlSnapshotId;
		const highlighters = gadgetFile?.hlSnapshots[snapshotId!] || [];
		
		const colors = highlighters.map(h => h.color);
		const uniqueColors = [...new Set(colors)];
		const colorItems = uniqueColors.map(c => new HighlighterItemColorSection(
			c,
			filename,
			vscode.TreeItemCollapsibleState.None,
			colors.filter(color => color === c).length
		));
		return colorItems;
	}

	private getGadgetFileHighlighters(filename: string): HighlighterItem[] {
		const gadgetFile = this.context.workspaceState.get<GadgetFileStoreEntry>(filename);
		const snapshotId = gadgetFile?.hlSnapshotId;
		const highlighters = gadgetFile?.hlSnapshots[snapshotId!] || [];

		const highlightersItems = highlighters.map(h => new HighlighterItem(
			vscode.TreeItemCollapsibleState.None,
			vscode.Uri.file(filename),
			h.start,
			h.end,
			h.color,
			h.gadget
		));

		// sort the highlighters by start range
		highlightersItems.sort((a, b) => a.rangeStart - b.rangeStart);
		return highlightersItems;
	}

	private registerCommands() {
		vscode.commands.registerCommand(TreeViewCommandKeys.onItemClicked, item => {
			console.log('Item clicked: ', item);
			this.on_item_clicked(item);
		});
		vscode.commands.registerCommand(TreeViewCommandKeys.refresh, () => {
			console.log('Refreshing tree view');
			this.refresh();
		});
	}

	public on_item_clicked(item: GadgetFileItem | HighlighterItem | HighlighterItemColorSection) {
		// make a switch statement to handle the different types of items
		switch (item.constructor.name) {
			case 'GadgetFileItem':
				console.log('GadgetFileItem clicked: ', item);
				vscode.workspace.openTextDocument(item.resourceUri!).then(doc => {
					vscode.window.showTextDocument(doc);
				});

				break;
			case 'HighlighterItem':
				let highlighterItem = item as HighlighterItem;
				console.log('HighlighterItem clicked: ', highlighterItem);
				vscode.workspace.openTextDocument(highlighterItem.resourceUri!).then(doc => {
					vscode.window.showTextDocument(doc).then(editor => {
						const range = new vscode.Range(highlighterItem.rangeStart, 0, highlighterItem.rangeEnd, Number.MAX_VALUE);
						editor?.revealRange(range);
						editor.selection = new vscode.Selection(range.start, range.start);
					});
				});

				break;
			case 'HighlighterItemColorSection':
				console.log('HighlighterItemColorSection clicked: ', item);
				break;
			default:
				console.error('Unknown item type clicked: ', item);
		}
	}

	refresh(): void {
		console.log('Refreshing tree view');
		this._onDidChangeTreeData.fire(undefined);
	}
}

