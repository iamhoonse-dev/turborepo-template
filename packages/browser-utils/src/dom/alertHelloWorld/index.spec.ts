import { describe, test, expect, vi } from "vitest";

describe("alertHelloWorld()", () => {
  test("should alert 'Hello World'", async () => {
    const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});
    const { default: alertHelloWorld } = await import(".");
    alertHelloWorld();
    expect(alertMock).toHaveBeenCalledWith("Hello World");
    alertMock.mockRestore();
  });
});
