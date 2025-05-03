import { execSync } from "child_process";
import getStdoutUpdater from "../getStdoutUpdater";

/**
 * Executes the `pnpm install` command to install dependencies synchronously.
 */
function pnpmInstall() {
  const updateStdout = getStdoutUpdater();

  try {
    const output = execSync("pnpm install");
    if (output) {
      updateStdout(output.toString());
    }
  } catch (error) {
    console.error(`Error: ${error}`);
    throw error;
  } finally {
    updateStdout.done();
  }
}
export default pnpmInstall;
