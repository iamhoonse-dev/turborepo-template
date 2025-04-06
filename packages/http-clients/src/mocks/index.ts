import { handlers as selfHandlers } from "./self";
import { handlers as iamhoonseDevHandlers } from "./iamhoonse.dev";

/**
 * Creates an array of request handlers for the MSW (Mock Service Worker) library.
 */
const rootHandlers = [
  ...selfHandlers,
  ...iamhoonseDevHandlers,
  // Add more handlers here if needed
];
export default rootHandlers;
