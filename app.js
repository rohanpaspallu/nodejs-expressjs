const fs = require("fs");
const http = require("http");
const stream = fs.createReadStream("./content/big.txt", {
  highWaterMark: 90000,
  //   encoding: "utf-8",
});

stream.on("data", (result) => {
  console.log(result);
});
stream.on("error", (err) => console.log(err));

const server = http.createServer((req, res) => {
  //   const text = fs.readFileSync("./content/big.txt", "utf-8");
  //   res.end(text);

  const filestream = fs.createReadStream("./content/big.txt", {
    highWaterMark: 90000,
    //   encoding: "utf-8",
  });

  filestream.on("open", () => {
    filestream.pipe(res);
  });
  filestream.on("error", (err) => {
    res.end(err);
  });
});

server.listen("5000");
