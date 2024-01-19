import url from "url";
import path from "path";
import fs from "fs";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "/files", "fileToRead.txt");

const read = async () => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) throw Error('FS operation failed');
    console.log(data);
  });
};

await read();
