// 자바스크립트 객체
// 원시타입: 숫자, null, bigint, undefined, 문자, symbol, boolean
// 비원시타입: 객체, 함수, 배열

// 1. 객체 생성자를 사용하여 객체 생성하는 법(new 연산자 사용)
let person = new Object();
console.log(person);

// 2. 객체 리터럴로 사용하여 객체 생성하는 법(가장 많이 사용)
let people = {};
console.log(people);

// 객체 프로퍼티: 키와 값을 가진 객체
let fruit = {
  name: "사과",
  price: 2000,
  company: undefined,
  etc: function () {
    console.log("hello world");
  },
};
console.log(fruit);

// 객체 프로퍼티 호출 - 점 표기법
console.log(fruit.name);
console.log(fruit.price);
console.log(fruit.company);

// 객체 프로퍼티 호출 - 괄호 표기법(괄호 안에 큰 따옴표로 씌워서 표기) --> 동적값들은 괄호 표기법 사용
console.log(fruit["name"]);
console.log(fruit["price"]);
console.log(fruit["company"]);

// 괄호 표기법을 화살표 함수로 사용
const getValue = (key) => {
  console.log(fruit[key]);
}

getValue("name");

// 객체 프로퍼티 추가, 수정, 삭제 --> 점 표기법, 괄호 표기법 사용
fruit.company = "자바스크립트";
fruit["color"] = "red";

console.log(fruit);

// 수정
fruit.price = 5000;
fruit["color"] = "green";

console.log(fruit);

// 상수로 선언된 객체를 CRUD 하는법
// const로 해도 값이 변경되는 이유: 해당 블록에서 프로퍼티 값이 수정되지 않았기 때문.
const food = {
  name: "짜장면",
  price: 5000,
  Loc: undefined
};

// 추가
food.rate = 5;
food["comment"] = 3;
console.log(food);

// 수정
food.price = 2500;
food["Loc"] = "충청남도";

console.log(food);

// 삭제
delete food.rate;
delete food["comment"];

console.log(food);

// 프로퍼티 값이 함수를 추가하고 싶을 때
const item = {
  name: "스마트폰",
  price: 500000,
  print: function () {
    console.log("hello world");
  }
};

item.print();
item["print"](); // 객체 프로퍼티 값이 함수 일경우 이를 메서드라고 함. 객체 내부의 프로퍼티에 접근할 수 있는 특별한 기능. 

console.log(item);

// print() 메서드 키값이 다른 값을 할당하고 싶으면. 객체 프로퍼티 값이 함수라면 function이라는 키워드를 사용해야 하므로 화살표 함수를 사용할 수 없음.
const school = {
  name: "brandmin",
  age: 17,
  print: function () {
    console.log(`제 이름은 ${this.name} 입니다.`);
  }
};

school.print();
school["print"]();

console.log(school);

