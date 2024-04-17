// 자바스크립트 호이스팅: 아직 선언되지 않은 함수나 변수들을 해당 스코프의 맨 위로 끌어올려 사용하는 작동 방식
// 1. 작성된 코드(자바스크립트 엔진이 코드를 해석하는 과정에서 print()함수가 아래 함수로 해석하였기 때문에 값 호출. --> 함수 호이스팅)
print();

function print() {
  console.log("hello world");
}

// 2. 변수 호이스팅

console.log(num);
var num = 10; // undefined. 해당 스코프가 위로 올라가지 않으면 undefined가 나타남

var num;
console.log(num);
num = 10;

// 3. let 사용
console.log(num2); // 값이 위로 할당되어 있지 않아 undefined 선언
var num2 = 10;

// Temporal Dead Zone: 일시적인 사각지대. 변수를 사용하는 것을 허용하지 않는 공간

// console.log(num3); // 선언하기 전에 콘솔 창에 출력하려고 한다면 오류가 발생함.
// let num3 = 10;

// console.log(num4); // 선언하기 전에 콘솔 창에 출력하려고 한다면 오류가 발생함.
// const num4 = 15;

// 즉, let과 const는 해당 변수가 초기화가 완료 후 메모리에 할당된다.


