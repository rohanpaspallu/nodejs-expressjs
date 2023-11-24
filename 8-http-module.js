const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log(req);
  console.log("url is  : ", res.url);
  if (req.url === "/") res.end("Home page");
  if (req.url === "/about") res.end("About Page !!!!");
  //   res.write("welcome to our home page");
  //   res.end();
  res.end(`<h1>opps</h1>
  <p> The page doesnt exist</p>
  <a href="/">Go to home page</a>
  `);
});

server.listen(5000);
