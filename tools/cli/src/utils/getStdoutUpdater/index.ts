import { createLogUpdate } from "log-update";

/**
 * factory function for providing log-update instance
 */
function getStdoutUpdater() {
  // Write output but don't hide the cursor
  return createLogUpdate(process.stdout, {
    showCursor: true,
  });
}
export default getStdoutUpdater;
