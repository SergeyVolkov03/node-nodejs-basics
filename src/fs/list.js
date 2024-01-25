import url from "url";
import path from "path";
import fs from "fs";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const folderPath = path.join(__dirname, "/files");

const list = async () => {
  if (!fs.existsSync(folderPath)) throw Error("FS operation failed");
  fs.readdir(folderPath, "utf8", (err, files) => {
    if (err) throw err;

    console.log(files);
  });
};

await list();
