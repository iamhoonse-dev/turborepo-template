import path from "path";
import replaceAllInDirectory from "../../utils/replaceAllInDirectory";

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

  // replace all occurrences of the old name with the new name
  replaceAllInDirectory(rootDir, oldName, targetName);
}
