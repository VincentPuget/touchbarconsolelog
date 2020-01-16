// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "touchbarconsolelog" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.touchbarconsolelog', () => {
		// The code you place here will be executed every time your command is executed

		let editor = vscode.window.activeTextEditor;
		if (!editor) {
			return; // No open text editor
		}
		const position = editor.selection.active;

		const text = editor.document.getText(editor.selection);

		if (typeof text !== 'undefined' && text !== '') {
			editor.insertSnippet(new vscode.SnippetString('\nconsole.log(\'' + text + '\', ' + text + ');\n'), position);
		} else {
			editor.insertSnippet(new vscode.SnippetString('\nconsole.log();\n'), position);
		}


	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
