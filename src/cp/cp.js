import cp from "child_process";
import url from "url";
import path from "path";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const scriptPath = path.join(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
  if (!args) {
    args = [];
  }
  const child = cp.spawn("node", [scriptPath, ...args]);
  process.stdin.on("data", (data) => {
    child.stdin.write(data);
  });
  child.stdout.on("data", (data) => {
    process.stdout.write(data);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess();
