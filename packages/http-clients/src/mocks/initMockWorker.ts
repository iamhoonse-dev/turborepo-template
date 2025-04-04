import rootHandlers from "@/mocks/handlers";
import type { StartOptions } from "msw/browser";

/**
 * Initializes the mock worker for testing purposes.
 *
 * @param options - Optional configuration options for the worker.
 */
const initMockWorker = async (options?: StartOptions) => {
  // This code is only executed in the browser
  const isBrowser = typeof window !== "undefined";
  if (!isBrowser) return;

  // Import the setupWorker function from the msw/browser package
  const { setupWorker } = await import("msw/browser");

  // This configures a request mocking worker with the given request handlers.
  const mockWorker = setupWorker(...rootHandlers);
  await mockWorker.start(options);
};
export default initMockWorker;
