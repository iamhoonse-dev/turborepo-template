/**
 * This function is used to register the mock server for the application.
 */
export async function register() {
  // This code is only executed in a Node.js environment
  if (process.env.NEXT_RUNTIME === "nodejs") {
    /*
      dynamically importing the setupMockServer function from the utils/msw/setupMockServer module
     */
    const { default: setupMockServer } = await import(
      "./utils/msw/setupMockServer"
    );
    await setupMockServer();
  }
}
