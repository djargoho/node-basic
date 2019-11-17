const fs = require("fs");
const path = require("path");

const filePath = __dirname + path.sep + "readme.txt";

fs.readFile(filePath, (err, data) => {
  if (err) {
    console.log("ERROR");
    throw err;
  }

  console.log(data);
  console.log(data.toString());
});
