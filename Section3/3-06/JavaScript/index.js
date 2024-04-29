// API 호출
// API: 컴퓨터나 컴퓨터 프로그램 사이의 연결.
// JSON: 키와 값을 가진 형태
// API 호출할 때 사용하는 내장함수: fetch(promise를 호출하는 비동기적 내장함수)
const getData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts"); // 해당 함수 처리 후 아래 코드 진행
    const data = await res.json();
    console.log(data); 
  } catch(error) {
    console.log(error);
  }
};

getData();

