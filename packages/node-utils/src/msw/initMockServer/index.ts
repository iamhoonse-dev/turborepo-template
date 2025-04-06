import type { HttpHandler, SharedOptions } from "msw";

/**
 * Initializes the mock server for testing purposes.
 *
 * @param handlers - An array of request handlers to be used by the mock server.
 * @param options - Optional configuration options for the mock server.
 */
const initMockServer = async (
  handlers: HttpHandler[],
  options?: Partial<SharedOptions>,
) => {
  // This code is only executed in a Node.js environment
  const isServer = typeof window === "undefined";
  if (!isServer) return;

  // Import the setupServer function from the msw/node module
  const { setupServer } = await import("msw/node");

  // This configures the server to use the provided request handlers
  const mockServer = setupServer(...handlers);
  mockServer.listen(options);
};
export default initMockServer;
