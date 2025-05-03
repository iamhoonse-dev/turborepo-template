#! /usr/bin/env node

import { textSync } from "figlet";
import { Command } from "commander";
import renameScope from "./renameScope";

// program is a command-line interface (CLI) library for Node.js
const program = new Command();

// ASCII art for the CLI
console.log(textSync("Rename Scope"));

// This is a simple CLI program that allows you to rename scopes in a file
program
  .version("0.0.0")
  .description("A CLI for renaming scopes in each package.json file")
  .option("-n, --name <value>", "New name for package scope")
  .action(({ name }) => {
    renameScope(name);
  })
  .parse(process.argv);

// If no options are provided, display the help message
if (!process.argv.slice(2).length) {
  program.outputHelp();
}
