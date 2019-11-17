const fs = require("fs");
const path = require("path");

const writeFilePath = __dirname + path.sep + "writeme.txt";
console.log("writeFilePath", writeFilePath);

const content = "글이 입력 됩니다.";

fs.writeFile(writeFilePath, content, err => {
  if (err) {
    throw err;
  }

  fs.readFile(writeFilePath, (err, data) => {
    if (err) {
      throw err;
    }

    console.log(data.toString());
  });
});
