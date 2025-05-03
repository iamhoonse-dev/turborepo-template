import { execSync } from "child_process";

/**
 * Executes the `pnpm install` command to install dependencies synchronously.
 */
function pnpmInstall() {
  try {
    const output = execSync("pnpm install", { stdio: "inherit" });
    console.log(output.toString());
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}
export default pnpmInstall;
