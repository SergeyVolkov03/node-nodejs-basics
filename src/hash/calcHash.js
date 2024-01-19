import { createHash } from "node:crypto";
import url from "url";
import path from "path";
import fs from "fs";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "/files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
  const stream = fs.createReadStream(filePath, "utf8");
  stream.on("data", (data) => console.log(createHash("sha256").update(data).digest("hex")));
  stream.on("error", (err) => console.log(`Err: ${err}`));
};

await calculateHash();
