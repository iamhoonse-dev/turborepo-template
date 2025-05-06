import path from "path";
import replaceAllInDirectory from "../../utils/replaceAllInDirectory";

/**
 * Renames the scope of a package name from @foo/ to @<name>/
 *
 * @param name - The new name for the package scope
 */
export default function renameScope(name: string) {
  // get repository root directory
  const rootDir = path.resolve(__dirname, "../../../../../"); // Adjust based on project structure

  // current scope name
  const oldScope = "@repo/";

  // new scope name
  const targetScope = `@${name}/`;

  // replace all occurrences of the old scope with the new scope
  replaceAllInDirectory(rootDir, oldScope, targetScope);
}
