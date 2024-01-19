import url from "url";
import path from "path";
import fs from "fs";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __filePath = "/files/fresh.txt";

const create = async () => {
  const fullPath = path.join(__dirname, __filePath);
  const fileContent = "I am fresh and young";
  const exists = fs.existsSync(fullPath);
  if (exists) {
    throw Error("FS operation failed");
  }

  fs.writeFile(fullPath, fileContent, "utf8", (err) => {
    if (err) throw err;
    console.log("File created");
  });
  
};

await create();
