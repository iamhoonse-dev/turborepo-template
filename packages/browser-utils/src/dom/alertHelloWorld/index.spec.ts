import { describe, test, expect, vi } from "vitest";

describe("alertHelloWorld()", () => {
  test("should alert 'Hello World'", () => {
    const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});
    import(".").then((module) => {
      const alertHelloWorld = module.default;
      alertHelloWorld();
      expect(alertMock).toHaveBeenCalledWith("Hello World");
      alertMock.mockRestore();
    });
  });
});
