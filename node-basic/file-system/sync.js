//무조건 순서대로 동기가 이루어 진다.
//순서대로 1,2,3 으로 이루어 진다.

const fs = require("fs");
const path = require("path");

const readFilePath = __dirname + path.sep + "readme2.txt";

console.log("시작");
let data = null;

data = fs.readFileSync(readFilePath);
console.log("1번 읽기:", data.toString());

data = fs.readFileSync(readFilePath);
console.log("2번 읽기:", data.toString());

data = fs.readFileSync(readFilePath);
console.log("3번 읽기:", data.toString());

console.log("끝");

//문제가 있는데 readFIleSync 메서드를 사용하면 요청이 수백 개 이상 들어왔을 때 성능에 문제가 생김. 
//앞에 작업이 완료되야 뒤에껄 할 수 있기 때문에.
//즉 백그라운드가 작업하는 동안 메인 스레드는 아무것도 못하고 대기하고 있어야함. 
//메인 스레드가 일을 하지 않고 노는 시간이 생기기 때문에 비효율적
//대부분 그냥 이러한 동기방식은 비효율적이기 때문에 자주 사용하지는 않을 것이다. 
//비동기 방식을 순서대로 하고 싶으면 anyncOrder.js 참고