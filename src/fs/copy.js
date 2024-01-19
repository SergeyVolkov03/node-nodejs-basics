import url from "url";
import path from "path";
import fs from "fs";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const folderPath = path.join(__dirname, "/files");
const copyFolderPath = path.join(__dirname, "/files_copy");

const copy = async () => {
  if (!fs.existsSync(folderPath) || fs.existsSync(copyFolderPath)) {
    throw Error("FS operation failed");
  } else {
    fs.mkdir(copyFolderPath, (err) => {
      if (err) throw err;
    });
    fs.readdir(folderPath, "utf8", (err, files) => {
      if (err) throw err;
      files.forEach((file) => {
        fs.readFile(path.join(folderPath, file), "utf8", (err, data) => {
          if (err) throw err;
          fs.writeFile(path.join(copyFolderPath, file), data, "utf8", (err) => {
            if (err) throw err;
          });
        });
      });
      console.log('Folder copied');
    });
  }
};

await copy();
