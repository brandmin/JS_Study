// 자바스크립트 배열 내장함수(1)
let arr = [1, 2, 3, 4, 5];

for(let i=0; i<arr.length; i++) {
  console.log(arr[i]);
}

// forEach: 매개변수로 함수를 전달할 수 있음(콜백함수)
arr.forEach((elm) => {
  console.log(elm);
});

// index: 실제 배열 순서
arr.forEach((elm, idx) => {
  console.log(`${idx}번째 요소는 ${elm}입니다.`);
});

// array
arr.forEach((elm, idx, array) => {
  console.log(`${idx}번째 요소는 ${elm}입니다.`);
  console.log(array);
});

// map: arr이라는 모든 요소에 10을 곱해서 새로운 배열을 만듦.
// let newArray = [];

// for(let i=0; i<arr.length; i++) {
//   newArray.push(arr[i] * 10);
// }

// console.log(newArray);

let newArray = arr.map((elm) => {
  return elm * 10;
});

console.log(newArray);

// 특정요소를 찾는 함수: at
let colors = ["green", "blue", "purple"];
console.log(colors[2]);
console.log(colors[colors.length - 1]);

console.log(colors.at(1)); // blue
console.log(colors.at(-1)); // 맨 마지막 값: purple

// includes:  매개변수로 받은 요소를 배열이 포함하고 있는지 판별하는 boolean형
console.log(colors.includes("blue"));
console.log(colors.includes("yellow"));

// 배열요소 값에 인덱스 추가 가능
console.log(colors.includes("blue", 2)); // 2번째 값부터 blue가 있는지 확인
console.log(colors.includes("yellow", 1)); // 1번째 값부터 yellow가 있는지 확인

// indexOf: 특정 배열 요소가 몇 번째에 위치하는지 찾아주는 함수
console.log(colors.indexOf("purple"));
console.log(colors.indexOf("yellow")); // 배열에 존재하지 않으면 indexOf 메서드는 항상 -1 반환
console.log(colors.indexOf("blue", 1)); 

// colors 배열 --> 객체 변환
let color = [
  {id:1, color:"green"},
  {id:2, color:"blue"},
  {id:3, color:"purple"},
  {id:4, color:"yellow"}
];
// 몇번째 요소에 해당 값이 있는지 확인하려면 indexOf가 아닌 findIndex 사용해야함
// console.log(colors.indexOf("blue", 1)); 
let idx = color.findIndex((elm) => elm.color === "purple");

console.log(idx);

// findIndex에 idx, array 추가
let idx1 = color.findIndex((elm, idx, array) => 
  console.log(`${idx} 번째 값은 id: ${elm.id}, color: ${elm.color}`)
);

color.findIndex((elm, idx, array) => console.log(array));

// find : 특정 값 자체 출력
let idx2 = color.find((elm) => elm.color === "purple");

console.log(idx2);

// 특정 조건을 만족하는 함수: filter
let filterArray = color.filter((elm, idx, array) => elm.id > 1);
console.log(filterArray);

// slice: 특정 값들을 추출하여 새로운 함수 생성(자르기)
let sliceArray = color.slice(1, 3); // blue값부터 yellow보다 1작은 것들을 추출하여 함수생성

console.log(sliceArray);