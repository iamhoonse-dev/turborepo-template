import listDirContents from ".";

import { describe, it, expect, vi } from "vitest";

describe("listDirContents", () => {
  it("should list the contents of the directory on console table", async () => {
    // Use the current directory for testing
    const dirPath = __dirname;

    // Mock the console.table function
    const tableSpy = vi.spyOn(console, "table").mockImplementation(() => {});

    // Call the function
    await listDirContents(dirPath);

    // check if console output as table
    expect(tableSpy).toHaveBeenCalled();

    // Restore the original console.table function
    vi.restoreAllMocks();
  });

  it("should throw an error if the directory does not exist", async () => {
    const invalidDirPath = "invalid/path/to/dir";
    await expect(listDirContents(invalidDirPath)).rejects.toThrowError();
  });
});
