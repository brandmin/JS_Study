// 자바스크립트 반복문: 특정 작업을 반복적으로 수행할 때 사용
// 1. for문 - 기본
for(let i=1; i<6; i++) {
  console.log(i);
}

for(let i=5; i>0; i--) {
  console.log(i);
}

// 2. while문 -- 특정 조건을 만족할 때만 반복
let i = 1;
while(i<6) {
  console.log(i);
  i++;
}

// 3. 배열을 사용한 반복문
let arr = [1, 2, 3, 4, 5];

for(let i = 0; i<arr.length; i++) {
  console.log(arr[i]);
}

// person 객체에 값 할당
let person = {
  name: "홍길동",
  age: 25,
  height: 180
};

console.log(Object.keys(person)); // 매개변수로 받은 key들을 배열로 반환하는 메서드

// for문을 사용하여 객체의 프로퍼티를 순회
let newArray = Object.keys(person);

for(let i = 0; i<newArray.length; i++) {
  let nowKey = newArray[i];
  console.log(`key: ${nowKey}, value: ${person[nowKey]}`)
}

// 매개변수로 객체를 남기면 해당 value들을 찾아 반환하기
console.log(Object.values(person));

// for문을 사용해 객체 프로퍼티 순회
let newArray1 = Object.values(person);

for(let i = 0; i < newArray1.length; i++) {
  console.log(`value: ${newArray1[i]}`);
}
console.log(Object.values(person));

// 객체 --> 배열 Object. Entries 사용
let newArray2 = Object.entries(person);

for(let i=0; i<newArray2.length; i++) {
  console.log(`key: ${newArray2[i][0]}, value: ${newArray2[i][1]}`);
}
console.log(Object.entries(person));

// 또 다른 반복문: for of문 : 배열의 모든 요소 접근
let arr1 = [1, 2, 3, 4, 5];

for(let i of arr1) {
  console.log(i);
}

// 또 다른 반복문: for in문: 객체 사용. 객체의 모든 프로퍼티 순회할 수 있음
let person1 = {
  name: "홍길동",
  age: 25,
  height: 180
};

for(let key in person1) {
  console.log(`key: ${key}, value: ${person1[key]}`);
}
