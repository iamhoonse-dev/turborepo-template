import fs from "fs";
import path from "path";
import getStdoutUpdater from "../../utils/getStdoutUpdater";

/**
 * Renames the scope of a package name in each file with the specified extension
 */
const TARGET_EXTENSIONS = ["md", "json", "css", "ts", "tsx", "js", "jsx"];

/**
 * Directories to exclude from renaming
 */
const EXCLUDE_DIRS = [
  "node_modules",
  ".git",
  ".devcontainer",
  ".github",
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
 * Changes the owner name of the current repository
 *
 * @param targetName - The new owner name
 */
export default function changeOwnerName(targetName: string) {
  // get repository root directory
  const rootDir = path.resolve(__dirname, "../../../../../"); // Adjust based on project structure

  // current owner name
  const oldName = "iamhoonse-dev";

  const updateStdout = getStdoutUpdater();

  function replaceInFile(filePath: string) {
    updateStdout("file : ", filePath);
    const content = fs.readFileSync(filePath, "utf-8");
    const updatedContent = content.replace(
      new RegExp(oldName, "g"),
      targetName,
    );
    fs.writeFileSync(filePath, updatedContent, "utf-8");
  }

  function processDirectory(directory: string) {
    const entries = fs.readdirSync(directory, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(directory, entry.name);
      const ext = path.extname(entry.name);
      if (entry.isDirectory() && !EXCLUDE_DIRS.includes(entry.name)) {
        processDirectory(fullPath);
      } else if (
        entry.isFile() &&
        TARGET_EXTENSIONS.some((target) => ext.endsWith(target)) &&
        fullPath !== __filename
      ) {
        replaceInFile(fullPath);
      }
    }
  }

  updateStdout("file : ", __filename);
  updateStdout("rootDir : ", rootDir);
  processDirectory(rootDir);
  updateStdout.done();
}
