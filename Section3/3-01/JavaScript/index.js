// 배열과 객체의 구조분해 할당
// 구조 분해 할당: 배열이나 객체의 요소 미치 프로퍼티들을 분해해서 
// 그 값들을 각각의 변수에 할당하는 자바스크립트 표현식

// 구조분해 할당 전/후
let colors = ["green", "blue", "purple"];

// colors 배열을 좀 더 편리하게 선언하는 법(선언 분리 할당)
// let c1, c2, c3;
// [c1, c2, c3] = ["green", "blue", "purple"];

// let[c1, c2, c3] = colors;
// let c1 = colors[0];
// let c2 = colors[1];
// let c3 = colors[2];

// console.log(c1);
// console.log(c2);
// console.log(c3);

// 선언 분리 할당하지 않고 배열의 길이보다 적은 변수의 배열 요소 할당
let c1, c2, c3, c4; // c4 추가 선언
// 왼쪽 c4 값을 yellow 값을 준다면 콘솔창에 출력할 때 yellow로 출력 --> 기본값 할당
[c1, c2, c3, c4="yellow"] = ["green", "blue", "purple"]; 

console.log(c1);
console.log(c2);
console.log(c3);
console.log(c4);

// 두 변수를 바꾸는 코드(구조 분해 할당 전)
let a = 10;
let b = 5;
let tmp;

tmp = a;
a = b;
b = tmp;

console.log(a, b);

// 구조 분해 할당 후
let c = 10;
let d = 5;

[c, d] = [d, c]; // 교환

console.log(c, d);

// 객체 구조 분해 할당
let color = {
  c1: "green",
  c2: "blue",
  c3: "purple"
};

let c01 = color.c1;
let c02 = color.c2;
let c03 = color.c3;

// console.log(c01);
// console.log(c02);
// console.log(c03);

// 구조 분해 할당은 중괄호를 사용한다.
// let {c1, c2, c3} = color;
let { c1: color1, c2: color2, c3: color3 } = color;

console.log(color1);
console.log(color2);
console.log(color3);