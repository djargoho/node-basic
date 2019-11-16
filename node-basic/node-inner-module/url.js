const url = require("url");

//WHATWG(웹 표준을 정하는 단체 이름) 방식의 URL
//WHATWG에만 있는 username, password, origin , searchParam 속성이 존재
const { URL } = url;
const myURL = new URL(
  "http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor"
); //
console.log("new URL():", myURL);
console.log("url.format():", url.format(myURL));
console.log("------------------------------");
const parsedUrl = url.parse(
  "http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000&category=nodejs&category=javascript#anchor"
); 
console.log("url.parse():", parsedUrl); //해당 URL 객체를 파싱, WHATWG방식과 다르게 username, password대신 auth 속성, searchParams 대신 query가 있다.
console.log("url.format():", url.format(parsedUrl)); //WHATWG방식의 url 과 기존 노드의 url 모두 사용가능 분해 되었던 url 객체를 월래상태로 조립
