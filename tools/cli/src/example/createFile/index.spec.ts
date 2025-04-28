import createFile from ".";

import { describe, it, expect } from "vitest";
import fs from "fs";

describe("createFile", () => {
  it("should create a file with the specified name", async () => {
    const filePath = "test.txt";

    // Call the function
    createFile(filePath);

    // Check if the file was created
    const fileExists = await fs.promises
      .access(filePath)
      .then(() => true)
      .catch(() => false);
    expect(fileExists).toBe(true);

    // Clean up: remove the created file
    await fs.promises.unlink(filePath);
  });
});
