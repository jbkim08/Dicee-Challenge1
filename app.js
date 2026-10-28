// alert("테스트");

//이미지 1, 이미지 2 선택
const image1 = document.querySelector(".img1");
const image2 = document.querySelector(".img2");
const h1 = document.querySelector("h1");
// setAttribute으로 태그 속성값을 넣음
// 1~6까지 랜덤 숫자
const random1 = Math.floor(Math.random() * 6) + 1;
console.log("첫번째 랜덤숫자 : " + random1);
const random2 = Math.floor(Math.random() * 6) + 1;
console.log("두번째 랜덤숫자 : " + random2);

image1.setAttribute("src", `images/dice${random1}.png`);
image2.setAttribute("src", `images/dice${random2}.png`);

//if문을 써서 이긴 플레이어 표시 비긴거도 표시
if (random1 > random2) {
  h1.textContent = "🚀Player 1 Wins!";
} else if (random2 > random1) {
  h1.textContent = "Player 2 Wins!🚀";
} else {
  h1.textContent = "Draw!";
}
