const path = require("path");

const filePath = __filename;
const dirPath = __dirname;

console.log("path.sep", path.sep); //경로의 구분자 운영체제별로 구분자가 다르기 때문에 사용하면 좋다.
console.log("path.delimiter", path.delimiter); //환경 변수의 구분자 window에서는 (;) POSIX에서는 (:)
console.log("------------------------------");
console.log("path.dirname()", path.dirname(filePath)); //파일이 위치한 폴더 경로
console.log("path.extname()", path.extname(filePath)); //파일의 확장자
console.log("path.basename()", path.basename(filePath)); //파일의 이름을 보여줌. 확장자 포함
console.log("path.basename()", path.basename(filePath, path.extname(filePath))); //파일의 이름을 보여줌. 확장자 미포함. 두번째 인자로 표시하기 싫은 파일의 확장자를 넣어주면 된다.
console.log("-----------------------------------------------------------");
console.log("path.parse()", path.parse(filePath));//파일 경로를 root, dir, base, ext, name 분리 및 파싱
console.log("path.format()", path.format(path.parse(filePath))); //parse한 객체를 하나의 경로로 합쳐준다. 
console.log( 
  "path.normalize()",
  path.normalize(
    "C://Users//mordi//Desktop//millionTest//nodejs//nodejs-basic//node-basic//node-inner-module//path.js"
  )
); //구분자 중복이나 실수를 정상적인 경로(문자열)로 반환
console.log("path.isAbsolute()", path.isAbsolute("./path.js")); //입력한 경로가 절대경로인지 아닌지 알려줌 절대경로가 아니면 false
console.log("path.isAbsolute()", path.isAbsolute("C:/"));//입력한 경로가 절대경로인지 아닌지 알려줌 절대경로이면 true
console.log("-----------------------------------------------------------");
console.log(
  "path.relative(): ",
  path.relative(
    "C:/Users/mordi/Desktop/millionTest/nodejs/nodejs-basic/node-basic/node-inner-module/path.js",
    "C:/"
  )
); //첫번쨰 인자 경로에서 두번째 인자 경로로 가는 경로를 알려줌
console.log(
  "path.join()",
  path.join(__dirname, "/users", ".", "jaehyeon")
); //여러 인자를 넣으면 하나로 합쳐준다.
console.log(
  "path.resolve():",
  path.resolve(__dirname, "..", "/user", ".", "/zerocho")
); //join비슷하지만 차이가 있다.

//join / resolve 
// path resolve는 /를 만나면 절대 경로로 인식해서 앞의 경로를 무시 join은 상대 경로로 처리
/*

    path.join('/a','/b', 'c') 결과 /a/b/c/
    path.resolve('/a','/b', 'c') 결과 /b/c

*/

