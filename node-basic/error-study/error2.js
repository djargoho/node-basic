const fs = require("fs");

//fs.unlink로 없는 파일을 지우고 있지만, 노드 내장 모듈의 에러는 실행중인 프로세스를 멈추게 하지 않는다.
//에러 로그를 기록해두고 나중에 원인을 찾아 수정하면 된다.

setInterval(() => {
  fs.unlink("./abcdefg.js", err => {
    if (err) {
      console.error(err);
    }
  });
}, 1000);
