// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	const config = vscode.workspace.getConfiguration('formkitDocs');
	const commandName = config.useSimpleBrowser ? 'simpleBrowser.show' : 'vscode.open';

	const inputTypes = [
		"autocomplete", 
		"button", 
		"checkbox", 
		"color", 
		"colorpicker", 
		"date", 
		"datetime-local", 
		"dropdown",
		"email", 
		"file", 
		"form", 
		"group",
		"hidden",
		"list",
		"mask",
		"meta", 
		"month", 
		"number", 
		"password", 
		"radio", 
		"range", 
		"repeater", 
		"search", 
		"select",
		"slider",
		"submit",
		"taglist", 
		"tel", 
		"text", 
		"textarea",
		"time", 
		"toggle",
		"togglebuttons",
		"transfer-list",
		"url", 
		"week"];

	inputTypes.forEach(inputType => {
		const inputTypeCapitalized = inputType.charAt(0).toUpperCase() + inputType.slice(1);
		const inputTypesCommand = vscode.commands.registerCommand(`extension.formKitDocs${inputTypeCapitalized}`, () => {
			vscode.commands.executeCommand(commandName, vscode.Uri.parse(`https://formkit.com/inputs/${inputType}`, true));
		});
		context.subscriptions.push(inputTypesCommand);
	});

	const essentials = [
		"validation",
		"styling",
		"inputs",
		"icons",
		"internationalization",
		"custom-inputs",
		"schema",
		"configuration",
		"architecture",
		"examples"
	];

	essentials.forEach(essential => {
		const essentialCapitalized = essential.charAt(0).toUpperCase() + essential.slice(1);
		console.log('Registering command: ', `extension.formKitDocs${essentialCapitalized}`);
		const essentialsCommand = vscode.commands.registerCommand(`extension.formKitDocs${essentialCapitalized}`, () => {
			vscode.commands.executeCommand(commandName, vscode.Uri.parse(`https://formkit.com/essentials/${essential}`, true));
		});
		context.subscriptions.push(essentialsCommand);
	});
}

// This method is called when your extension is deactivated
export function deactivate() {}
