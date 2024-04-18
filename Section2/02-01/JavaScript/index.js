// 변수 명명 규칙
// 1. $와 _를 제외한 기호 사용 금지
// 2. 변수명 맨 앞의 숫자 사용 불가
// 3. 예약어 사용 불가
let color = "skyblue";
color = "yellow";
console.log(color);

// let iscatordog; 

let isCatOrDog; // is을 제외한 나머지 단어들은 캐멀 표기법 사용

let nowType = "안녕하세요";
console.log(typeof nowType); // 자료형을 알기 위해 typeof 연산자를 사용한다.

// 왜 자바스크립트는 자료형을 명시하지 않는지?
// 값이 바뀔때마다 변수의 자료를 받는 동적 타입이기 때문.
nowType = 100;
console.log(typeof nowType);
