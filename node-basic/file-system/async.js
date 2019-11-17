//파일 읽는 순서는 참고로 그냥 비동기이다.
//읽는 순서는 랜덤이다! 항상 순서대로가 아니다.
//이러한 비동기 방식은 수백개의 I/O 요청이 들어와도 메인 스레드는 백그라운드에 요청처리를 위임한다. 
//나중에 백그라운드가 각각의 요청 처리가 완료되었다고 알리면 그때 콜백 함수를 처리하면 된다. 
//blockingAndNonbloking.txt 참고

const fs = require("fs");
const path = require("path");

const readFilePath = __dirname + path.sep + "readme2.txt";

console.log("시작");
fs.readFile(readFilePath, (err, data) => {
  if (err) {
    throw err;
  }

  console.log("1번 파일 읽기 : ", data.toString());
});
fs.readFile(readFilePath, (err, data) => {
  if (err) {
    throw err;
  }

  console.log("2번 파일 읽기 : ", data.toString());
});

fs.readFile(readFilePath, (err, data) => {
  if (err) {
    throw err;
  }

  console.log("3번 파일 읽기 : ", data.toString());
});
console.log("끝");