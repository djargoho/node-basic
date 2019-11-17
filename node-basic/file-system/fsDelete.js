const fs = require("fs");
const path = require("path");

const filePath = __dirname + path.sep + "folder";

fs.readdir(filePath, (err, dir) => {    //폴더의 내용물을 확인가능. 배열 안에 내부 파일과 폴더명이 나옴
  if (err) {
    throw err;
  }
  console.log("폴더 내용 확인", dir); //폴더 내용 확인 [ 'newfile.js' ]

  fs.unlink(filePath + path.sep + "newfile.js", err => {    //파일을 지울 수 있음, 파일이 없으면 에러 발생 있는지 먼저 확인해야함
    if (err) {
      throw err;
    }

    console.log("파일 삭제 성공");

    fs.rmdir(filePath, err => { //폴더를 지울 수 있음, 폴더 안에 파일이 있으면 에러를 발생하므로 먼저 내부 파일을 모두 지우고 호출해야함
      if (err) {
        throw err;
      }
      console.log("정상적으로 폴더가 삭제 되었습니다.");
    });
  });
});
