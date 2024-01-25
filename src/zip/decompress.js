import zlib from "zlib";
import url from "url";
import path from "path";
import fs from "fs";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "/files", "fileToCompress.txt");
const fileGzipPath = path.join(__dirname, "/files", "archive.gz");
const gzipConverter = zlib.createGunzip();

const decompress = async () => {
  const readStream = fs.createReadStream(fileGzipPath);
  const writeStream = fs.createWriteStream(filePath);
  readStream
    .on("error", (err) => console.log(`Err: ${err.message}`))
    .pipe(gzipConverter)
    .pipe(writeStream);
};

await decompress();
