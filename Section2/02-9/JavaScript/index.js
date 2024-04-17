// 자바스크립트 조건문: 특정 조건이 성립되었을 때 그 조건에 해당하는 코드를 실행하는 문법
// 1. if문
let num = 10;
if(num === 10) {
  console.log("num의 값은 10입니다."); // 실행 코드
}

// 2. if-else문
let num2 = 5;
if(num2 === 10) {
  console.log(`num2값은 10입니다.`);
} else {
  console.log(`num2값은 ${num2}입니다.`);
}

// 3. else-if
let num3 = 5;

if(num3 === 10) {
  console.log(`num3값은 10입니다.`);
} else if(num3 < 10) {
  console.log(`num3값은 10보다 작습니다.`);
} else {
  console.log(`num3값은 10보다 큽니다.`);
}

// 4. switch/case문
let fruit = "apple";

switch(fruit) {
  case "banana":
    console.log("바나나");
    break;
  case "orange":
    console.log("오렌지");
    break;
  case "apple":
    console.log("사과");
    break;
  case "grape":
    console.log("포도");
    break;
  default:
    console.log("다른 과일");
}

