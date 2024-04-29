const idElement = document.getElementById("id");
const pwdElement = document.getElementById("pwd");
const loginButton = document.getElementById("login-btn");

const userIdElement = document.getElementById("userId");
const userPwdElement = document.getElementById("userPwd");

const userLoginInfo = JSON.parse(localStorage.getItem("userInfo")); // 객체 --> JSON 형태로 변환되었기 때문에 UNDEFINED가 나옴. 하지만 JSON.parse를 넣으면 해당 id, pwd값 출력
console.log(userLoginInfo);

userIdElement.textContent = `id : ${userLoginInfo.id}`;
userPwdElement.textContent = `pwd : ${userLoginInfo.pwd}`; 

// loginButton.addEventListener("click", () => {
//   console.log(idElement.value);
//   console.log(pwdElement.value);
// });

// 로컬 저장소에 데이터 저장법 // 콘솔이 아닌 애플리케이션 버튼을 누르면 확인가능
// loginButton.addEventListener("click", () => {
//   localStorage.setItem("id", idElement.value);
//   localStorage.setItem("pwd", pwdElement.value);
// });

// 유저정보이기에 하나의 정보를 객체로 표현하기
loginButton.addEventListener("click", () => {
  let userInfo = {id:idElement.value, pwd:pwdElement.value};
  localStorage.setItem("userInfo",JSON.stringify(userInfo)); // JSON.stringify을 사용해야 아이디와 비밀번호 값이 출력됨
});
