//단방향 암호화 방법 보통 해쉬 기법을 이용

const crypto = require("crypto");




//해시 함수 
/*

비밀번호    => O    해시함수     =>   다이제스트 
            <= X                <= 

*/
/*
    현재는 주로 pdkdf2나 bcrypt, scrypt라는 알고리즘으로 비밀번호를 암호화 함. 
    node에서는 pbkdf2를 지원.
    pdkdf2는 간단히 말하면 기존 문자열에 salt라고 불리는 문자열을 붙인 후 해시 알고리즘을 반복해서 적용하는 것     
*/


console.log(
  "base 64 crypto",
  crypto
    .createHash("sha512") //사용할 해시 알고리즘 선택  (md5, sha1, sha256, sha 512 etc) md5, sh1은 이미 취약점 발견 
    //나중에 sha512 마저 취약해지면 다른 알고리즘으로 바꿔야함 아마 sha3 으로 바꿔야할듯
    .update("비밀번호") //변환할 문자열을 넣음
    .digest("base64")//인코딩할 알고리즘을 넣어줌 base64, hex, latin1이 주로 사용되며 base64가 결과 문자열이 짧아 애용됌 
    //digest 소화하다, 완전히 이해하다는 의미 
);

console.log(
    "base 64 crypto",
    crypto
      .createHash("sha512")
      .update("비밀번호")
      .digest("base64")
  );

console.log(
  "hex crypto",
  crypto
    .createHash("sha512")
    .update("비밀번호")
    .digest("hex")
);

console.log(
  "base64",
  crypto
    .createHash("sha512")
    .update("다른 비밀번호")
    .digest("base64")
);
