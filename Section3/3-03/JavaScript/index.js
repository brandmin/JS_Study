// 비동기 처리
/* 동기적 처리
  동기: 하나의 작업이 실행되는 동안은 다른 작업을 동시에 진행하지 않는 방식
  즉, 앞의 작업이 종료된 이후 다음 작업을 진행할 수 있는 순차적인 방식
  work1: 5초, work2: 3초, work3: 20초. 총 38초 소요. 블로킹 방식
  즉, 여러 이미지를 보려고 할 때 불러오는 시간이 느리기 때문에 오류 발생 및 성능 저하
*/ 

/* 멀티 스레드
  각 스레드마다 작업을 동시에 수행하게 하는 방식.
  하지만, 자바스크립트는 싱글 스레드 방식으로 구동됨.
*/

// 비동기처리: 여러 작업들을 동시에 진행하는 방식(자바스크립트는 비동기 처리)
// 비동기함수: setTimeOut. 해당 시간이 지났을 때 콘솔창 출력

// 종료라는 텍스트를 3초가 지난 후 종료라고 할당하고 싶다면?
// const work = (callback) => {
//   setTimeout(() =>{
//     console.log("3초만 기다리세요");
//     callback();
//   }, 3000);
// }

// work(() => {
//   console.log("종료");
// });

const workA =  () => {
  setTimeout(() => {
    console.log("workA");
  }, 5000)
};

const workB =  () => {
  setTimeout(() => {
    console.log("workB");
  }, 3000)
};

const workC =  () => {
  setTimeout(() => {
    console.log("workC");
  }, 10000)
};

const workD =  () => {  
    console.log("workD");
};


workA();
workB();
workC();
workD();

