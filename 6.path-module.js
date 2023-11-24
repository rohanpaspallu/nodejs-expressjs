const path = require("path");

console.log(path.sep);

//path.join

const filepath = path.join("/content", "subfolder", "test.txt");
console.log("file path is  : ", filepath);

const base = path.basename(filepath);
console.log(`base path is : ${base}`);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log("absolute : ", absolute);
