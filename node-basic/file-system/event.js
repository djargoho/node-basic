//createReadStream()같은 경우에는 내부적으로 알아서 data와 end 이벤트를 호출하지만, 우리가 직접 이벤트를 만들 수도 있다.
//웹 서버를 구축할떄 많이 사용
const EventEmitter = require("events");

const myEvent = new EventEmitter();

//on 메서드와 똑같다.
myEvent.addListener("event1", () => {
  console.log("이벤트 1");
});

//(이벤트명, 콜백) 이벤트 이름과 이벤트 발생 시의 콜백을 연결해준다.
//이렇게 연결하는 동작을 이벤트 리스닝이라고 한다.
//event2 처럼 이벤트를 여러개 달아줄 수도 있다.
myEvent.on("event2", () => {
  console.log("이벤트2");
});

myEvent.on("event2", () => {
  console.log("이벤트2 추가");
});

myEvent.on("event2", () => {
  console.log("이벤트2 추가2");
});

//(이벤트명) 이벤트명에 해당하는 이벤트콜백이 일어난다.
myEvent.emit("event1");
myEvent.emit("event2");

//(이벤트명, 콜백) 딱 한번만 실행되는 이벤트 emit을 여러번 호출해도 한번만 호출 된다.
myEvent.once("event3", () => {
  console.log("이벤트3");
});

myEvent.emit("event3");
myEvent.emit("event3");

myEvent.on("event4", () => {
  console.log("이벤트 4");
});

//(이벤트명) 이벤트에 연결된 모든 이벤트 리스너를 제거
myEvent.removeAllListeners("event4");
myEvent.emit("event4");

const listener = () => {
  console.log("이벤트5");
};

myEvent.on("event5", listener);

//(이벤트명, 리스너) 이벤트에 연결된 리스너를 하나씩 제거한다.
myEvent.removeListener("event5", listener);
myEvent.emit("event5");

//myEvent.off(이벤트명, 콜백) removeListener와 기능이 같다.

//listenerCount(이벤트명) 현재 리스너가 몇개 연결되있는지 확인할 수 있다.
console.log(myEvent.listenerCount("event2"));
