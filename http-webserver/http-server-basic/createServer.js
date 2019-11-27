const http = require("http");

//이벤트 리스너를 가진 서버를 만들어 보자

// http
//   .createServer((req, res) => {
//     res.write("<h1>Hello Node</h1>");
//     res.end("<p>Hello Server</p>");
//   })
//   .listen(8585, () => { //8585포트에 요청이 오기를 기다린다.
//     console.log("8080 서버에서 이렇게 놀고 있습니더");
//   });

//에러까지 붙여보자

const server = http.createServer((req, res) => {
  //   console.log("I GOT you", req);
  res.write("<h1>Hello Node</h1>"); //여러번 호출해서 데이터를 여러개 보내도 된다.
  res.end("<p>Hello Server</p>"); //응답을 중단하는 메서드
});

server.listen(8585, () => {
  //listen 메서드 말고도 아래와 같이 이벤트 리스너를 이용하는 방법도 있다.
  //8585포트에 요청이 오기를 기다린다.
  console.log("8585 서버에서 이렇게 놀고 있습니더");
});

server.on("listening", () => {
  //8585포트에 요청이 오기를 기다린다.
  console.log("8585 서버에서 이렇게 놀고 있습니더 추가2");
});

server.on("error", error => {
  console.error("error", error);
});
