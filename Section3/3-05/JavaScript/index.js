// async/await
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};
// async: 함수의 오른쪽 작성. promise 객체 반환
// await: 특정 함수 앞에 작성. 해당 프로미스가 처리될때까지 기다린 다음 결과값을 받아볼 수 있음.
const start = async () => {
  try {
    await delay(2000);
    console.log("대기");
  } catch(error) {
    console.log(error);
  }
  
};

start();



