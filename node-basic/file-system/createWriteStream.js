const fs = require("fs");
const path = require("path");

const writeFilePath = __dirname + path.sep + "writeme2.txt";

const writeStream = fs.createWriteStream(writeFilePath);

writeStream.on("finish", () => {
  console.log("파일 쓰기가 완료 되었습니다.");
});

writeStream.write("이 파일이 써진다고 하네여 \n");
writeStream.write(
  "이런식으로 글을 이어서도 쓰기 가능하고 끝에 end() 메서드만 불러와주면 완료 된다고 합니더"
);
writeStream.end();
