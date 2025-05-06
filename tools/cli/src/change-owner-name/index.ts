#! /usr/bin/env node

import { textSync } from "figlet";
import { Command } from "commander";
import changeOwnerName from "./changeOwnerName";
import withSpinner from "../utils/withSpinner";
import pnpmInstall from "../utils/pnpm-install";

// program is a command-line interface (CLI) library for Node.js
const program = new Command();

// ASCII art for the CLI
console.log(textSync("Change Owner"));

// This is a simple CLI program that allows you to rename repository
program
  .version("0.0.0")
  .description("A CLI for changing owner of repository")
  .option("-n, --name <value>", "New owner for repository")
  .action(async ({ name }) => {
    await withSpinner(() => changeOwnerName(name), "Renaming repository...");
    await withSpinner(() => pnpmInstall(), "Updating dependencies...");
  })
  .parse(process.argv);

// If no options are provided, display the help message
if (!process.argv.slice(2).length) {
  program.outputHelp();
}
