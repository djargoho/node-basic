const util = require("util");
const crypto = require("crypto");

//이 함수가 곧 사라질거 라고 알려주는 메서드
const dontUseMe = util.deprecate((x, y) => {
  console.log(x + y);
}, "이 함수를 더이상 사용하지 마세요 곧 사라집니다. ");

dontUseMe(5, 5);

//콜백 함수를 promise화 시켜주는 메서드 이렇게해서 await, async도 사용가능
const randomBytesPromise = util.promisify(crypto.randomBytes);

randomBytesPromise(64)
  .then(buf => {
    //salt
    console.log(buf.toString("base64"));
  })
  .catch(err => {
    console.error(err);
  });
