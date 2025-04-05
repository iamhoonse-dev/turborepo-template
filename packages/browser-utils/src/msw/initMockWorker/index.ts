import type { HttpHandler } from "msw";
import type { StartOptions } from "msw/browser";

/**
 * Initializes the mock worker for testing purposes.
 *
 * @param handlers - An array of request handlers to be used by the worker.
 * @param options - Optional configuration options for the worker.
 */
const initMockWorker = async (
  handlers: HttpHandler[],
  options?: StartOptions,
) => {
  // This code is only executed in the browser
  const isBrowser = typeof window !== "undefined";
  if (!isBrowser) return;

  // Import the setupWorker function from the msw/browser package
  const { setupWorker } = await import("msw/browser");

  // This configures a request mocking worker with the given request handlers.
  const mockWorker = setupWorker(...handlers);
  await mockWorker.start(options);
};
export default initMockWorker;
