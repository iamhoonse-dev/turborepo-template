import fs from "fs";
import path from "path";
import getStdoutUpdater from "../getStdoutUpdater";
import replaceInFile from "../replaceInFile";

/**
 * Files to include in the renaming process
 */
const FILES_TO_INCLUDE = ["LICENSE"];

/**
 * Renames the scope of a package name in each file with the specified extension
 */
const TARGET_EXTENSIONS = [
  "md",
  "yml",
  "yaml",
  "json",
  "css",
  "ts",
  "tsx",
  "js",
  "jsx",
];

/**
 * Directories to exclude from renaming
 */
const EXCLUDE_DIRS = [
  "node_modules",
  ".git",
  ".devcontainer",
  ".husky",
  ".idea",
  ".turbo",
  ".vscode",
  ".next",
  "dist",
  "build",
  "out",
  "storybook-static",
];

/**
 * Recursively replaces all occurrences of a string in files with the specified extensions
 *
 * @param rootDir - The root directory to start the search
 * @param oldString - The string to be replaced
 * @param newString - The string to replace with
 * @param excludeDirs - Directories to exclude from the search
 * @param targetExtensions - File extensions to target for replacement
 * @param filesToInclude - Files to include in the renaming process
 */
export default function replaceAllInDirectory(
  rootDir: string,
  oldString: string,
  newString: string,
  { excludeDirs, targetExtensions, filesToInclude } = {
    excludeDirs: EXCLUDE_DIRS,
    targetExtensions: TARGET_EXTENSIONS,
    filesToInclude: FILES_TO_INCLUDE,
  },
) {
  const updateStdout = getStdoutUpdater();

  updateStdout("rootDir : ", rootDir);

  (function processDirectory(directory: string) {
    const entries = fs.readdirSync(directory, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(directory, entry.name);
      const ext = path.extname(entry.name);
      if (entry.isDirectory() && !excludeDirs.includes(entry.name)) {
        processDirectory(fullPath);
      } else if (
        entry.isFile() &&
        targetExtensions.some((target) => ext.endsWith(target)) &&
        fullPath !== __filename
      ) {
        replaceInFile(fullPath, oldString, newString);
      } else if (filesToInclude.includes(entry.name)) {
        replaceInFile(fullPath, oldString, newString);
      }
    }
  })(rootDir);

  updateStdout.done();
}
