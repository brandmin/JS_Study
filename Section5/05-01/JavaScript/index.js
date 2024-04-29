// YYYY-MM-DD 형태로 date 내장함수
let nowDate = new Date();
console.log(nowDate);

// 각 월, 일, 요일을 알려주는 함수
const week = ["일", "월", "화", "수", "목", "금", "토"];
let month = nowDate.getMonth() + 1; 
let date = nowDate.getDate();
let day = nowDate.getDay();
let hours = nowDate.getHours(); // 0-24
let minutes = nowDate.getMinutes(); // 0-59

console.log(`${month}월 ${date}일 ${week[day]}요일`);
console.log(`${hours}:${minutes}`);