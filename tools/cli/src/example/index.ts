#! /usr/bin/env node

import { textSync } from "figlet";
import { Command } from "commander";
import path from "path";
import listDirContents from "./listDirContents";
import createDir from "./createDir";
import createFile from "./createFile";

// program is a command-line interface (CLI) library for Node.js
const program = new Command();

// ASCII art for the CLI
console.log(textSync("Dir Manager"));

// This is a simple CLI program that allows you to manage directories and files
program
  .version("1.0.0")
  .description("An example CLI for managing a directory")
  .option("-l, --ls  [value]", "List directory contents")
  .option("-m, --mkdir <value>", "Create a directory")
  .option("-t, --touch <value>", "Create a file")
  .parse(process.argv);

// options is an object that contains the parsed command-line options
const options = program.opts();

// --ls
if (options.ls) {
  const filepath = typeof options.ls === "string" ? options.ls : __dirname;
  void listDirContents(filepath);
}

// --mkdir
if (options.mkdir) {
  createDir(path.resolve(__dirname, options.mkdir));
}

// --touch
if (options.touch) {
  createFile(path.resolve(__dirname, options.touch));
}

// If no options are provided, display the help message
if (!process.argv.slice(2).length) {
  program.outputHelp();
}
