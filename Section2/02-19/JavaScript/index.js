// 자바스크립트 배열 내장함수(2)
// 1. 두 개의 배열을 합치는 과정: concat
let array1 = ["green", "blue"];
let array2 = ["purple", "yellow"];

console.log(array1.concat(array2));

// 2. Join: 하나의 배열에서 배열 요소 값을 문자열로 이어주는 함수
let array3 = ["green", "blue", "purple", "yellow"];

console.log(array3.join()); // 쉼표가 기본적으로 구분
console.log(array3.join(" ")); // 공백이면 띄어쓰기로 구분

// 3. sort: 배열을 정렬하는 함수
let colors = ["green", "blue", "purple"];
colors.sort();

console.log(colors);

// 3-1 오름차순이 아닌 내림차순으로 정렬하고 싶다면? compare 함수 사용
// const compare = (a, b) => {
//   if(a>b) return -1; // 순서를 반환해야 하기에 -1 반환
//   else if(a<b) return 1; 
//   else return 0;
// }

// colors.sort(compare);
// console.log(colors);

let numbers = [1, 100, 25, 50, 120, 3];
numbers.sort();
console.log(numbers);

const compare = (a,b) => {
  // 오름차순
  // return a-b;
  // 내림차순
  return b-a;
}

numbers.sort(compare);
console.log(numbers);

let numbers1 = [1, 100, 25, 50];
let sum = 0;

numbers.forEach((elm) => {
  sum += elm;
});

console.log(sum);
// 4. reduce 함수: 위 함수처럼 해당 sum의 누적값을 출력하고 싶을 때 사용함.
let nums = [1, 100, 25, 50];
// acc: 콜백함수의 반환값을 누적하는 매개변수 cur: 계속 사용하는 현재 처리하는 값 idx: 처리할 현재 요소의 인덱스
let sum1 = nums.reduce((acc, cur, idx) => {
  console.log(acc, cur, idx);
  return acc + cur;
}, 10);

console.log(sum);

// 5. 배열인지 아닌지 판별하는 함수: IsArray
let a = Array.isArray([1, 100, 50]);
let b = Array.isArray({id:1, color:"green" });
let c = Array.isArray("string");
let d = Array.isArray(undefined);

console.log(a, b, c, d);