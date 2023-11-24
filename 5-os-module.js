const os = require("os");
//info about user
const user = os.userInfo();
console.log("user data is : ", user);

//method returns system uptime in seconds
console.log(new Date(os.uptime()).getHours());

//current os
const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(`current os : ${JSON.stringify(currentOs)}`);
