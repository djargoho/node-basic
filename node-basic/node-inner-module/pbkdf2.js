/*
    단방향
    현재는 주로 pdkdf2나 bcrypt, scrypt라는 알고리즘으로 비밀번호를 암호화 함. 
    node에서는 pbkdf2를 지원.
    pdkdf2는 간단히 말하면 기존 문자열에 salt라고 불리는 문자열을 붙인 후 해시 알고리즘을 반복해서 적용하는 것

*/

const crypto = require("crypto");
//randomBytes 메서드로 64바이트 길이의 문자열을 만들어 준다. 이 callback으로 들어가는 buf가 그 64바이트 문자가 되며 salt가 된다.
crypto.randomBytes(64, (err, buf) => {  

  const salt = buf.toString("base64");
  console.log("salt : ", salt);
    //              비번,   salt,반복횟수,출력바이트,해시알고리즘, 콜백
  crypto.pbkdf2("비밀번호", salt, 100000, 64, "sha512", (err, key) => { //sha512로 변환된 결과값을 다시 sha512로 변환하는 과정을 10만번 반복 
    //sha512 변환값을 10만번 반복한 키 완성
    console.log("password:", key.toString("base64")); //해당 key buffer 값을 base64 문자열로 변환 
  });
});


/*
            salt          반복횟수 
                \\           //
    비번 =>          PBKDF2             =>  PBKDF2 해시 알고리즘 


    간단한 만큼 취약하므로 더 나은 보안을 위해 나중에 bcrypt 나 scrypt 방식을 사용해야함
*/



