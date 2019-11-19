//더이상 파일을 복사하려고 createReadStream과 createWriteStream을 pipe를 하지 않아도 됌

const fs = require("fs");
const path = require("path");

const filePath = __dirname + path.sep;

fs.copyFile(filePath + "readme4.txt", filePath + "writeme5.txt", err => {
  if (err) {
    return console.error(err);
  }

  console.log("복사 완료");
});

//fs 프로미스 
//노드 10버전에 fs모듈을 프로미스 형식으로 사용하는 방법이 추가 
//const fsPromises = require('fs').promises 형태 사용 가능 
// 최근에 추가됌 

