import fs from "fs";

export default function createFile(filepath: string) {
  fs.writeFileSync(filepath, "");
  console.log("An empty file has been created");
}
