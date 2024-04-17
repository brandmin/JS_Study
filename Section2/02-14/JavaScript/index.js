// 자바스크립트 함수 표현식: 지금까지 사용했던 함수 선언 방식
// 함수 선언식: 호이스팅 가능 
print();
function print() {
  console.log("hello world");
}

// 함수 표현식: 호이스팅 불가능
let print2 = function () {
  console.log("hello world");
}

// 함수 표현식을 화살표형 함수로 사용
const print3 = () => {
  console.log("hello world");
};

print();

// 콜백함수: 다른 함수에 매개변수로 넘겨준 함수
function start(name, callback) {
  console.log(`안녕하세요 ${name} 입니다.`);
  callback();
}

function finish() {
  console.log("감사합니다.");
}

start("brandmin", finish);
