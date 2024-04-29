// const inputElement = document.getElementById("input");

// inputElement.addEventListener("mouseover", () => {
//   console.log(inputElement.value);
// });

const selectElement = document.getElementById("color");

selectElement.addEventListener("change", () => {
  console.log(selectElement.value);
});

// 변경된 설정값 출력
const resultElement = document.getElementById("result");
selectElement.addEventListener("change", () => {
  resultElement.textContent = selectElement.value; // 해당 옵션을 변경하면 웹사이트에도 변경됨.
});