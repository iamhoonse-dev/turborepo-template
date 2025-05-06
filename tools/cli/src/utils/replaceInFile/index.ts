import fs from "fs";

/**
 *
 * @param filePath
 * @param oldString
 * @param newString
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
