import { Transform } from "stream";

const transform = async () => {
  const transform = new Transform({
    transform(chunk, _, callback) {
      const reverse = chunk.toString().split('').reverse().join('');
      callback(null, reverse);
    },
  });
  process.stdin.pipe(transform).pipe(process.stdout);
};

await transform();
