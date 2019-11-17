const zlib = require("zlib");
const fs = require("fs");
const path = require("path");

const readFilePath = __dirname + path.sep + "readme4.txt";
const readStream = fs.createReadStream(readFilePath);

const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream(readFilePath + ".gz");
readStream.pipe(zlibStream).pipe(writeStream);

//파일을 읽은 후 gzip으로 압축하는 코드

//노드에서는 파일을 압축하는 zilb이라는 모듈을 제공
//잘 사용하지는 않음
//but zlib이 createGzip이라는 메서드가 stream을 지원하므로 readStream, writeStream 중간에서 piping이 가능
//버퍼 데이터가 전달 되다가 gzip압축을 거친 후 파일로 쓰여진다.

