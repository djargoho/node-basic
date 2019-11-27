const http = require("http");
const fs = require("fs");
const path = require("path");

const filePath = __dirname + path.sep + "server2.html";

const server = http.createServer((req, res) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      throw err;
    }
    res.end(data);
  });
});

server.listen(8585, () => {
  console.log("8585 Server Open!");
});
