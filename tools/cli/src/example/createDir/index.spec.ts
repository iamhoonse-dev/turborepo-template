import createDir from ".";

import { describe, it, expect } from "vitest";
import fs from "fs";

describe("createDir", () => {
  it("should create a directory with the specified name", async () => {
    const dirPath = "testDir";

    // Call the function
    createDir(dirPath);

    // Check if the directory was created
    const dirExists = await fs.promises
      .access(dirPath)
      .then(() => true)
      .catch(() => false);
    expect(dirExists).toBe(true);

    // Clean up: remove the created directory
    await fs.promises.rmdir(dirPath, { recursive: true });
  });
});
