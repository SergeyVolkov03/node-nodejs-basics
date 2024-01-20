import url from "url";
import path from "path";
import fs from "fs";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "/files", "fileToRea.txt");

const read = async () => {
  const stream = fs.createReadStream(filePath, "utf8");

  stream.pipe(process.stdout);
  stream.on("error", (err) => console.log(`Err: ${err}`));
};

await read();

setTimeout(() => {
  console.log("hello");
}, 1000);
