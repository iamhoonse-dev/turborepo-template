import { describe, test, expect, vi } from "vitest";
import fs, { Dirent, Stats } from "fs";
import ls from ".";

describe("ls()", () => {
  test("should list files in the current directory", async () => {
    // @ts-expect-error TS2322: Type 'string' is not assignable to type 'Dirent'.
    const mockFiles: Dirent[] = ["file1.txt", "file2.txt"];
    // @ts-expect-error TS2740
    const mockStats: Stats = {
      isDirectory: vi.fn(() => false),
      size: 1_234,
      // eslint-disable-next-line sample/no-new-date
      mtime: new Date(),
    };

    vi.spyOn(fs, "readdirSync").mockReturnValue(mockFiles);
    vi.spyOn(fs, "statSync").mockReturnValue(mockStats);

    const result = ls();

    expect(result).toEqual([
      {
        name: "file1.txt",
        isDirectory: false,
        size: 1234,
        lastModified: mockStats.mtime,
      },
      {
        name: "file2.txt",
        isDirectory: false,
        size: 1234,
        lastModified: mockStats.mtime,
      },
    ]);

    expect(fs.readdirSync).toHaveBeenCalledWith(process.cwd());
    expect(fs.statSync).toHaveBeenCalledTimes(2);
  });
});
