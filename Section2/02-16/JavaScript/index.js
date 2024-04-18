// 자바스크립트 배열: 순서가 있는 요소들의 집합. 여러 개의 항목들이 모여 있는 리스트
// 1. 생성자를 이용하는 방법
let arr = new Array();
console.log(arr);

// 1-1. 괄호안에 값을 할당하는 법
let array1 = new Array(1,2,3);
let array2 = new Array(3);

console.log(array1);
console.log(array2);

// 2. 배열 리터럴을 사용하는 법
let array3 = [];

console.log(array3);

// 2-1 배열 리터럴 안에 값 할당
let array4 = [1, 2, 3];
let array5 = [3];

console.log(array4);
console.log(array5);


// 여러 값을 배열 안에 넣기
let arr1 = [
  { name : "홍길동" },
  1,
  "array",
  function() {
    console.log("hello world");
  },
  null,
  undefined
];

console.log(arr1);

// 인덱스를 통해 배열 요소 접근 --> 배열 리터럴 방식 사용
let arr2 = [1, "hello", null];

console.log(arr2[0]);
console.log(arr2[1]);
console.log(arr2[2]);

// 배열에 새로운 요소 추가. push: 새로운 요소 추가. 배열 이름 뒤에 작성. 배열 마지막 요소에 추가
arr2.push(4);
console.log(arr2);

// push 대신 unshift 사용
arr2.unshift(0); // 맨 앞의 요소에 추가
console.log(arr2);

// 배열의 값 수정
arr2[0] = 5;
arr2[2] = undefined;

console.log(arr2);

// const 선언된 배열 값도 가능할까? 가능하다.

// 배열 요소 삭제
// 1. pop 내장 함수 사용
arr2.pop();
console.log(arr2);

// 2. shift 내장 함수 사용 -- 맨 앞 요소 제거
arr2.shift();
console.log(arr2);

// 3. 특정 배열 크기 구하기
console.log(arr2.length);

// 4. 크기를 변경해서 length 프로퍼티 출력
arr2.pop();
console.log(arr2.length);