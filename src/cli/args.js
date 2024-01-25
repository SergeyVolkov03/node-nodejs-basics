export const parseArgs = () => {
  const array = process.argv.slice(2);
  let result = "";

  for (let index = 0; index < array.length; index += 2) {
    result += `${array[index].substring(2, array[index].length)} is ${
      array[index + 1]
    }, `;
  }

  console.log(result.substring(0, result.length - 2));
};

parseArgs();
