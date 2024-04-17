// 자바스크립트 스코프: 범위, 변수 혹은 함수가 갖게 되는 유효 범위
// 1. 전역 스코프: 어디서든지 해당 변수에 접근
// 2. 지역 스코프 : 지역에 벗어난 곳에서는 접근 불가능
const num = 10; // 전역 스코프
function print() {
  const num = 100; // 지역 스코프
  console.log(`지역 스코프 ${num}`);
}

print();
console.log(`전역 스코프 ${num}`);

// 3. 블록스코프(같은 블록에서만 접근 가능) - for문 사용
function print2() {
  for(let i = 0; i<10; i++) {
    console.log(`블록 스코프 ${i}`);
  }
  // console.log(i); //ERROR
}

print2();

// 4. let vs var: 서로 유사하나 var는 잘 사용하지 않음.
let num1 = 10;
var num2 = 20;

num1 = 100;
num2 = 200;

console.log(num1);
console.log(num2);

// 5. let(한번 선언된 변수에 let을 사용하지 않고 에러 발생. 즉, 재선언시 오류)
// let num3 = 10;
// let num3 = 100;

// console.log(num3);

// 6. var(값이 변경되어도 해당 페이지 출력. 오류x 가장 마지막 값을 호출.)
var num4 = 20;
var num4 = 200;

console.log(num4);

// 7. var을 활용한 for문. var는 함수적 프로그래밍을 할 때 가장 많이 오류를 나타냄.
function print3() {
  for(var i = 0; i<10; i++) {
    console.log(`블록 스코프 ${i}`);
  }
  console.log(i);
}

print3();