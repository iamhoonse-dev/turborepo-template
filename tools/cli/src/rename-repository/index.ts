#! /usr/bin/env node

import { textSync } from "figlet";
import { Command } from "commander";
import renameRepository from "./renameRepository";
import withSpinner from "../utils/withSpinner";
import pnpmInstall from "../utils/pnpm-install";

// program is a command-line interface (CLI) library for Node.js
const program = new Command();

// ASCII art for the CLI
console.log(textSync("Rename Repository"));

// This is a simple CLI program that allows you to rename repository
program
  .version("0.0.0")
  .description("A CLI for renaming repository")
  .option("-n, --name <value>", "New name for repository")
  .action(async ({ name }) => {
    await withSpinner(() => renameRepository(name), "Renaming repository...");
    await withSpinner(() => pnpmInstall(), "Updating dependencies...");
  })
  .parse(process.argv);

// If no options are provided, display the help message
if (!process.argv.slice(2).length) {
  program.outputHelp();
}
