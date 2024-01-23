import zlib from "zlib";
import url from "url";
import path from "path";
import fs from "fs";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "/files", "fileToCompress.txt");
const fileGzipPath = path.join(__dirname, "/files", "archive.gz");
const gzipConverter = zlib.createGzip();

const compress = async () => {
  const writeStream = fs.createWriteStream(fileGzipPath);
  const readStream = fs.createReadStream(filePath);
  readStream
    .on("error", (err) => console.log(`Err: ${err.message}`))
    .pipe(gzipConverter)
    .pipe(writeStream);
};

await compress();
