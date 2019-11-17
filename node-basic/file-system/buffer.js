const buffer = Buffer.from("저를 버퍼로 바꿔보세요."); //문자열을 버퍼로 바꿔준다.

console.log("from() : ", buffer);
console.log("length : ", buffer.length); //버퍼의 Byte크기를 알려준다.
console.log("toString() : ", buffer.toString()); //버퍼를 문자열로 바꿀 수 있고, encoding에 base64, hex를 인자로 넣으면 해당 인코딩으로 변환할 수 있다.

const arrayBuffer = [
  Buffer.from("이런식으로 "),
  Buffer.from("나눠서 "),
  Buffer.from("가능합니더 ")
];

const buffer2 = Buffer.concat(arrayBuffer); //배열안에든 버퍼들을 하나로 합쳐준다. 
console.log("concat() : ", buffer2.toString());

const buffer3 = Buffer.alloc(5); //빈 버퍼를 생성한다. 바이트를 인자로 지정해주면 해당 크기의 버퍼가 생성된다. 
console.log("alloc(): ", buffer3);

//큰 파일의 용량은 readFile()로 보내는 데 한계가 있기 때문에,
// 버퍼의 크기를 작게 만들어서 여러 번에 나눠서 보내는 방식이 등장. 
// 예를 들어 100MB 파일을 1MB 버퍼로 만들어서 백번에 걸쳐 보내는 방법 
//메모리 1MB로 100MB 파일을 전송할 수 있는 있는 것. 
//이를 편리하게 만든 것이 스트림이다. 

