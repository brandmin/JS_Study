// DOM: 문서객체 모델. HTML을 자바스크립트가 이해할 수 있는 객체 변환
// DOM API: DOM이 제공하는 DOM을 조작하고 수정하는 방법

console.log(document.getElementById("date")); // id인 date값을 찾아 출력
console.log(document.querySelectorAll("div.date"));// 요소의 값이 아닌 CSS의 값을 반환
console.log(document.getElementsByClassName("date"));
console.log(document.getElementsByTagName("div"));

// attribute 노드를 조작하여 사용해보기
// const dateElement = document.getElementById("date");
// dateElement.className = "change";

// console.log(dateElement);
// add을 사용하여 클래스 이름 체인지
// const dateElement = document.getElementById("date");
// dateElement.classList.add("change");
// dateElement.classList.remove("date");

// console.log(dateElement);

const clockElement = document.getElementById("clock");
clockElement.textContent = "12:00"; // 수정 가능