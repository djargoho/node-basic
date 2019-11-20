//에러 강제 발생
//catch로 잡고 계속 진행함.
//에러가 날 곳 같은 부분을 미리 try catch로 감싸면 된다.

setInterval(() => {
  console.log("시작");
  try {
    throw new Error("그냥 서버를 콱마!");
  } catch (error) {
    console.error(error);
  }
}, 1000);

//throw를 하면 노드 프로세스가 멈춰버리지만 throw하는 부분을 try catch문으로 에러를 잡아주면 계속 진행한다.
