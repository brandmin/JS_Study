// promise 객체
const workA = (value, callback) => {
  setTimeout(() => {
    callback(value + 5);
  }, 5000);
}

const workB = (value, callback) => {
  setTimeout(() => {
    callback(value - 3);
  }, 3000);
}

const workC = (value, callback) => {
  setTimeout(() => {
    callback(value + 10);
  }, 10000);
}

const workD = (value, callback) => {
  callback(value);
};

// 아래 코드는 promise 객체로 사용할 수 있다. 복잡한 코드를 가독성 있게 표현할 수 있다.
workA(10, (resA) => {
  console.log(`1. ${resA}`);
  workB(resA, (resB) => {
    console.log(`2. ${resB}`);
    workC(resB, (resC) => {
      console.log(`3. ${resC}`)
    });
  });
});

workD("workD", (res) => {
  console.log("workD");
});

// promise
// promise를 생성하기 전에 executor 실행함수 전달해야 함.
// 호출하기 전 pending --> fulfilled / undefiend --> value
// resolve 사용할때 resolve만 사용. reject는 아래 코드처럼 작성
const executor = (resolve, reject) => { // 비동기작업 성공하면 resolve, 실패하면 reject 호출
  setTimeout(() => {
    reject("실패");
  }, 3000);
};

const promise = new Promise(executor);
promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

const WorkA = (value) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value + 5);
    }, 5000);
  });
  return promise;
}

const WorkB = (value) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value - 3);
    }, 3000);
  });
  return promise;
}

const WorkC = (value) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value + 10);
    }, 10000);
  });
  return promise;
}

// 코드가 깔끔하지만 여전히 콜백함수의 지옥임.
// WorkA(10).then((ResA) => {
//   console.log(`1. ${ResA}`);
//   WorkB(ResA).then((ResB) => {
//     console.log(`2. ${ResB}`);
//     WorkC(ResB).then((ResC) => {
//       console.log(`3. ${ResC}`);
//     });
//   });
// });

WorkA(10)
  .then((ResA) => {
    console.log(`1. ${ResC}`);
    return WorkB(ResA);
  })
  .then((ResB) => {
    console.log(`2. ${ResC}`);
    return WorkC(ResB);
  })
  .then((ResC) => {
    console.log(`3. ${ResC}`);
  });