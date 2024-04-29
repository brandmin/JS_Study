// spread와 rest
// spread: 특정 배열의 요소나 객체의 프로퍼티값을 확장하는 것.
// const toy = {
//   type: "bear",
//   price: 15000
// };

// // toy객체 중 파란색 노란색 두 개의 객체 생성
// const blueToy = {
//   type: "bear",
//   price: 15000,
//   color: "blue"
// };

// const yellowToy = {
//   type: "bear",
//   price: 15000,
//   color: "yellow"
// };

const toy = {
  type: "bear",
  price: 15000
};

// toy객체 중 파란색 노란색 두 개의 객체 생성
// const blueToy = {
//   ...toy, // ... : 스프레드 문법
//   color: "blue"
// };

// const yellowToy = {
//   ...toy,
//   color: "yellow"
// };

// console.log(blueToy);
// console.log(yellowToy);

// const color1 = ["red", "orange", "yellow"];
// const color2 = ["blue", "navy", "purple"];

// const rainbow = [...color1, "green", ...color2];

// console.log(rainbow);

// rest: 나머지 매개변수. ... 세개 기호를 사용하지만 spread와 서로 다르다. 특정 부분을 하나의 객체로 묶음
const blueToy = {
  type: "bear",
  price: 15000,
  color: "blue"
};

// 구조분해할당을 통해 blueToy의 프로퍼티 값 할당하기
// const {type, price, color} = blueToy

// console.log(type);
// console.log(price);
// console.log(color);

// price와 color변수를 rest로 사용해보자.
// 주의) rest는 순서에 상관 없이 여러번 작성할 수 없음. 항상 맨 마지막에 작성해야 함.
// const {type, ...rest } = blueToy

// console.log(type);
// console.log(rest);

// 배열 형태
const colors = ["red", "orange", "yellow", "green"];

// red, orange는 밖으로 꺼내고 yellow, green은 별도의 배열을 묶어서 표현
const [c1, c2, ...rest] = colors;
console.log(c1, c2);
console.log(rest);

// 나머지 매개변수라고 불리는 rest는 함수로 어떻게 나타날까?
const print = (a, b, ...rest) => {
  console.log(a, b, rest);
};

print(1, 2, 3, 4, 5, 6);

// spread, rest 다같이 사용하기
const prints = (...rest) => {
  console.log(rest);
};
const numbers = [1, 2, 3, 4, 5, 6];
// print(numbers[0], numbers[1], numbers[2], numbers[3], numbers[4], numbers[5]);
print(...numbers); // spread 문법
