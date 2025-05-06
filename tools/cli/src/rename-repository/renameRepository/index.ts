import fs from "fs";
import path from "path";
import replaceAllInDirectory from "../../utils/replaceAllInDirectory";

/**
 * Renames current repository
 *
 * @param targetName - The new name for the repository
 */
export default function renameRepository(targetName: string) {
  // get repository root directory
  const rootDir = path.resolve(__dirname, "../../../../../"); // Adjust based on project structure

  // get current repository name
  const rootPackageJsonPath = path.join(rootDir, "package.json");
  const rootPackageJson = JSON.parse(
    fs.readFileSync(rootPackageJsonPath, "utf-8"),
  );
  const oldName = rootPackageJson.name;

  // replace all occurrences of the old name with the new name
  replaceAllInDirectory(rootDir, oldName, targetName);
}
