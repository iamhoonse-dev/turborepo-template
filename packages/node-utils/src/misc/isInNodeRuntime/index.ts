/**
 * Checks if the code is running in a Node.js environment.
 */
export default function isInNodeRuntime() {
  return typeof global !== "undefined" && typeof window === "undefined";
}
