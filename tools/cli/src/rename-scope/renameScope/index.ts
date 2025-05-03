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
 * Renames the scope of a package name from @foo/ to @<name>/
 *
 * @param name - The new name for the package scope
 */
export default function renameScope(name: string) {
  const targetScope = `@${name}/`;
  const oldScope = "@repo/";
  const rootDir = path.resolve(__dirname, "../../../../../"); // Adjust based on project structure

  const updateStdout = getStdoutUpdater();

  function replaceInFile(filePath: string) {
    updateStdout("file : ", filePath);
    const content = fs.readFileSync(filePath, "utf-8");
    const updatedContent = content.replace(
      new RegExp(oldScope, "g"),
      targetScope,
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
