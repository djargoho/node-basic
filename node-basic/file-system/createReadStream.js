const fs = require("fs");
const path = require("path");

const readFilePath = __dirname + path.sep + "readme3.txt";

//읽기 스트림을 만들어 준다. 첫번째 인자는 파일 경로, 두번째 인자는 옵션 객체 (highWaterMark : 버퍼의 크기를 정할 수 있음(byte 단위), 기본값은 64byte )
const readStream = fs.createReadStream(readFilePath, { highWaterMark: 20 });
const data = [];

//보통 data(파읽 읽기 시작되면 발생하는 이벤트), end(데이터 읽기가 끝났을 시), error(데이터 읽는 도중 오류 발생시) 이벤트를 사용
readStream.on("data", chunk => {
  data.push(chunk);
  console.log("data : ", chunk, chunk.length);
});

readStream.on("end", () => {
  console.log("end : ", Buffer.concat(data).toString());
});

readStream.on("error", err => {
  console.log("error", err);
});
