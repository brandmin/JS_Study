// BigInt형: 2^53-1보다 크거나 작은 정수
let name1 = "brandmin"; // 큰 따옴표
let intro1 = `제 이름은 ${name1} 입니다.`;
let name2 = 'brandmin'; // 작은 따옴표
let name3 = `brandmin`; // 역따옴표(백틱)

console.log(intro1);

let isClicked = false; // 버튼이 클릭되었는지 안되었는지
let isOpen = true; // Modal이 열렸는지 안열렸는지

if (isClicked) {
  console.log("클릭O");
} else {
  console.log("클릭X");
}

// let name = null; // 존재하지 않거나 알 수 없을 때 사용
let name;
console.log(name); // undefined: 변수의 값이 할당되어 있지 않을때 undefined 사용

let num1 = "15";
let num2 = 5;

console.log(num1 / num2); // 자바스크립트 엔진이 나누기 연산을 실행하기 위해 문자열 15을 숫자 15로 자동 형변환.(나누기, 곱셈만)

// 명시적 형변환(덧셈만 활용)
console.log(num1 + num2);

// 문자를 숫자로 변환해주는 함수: parseInt --> 명시적 형변환
console.log(parseInt(num1) + num2);

