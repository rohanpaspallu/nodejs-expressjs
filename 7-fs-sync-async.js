const { readFileSync, writeFileSync, readFile, writeFile } = require("fs");

//read first file synchronously
// const first = readFileSync("./content/first.txt", "utf-8");
// console.log("value of first : ", first);

// //read second file synchronously
// const second = readFileSync("./content/second.txt", "utf-8");
// console.log("value of second file : ", second);

// // copy values from second file to first file synchronously
// writeFileSync(
//   "./content/result_second.txt",
//   `Resultant file : ${first}, ${second}`,
//   { flag: "a" }
// );

// console.log(
//   "value of first after change : ",
//   readFileSync("./content/result_second.txt", "utf-8")
// );

//Read file asynchronously

const asyncRead = readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log("Error occured while reading file : ", err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-sync.txt",
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("final result  : ", result);
      }
    );
  });
  console.log("result is  : ", result);
});
