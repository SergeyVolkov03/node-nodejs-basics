import { Worker } from "worker_threads";
import url from "url";
import path from "path";
import { cpus } from "os";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "worker");
const cpuCount = cpus().length;

const performCalculations = async () => {
  const arrayWorkersResult = [];
  for (let i = 0; i < cpuCount; i++) {
    arrayWorkersResult.push(
      new Promise((resolve, reject) => {
        const worker = new Worker(filePath, {
          workerData: {
            number: 10 + i,
          },
        });
        worker.on("message", resolve);
        worker.on("error", reject);
      })
    );
  }

  const resultPromises = await Promise.allSettled(arrayWorkersResult);
  const result = resultPromises.map((res) => {
    if (res.status === "fulfilled") {
      return { status: "resolved", value: res.value };
    } else {
      return { status: "error", value: null };
    }
  });
  console.log(result);
};

await performCalculations();
