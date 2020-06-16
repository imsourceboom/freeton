const loadingText = document.querySelector("#loading .text");

if (loadingText !== null) {
  const comments = [
    "시드키를 생성 중입니다.",
    "암호화 설정 중입니다.",
    "지갑을 생성합니다.",
  ];
  loadingText.textContent = comments[0];

  setTimeout(() => {
    loadingText.textContent = comments[1];
  }, 3000);
  setTimeout(() => {
    loadingText.textContent = comments[2];
  }, 6000);
  // setTimeout(() => {
  //   loadingText.textContent = comments[3];
  // }, 7500);
}
