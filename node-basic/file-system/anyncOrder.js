//비동기를 순서대로 호출 하고 이어가기 위해서는 해당 콜백에 바로 넣는 식으로..
//toString을 하는 이유는 data가 buffer이기 떄문

const fs = require("fs");
const path = require("path");

const readFilePath = __dirname + path.sep + "readme2.txt";

console.log("시작");

fs.readFile(readFilePath, (err, data) => {
  if (err) {
    throw err;
  }

  console.log("1번 읽기 : ", data.toString());

  fs.readFile(readFilePath, (err, data) => {
    if (err) {
      throw err;
    }

    console.log("2번 읽기 : ", data.toString());

    fs.readFile(readFilePath, (err, data) => {
      if (err) {
        throw err;
      }

      console.log("3번 읽기 : ", data.toString());
    });
  });
});

console.log("끝");
