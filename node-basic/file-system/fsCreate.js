const fs = require("fs");
const path = require("path");
const readFilePath = __dirname + path.sep + "folder";

fs.access( //(패스, 옵션, 콜백) 폴더나 파일에 접근할 수 있는지를 체크 
  readFilePath,
  fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK, //F_OK 파일 존재여부 , R_OK 읽기 권한 여부, W_OK 쓰기 권한 여부를 체크  
  err => { // 폴더 권한이 없으면 에러가 발생. 에러코드는 'ENOENT'  
    if (err) {
      if (err.code === "ENOENT") {
        console.log("폴더 없음 ");
        fs.mkdir(readFilePath, err => { //폴더 만드는 메서드, 이미 폴더가 있으면 에러를 발생하므로 먼저 access() 메서드를 호출해서 확인할 필요가 있음
          if (err) {
            throw err;
          }
          console.log("폴더 만들기 성공");
           //파일의 아이디(fd변수)를 가져오는 메서드. 파일이 없으면 파일 생성후 아이디를 가져옴
           //가져온 아이디를 사용해 fs.read()나 fs.write()로 읽거나 쓸 수 있음. 
           //두번째 인자로 어떤 동작을 할 것인지 설정할 수 있음.
           //쓰려면 w, 읽으려면 r, 기존 파일에 추가하려면 a 
           //w이니까 파일이 없을 때, 파일을 만들 수 있음.
          fs.open(readFilePath + path.sep + "file.js", "w",  (err, fd) => {
            if (err) {
              throw err;
            }
            console.log("빈 파일 만들기 성공", fd);

            //파일 이름 바꾸는 메서드 
            //기존 파일 위치와 새로운 파일 위치를 적어주면 된다. 
            fs.rename( 
              readFilePath + path.sep + "file.js",
              readFilePath + path.sep + "newfile.js",
              err => {
                if (err) {
                  throw err;
                }

                console.log("이름 바꾸기 성공");
              }
            );
          });
        });
      } else {
        throw err;
      }
    } else {
      console.log("이미 폴더가 있음");
    }
  }
);
