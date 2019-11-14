const globalA = require("./globalA");


global.message = "글로벌은 웹에서의 window, document 이다 (전역 선언때 쓸 수 있다)"

console.log(globalA());
