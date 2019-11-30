const http = require("http");

const parseCookies = (cookie = "") =>
  cookie
    .split(";")
    .map(v => v.split("="))
    .map(([k, ...vs]) => [k, vs.join("=")])
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

const server = http.createServer((req, res) => {
  console.log("COOKIE ORIGIN", req.headers.cookie);
  const cookies = parseCookies(req.headers.cookie);
  console.log("URL", req.url); //req.url은 주소의 path와 search부분을 알려준다.
  console.log("cookies", cookies);
  //Set-Cookie는 브라우저한테 다음과 같은 값의 쿠키를 저장하라는 의미 , 실제로 응답을 받은 브라우저는 mycookie=test라는 쿠키를 저장, 서버는 브라우저한테 이 쿠키 저장해 라고 명령 한것
  res.writeHead(200, { "Set-Cookie": "mycookie=test" }); 
  res.end("Hello Cookie!");
});

server.listen(8082, () => {
  console.log("8082포트에서 쿠키 놀이중");
});

//favicon 이란 탭 이름옆에 들어가는 쪼마난 아이콘 favicon.ico
//브라우저는 파비콘이 뭔지 HTML에서 유추할 수 없으면 서버에 파비콘 정보에 대한 요청을 보낸다.
//HTML에 favicon을 안넣었으므로 브라우저가 추가로 favicon.ico를 요청한 것임
