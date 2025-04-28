import fs from "fs";
import path from "path";

export default async function listDirContents(filepath: string) {
  const files = await fs.promises.readdir(filepath);
  const detailedFilesPromises = files.map(async (file: string) => {
    const fileDetails = await fs.promises.lstat(path.resolve(filepath, file));
    const { size, birthtime } = fileDetails;
    return { filename: file, "size(KB)": size / 1024, created_at: birthtime };
  });
  // add the following
  const detailedFiles = await Promise.all(detailedFilesPromises);
  console.table(detailedFiles);
}
