import * as vscode from 'vscode';
import { colors } from './config';

export const HighlighterDecorationTypes: Record<ColorKey, vscode.TextEditorDecorationType> = {
	red: vscode.window.createTextEditorDecorationType({
		backgroundColor: colors.red
	}),
	green: vscode.window.createTextEditorDecorationType({
		backgroundColor: colors.green
	}),
	blue: vscode.window.createTextEditorDecorationType({
		backgroundColor: colors.blue
	}),
	yellow: vscode.window.createTextEditorDecorationType({
		backgroundColor: colors.yellow
	}),
	orange: vscode.window.createTextEditorDecorationType({
		backgroundColor: colors.orange
	})
};

export type ColorKey = keyof typeof colors;

export type HighlighterStoreEntry = {
	start: number;
	end: number;
	color: ColorKey;
	gadget: string;
};

export class HighlightService {
	private extensionContext: vscode.ExtensionContext;

	constructor(extensionContext: vscode.ExtensionContext) {
		this.extensionContext = extensionContext;
	}

	insertOrRemove(filename: string, highlighter: HighlighterStoreEntry): HighlighterStoreEntry[] {
		const highlighters = this.fetch(filename);
		const existingHighlighter = highlighters.find(h => h.start === highlighter.start && h.end === highlighter.end);

		if(!existingHighlighter) {
			highlighters.push(highlighter);
		} else if (existingHighlighter.color === highlighter.color) {
			// remove the existing highlighter without adding the new one
			const index = highlighters.indexOf(existingHighlighter);
			highlighters.splice(index, 1);
		} else {
			// remove the existing highlighter and add the new one
			const index = highlighters.indexOf(existingHighlighter);
			highlighters.splice(index, 1);
			highlighters.push(highlighter);
		}
	
		this.extensionContext.workspaceState.update(filename, highlighters);
		return highlighters;
	}

	fetch(filename: string): HighlighterStoreEntry[] {
		return this.extensionContext.workspaceState.get<HighlighterStoreEntry[]>(filename) || [];
	}

	clear(filename: string) {
		vscode.window.showInformationMessage(`Clearing highlighters for ${filename}`);
		this.extensionContext.workspaceState.update(filename, []);
	}
}