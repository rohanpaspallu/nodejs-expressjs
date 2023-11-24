const EventEmitter = require("events");
const http = require("http");

//----------------------------Basic Example--------------------------
// const customEmitter = new EventEmitter();

// customEmitter.on("response", (x) => {
//   console.log(`data received ${JSON.stringify(x)}`);
// });
// // customEmitter.on("response", () => {
// //   console.log(`data received 2`);
// // });

// customEmitter.emit("response", { name: "abc" });
