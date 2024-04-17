// 자바스크립트 함수: 같은 동작을 하는 중복된 코드가 존재할때 하나로 묶어 실행할 수 있는 기능
// 2. 함수 사용
function add(num1, num2) {
  console.log(num1 + num2);
}

add(10, 15);

// 3. 함수 사용 - return사용(return문을 사용하면 바로 아래 console.log 사용되지 않음.)
function add(num3, num4) {
  return num3 + num4;
}

console.log(`두 숫자를 더한 결과는 ${add(10, 15)} 입니다.`);

// 4. 함수 사용 - 조건문 사용
// function func(num) {
//   if (num > 0) {
//     if(num >= 10) {
//       console.log("num의 값이 10보다 크거나 같습니다.");
//     } else {
//       console.log("num의 값이 0보다 크고 10보다 작습니다.");
//     }
//   } else if (num === 0) {
//     console.log("num의 값이 0입니다.");
//   } else {
//     console.log("num의 값이 0보다 작습니다.");
//   }
// }

func(15);

// 5. 4번 번잡한 코드 보완 - 리팩토링(자주 사용)
function func(num) {
  if (num === 0) return "num의 값이 0입니다.";
  if (num < 0) return "num의 값이 0보다 작습니다.";
  if (num >= 10) return "num의 값이 10보다 크거나 같습니다.";
  return "num의 값이 0보다 크고 10보다 작습니다."
}

console.log(func(15));

// 6. 즉시 실행 함수
function print() {
  console.log("자바스크립트1");
}

print();

(function () {
  console.log("자바스크립트2");
})();


// 7. 함수 선언 방식, 호출 흐름
function func() {
  console.log("2");
  console.log("3");
}

console.log("1");
func();
console.log("4");

// 8. 지역변수
function add(num5, num6) {
  let sum = num5 + num6;
  return sum;
}

add(10, 15); // 함수 외부에서 호출하였기 때문에 할당되지 않는다.
console.log(sum);

// 9. 외부 변수
let sum2 = 0;

function add(num7, num8) {
  sum2 = num7 + num8;
}

add(15, 15);
console.log(sum2);