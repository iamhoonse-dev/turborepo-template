import { handlers as selfHandlers } from "./self";

/**
 * Creates an array of request handlers for the MSW (Mock Service Worker) library.
 */
const rootHandlers = [
  ...selfHandlers,
  // Add more handlers here if needed
];
export default rootHandlers;
