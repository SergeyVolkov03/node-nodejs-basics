import url from "url";
import path from "path";
import fs from "fs";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "/files", "fileToWrite.txt");

const write = async () => {
  const stream = fs.createWriteStream(filePath, "utf8");
  process.stdin.pipe(stream);
};

await write();
