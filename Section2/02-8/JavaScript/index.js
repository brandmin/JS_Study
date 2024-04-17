// 자바스크립트 연산자: 프로그래밍 언어에서 특정 연산을 수행할 수 있는 연산자
// 6. 대소비교 연산자
let a = 10;
let b = 20;
let c = 10;

console.log(a < b); // true
console.log(a > b); // false
console.log(b >= c); // true
console.log(b > c); // true
console.log(a <= c); // true
console.log(a > c); // false

// 7. 연결 연산자
let d = "안녕";
let e = "자바스크립트";

console.log(d + e);

// 8. 삼항 연산자(?? 기호 사용)
let num = 100;
num = num ?? 20; // null이거나 undefined면 20, 아니면 현재 num값
console.log(num);

let num2 = 100;
console.log(num2 % 2 === 0 ? "짝수" : "홀수");


