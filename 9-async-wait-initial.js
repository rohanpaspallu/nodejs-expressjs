// const { readFile, writeFile } = require("fs");
// const util = require("util");

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);
// // const getText = (path) => {
// //   return new Promise((resolve, reject) => {
// //     readFile(path, "utf-8", (err, data) => {
// //       if (err) {
// //         reject(err);
// //       } else {
// //         resolve(data);
// //       }
// //     });
// //   });
// // };

// const start = async () => {
//   try {
//     const first = await readFilePromise("./content/first.txt", "utf-8");
//     const second = await readFilePromise("./content/second.txt", "utf-8");
//     await writeFilePromise(
//       "./content/result-mind-grenade.txt",
//       `This is awesome : ${first}, ${second}`
//     );
//     console.log("first here", first);
//     return first;
//   } catch (e) {
//     console.log("value of e : ", e);
//     return e;
//   }
// };

// start();

// ALTERNATIVE

const { readFile, writeFile } = require("fs").promises;
const util = require("util");

const start2 = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf-8");
    const second = await readFile("./content/second.txt", "utf-8");
    await writeFile(
      "./content/result-mind-grenade.txt",
      `This is awesome : ${first}, ${second}`,
      { flag: "a" }
    );
    console.log("first here", first);
    return first;
  } catch (e) {
    console.log("value of e : ", e);
    return e;
  }
};

start2();
