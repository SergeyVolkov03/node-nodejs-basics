import url from "url";
import path from "path";
import fs from "fs";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "/files", "wrongFilename.txt");
const copyFilePath = path.join(__dirname, "/files", "properFilename.md");

const rename = async () => {
  if (!fs.existsSync(filePath) || fs.existsSync(copyFilePath)) {
    throw Error("FS operation failed");
  }

  fs.rename(filePath, copyFilePath, (err) => {
    if (err) throw err;
    console.log("File renamed");
  });
};

await rename();
