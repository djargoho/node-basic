const os = require("os");

console.log("OS INFO CHECKER");

console.log("os arch", os.arch()); 
console.log("os.platform:", os.platform());
console.log("os.type", os.type()); //운영체제 종류 win32
console.log("os.uptime", os.uptime()); //운영체제 부팅 이후 흐른 시간(초단위)
console.log("os.hostname()", os.hostname()); //컴퓨터 이름
console.log("os.release", os.release()); //운영체제 버젼

console.log("OS PATH");
console.log("os.homedir", os.homedir()); //홈 디렉터리
console.log("os.tmpdir", os.tmpdir()); //임시 저장 파일 경로

console.log("CPU INFO");
console.log("os.cpus", os.cpus()); //컴퓨터 코어 정보
console.log("os.cpuslength", os.cpus().length); //컴퓨터 코어 수

console.log("메모리 정보");
console.log("os.freememe", os.freemem()); //사용 가능한 메모리 
console.log("os.totalmem", os.totalmem()); //전체 메모리 용량

console.log("INFO END")