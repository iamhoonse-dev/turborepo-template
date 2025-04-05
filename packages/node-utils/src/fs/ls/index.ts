import fs from "fs";

/**
 * Lists files in the current directory with their details.
 */
export default function ls() {
  const files = fs.readdirSync(process.cwd());
  return files.map((file) => {
    const stats = fs.statSync(file);
    return {
      name: file,
      isDirectory: stats.isDirectory(),
      size: stats.size,
      lastModified: stats.mtime,
    };
  });
}
