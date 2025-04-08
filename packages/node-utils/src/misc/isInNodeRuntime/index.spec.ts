import { describe, test, expect, vi } from "vitest";
import isInNodeRuntime from ".";

describe("isInNodeRuntime()", () => {
  test("should return true when running in Node.js environment", async () => {
    // Call the function and check the result
    expect(isInNodeRuntime()).toBe(true);
  });
  test("should return false when running in a browser environment", async () => {
    // Mock the global objects to simulate a browser environment
    const windowSpy = vi
      .spyOn(globalThis, "global", "get")
      // @ts-expect-error TS2322
      .mockImplementation(() => undefined);

    // Call the function and check the result
    expect(isInNodeRuntime()).toBe(false);

    // Restore the original global objects
    windowSpy.mockRestore();
  });
});
