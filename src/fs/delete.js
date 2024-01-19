import url from "url";
import path from "path";
import fs from "fs";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "/files", "fileToRemove.txt");

const remove = async () => {
  fs.unlink(filePath, (err) => {
    if (err) throw Error("FS operation failed");
    console.log("File deleted");
  });
};

await remove();
