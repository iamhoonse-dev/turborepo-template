import fs from "fs";

/**
 * Replaces all occurrences of a string in a file with another string
 *
 * @param filePath - The path to the file
 * @param oldString - The string to be replaced
 * @param newString - The string to replace with
 */
export default function replaceInFile(
  filePath: string,
  oldString: string,
  newString: string,
) {
  const content = fs.readFileSync(filePath, "utf-8");
  const updatedContent = content.replace(new RegExp(oldString, "g"), newString);
  fs.writeFileSync(filePath, updatedContent, "utf-8");
}
