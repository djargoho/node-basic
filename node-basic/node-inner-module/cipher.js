const crypto = require("crypto");

//사용 가능 알고리즘은 crypto.getCiphers() 를 하면 확인 가능
const cipher = crypto.createCipher("aes-256-cbc", "열쇠"); // (알고리즘, 키) 다른 알고리즘 사용 가능

let result = cipher.update("암호화할문장", "utf8", "base64"); //(암호화할 문자열, 인코딩, 출력 인코딩)
//보통 문자열은 utf8 인코딩을 함, 암호 출력은 base64를 많이 사용

result += cipher.final("base64"); //출력 결과물의 인코딩을 넣어주면 된다.

console.log("암호화", result);

const decipher = crypto.createDecipher("aes-256-cbc", "열쇠"); //복호화 할 때 사용, 암호화할 때 사용했던 알고리즘과 키를 그대로 넣어주어야 함
let result2 = decipher.update(result, "base64", "utf8"); //(암호화된 문장, 암호화할때 사용한 출력인코딩, 출력 인코딩) 암호화 할떄의 반대순의 인코딩을 넣으면 된다.
result2 += decipher.final("utf8"); //(출력 인코딩) 복호화할 결과물의 인코딩을 넣어줌

console.log("복호화", result2);
