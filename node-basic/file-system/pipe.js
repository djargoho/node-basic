//파일을 읽고 그 파일을 복사하는 방법

//미리 일긱 스트림과 쓰기 스트림을 만들어 둔 후 두 개의 스트림 사이를 pipe 메서드로 연결해주면 저절로 데이터가 writeStream으로 넘어 간다.
//따로 on('data')나 writeStream.write()를 하지 않아도 알아서 전달 됌

//새로운 복사 방식도 있으니 참고 3.6.3절 참고(기타 fs 메서드)
//pipe는 스트림 사이에 연결할 수 있다. 

const fs = require("fs");
const path = require("path");

const readFilePath = __dirname + path.sep + "readme4.txt";
const writeFilePath = __dirname + path.sep + "writeme3.txt";

const readStream = fs.createReadStream(readFilePath);
const writeStream = fs.createWriteStream(writeFilePath);

readStream.pipe(writeStream);
