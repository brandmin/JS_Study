const seasonElement = document.createElement("div"); // div 요소 추가
seasonElement.classList.add("season");

// 텍스트 넣는 방법
// seasonElement.textContent = "spring";

// const seasonText = document.createTextNode("spring");
// console.log(document.getElementsByTagName("div"));

// const todayInfoElement = document.querySelector("div.today-info");
// todayInfoElement.appendChild(seasonElement); // 자식 추가
// seasonElement.appendChild(seasonText);

// console.log(document.getElementsByTagName("div"));

const buttonElement = document.createElement("div");
buttonElement.classList.add("button");
buttonElement.textContent = "버튼";

buttonElement.style.backgroundColor = "gray";
buttonElement.style.color = "white";
buttonElement.style.width = "50px";
buttonElement.style.textAlign = "center";
buttonElement.style.cursor = "pointer";

const todayInfoElement = document.querySelector("div.today-info");
todayInfoElement.appendChild(buttonElement);

buttonElement.addEventListener("click", () => {
  window.alert("클릭"); // 현재 사용하고 있는 웹 브라우저 창에 경고창을 띄움
});


console.log(document.getElementsByTagName("div"));
