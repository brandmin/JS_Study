// 자바스크립트 연산자: 프로그래밍 언어에서 특정 연산을 수행할 수 있는 연산자
// 3. (복합)대입 연산자
let num = 20;
num += 5;

console.log(num);

// 4. 논리연산자
let isOpen = false;
let isClicked = true;

console.log(!isOpen);
console.log(!isClicked);

let a = true || true;
let b = true || false;
let c = false || true;
let d = false || false;

console.log(a, b, c, d);

let e = true && true;
let f = true && false;
let g = false && true;
let h = false && false;

console.log(e, f, g, h);

// 5. 비교연산자
let num1 = 10;
let num2 = "10";

console.log(num1 === num2); // false: 값은 같지만 타입이 다름
console.log(num1 == num2); // true: 변수 값이 같음

console.log(num1 !== num2); // true
console.log(num1 != num2); // false


