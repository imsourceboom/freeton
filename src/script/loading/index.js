const loadingText = document.querySelector("#loading .text");

if (loadingText !== null) {
  const comments = [
    "seed phrase를 생성 중입니다.",
    "암호화 중입니다.",
    "지갑을 생성 중입니다.",
    "지갑을 활성화 중입니다.",
  ];
  loadingText.textContent = comments[0];

  setTimeout(() => {
    loadingText.textContent = comments[1];
  }, 2500);
  setTimeout(() => {
    loadingText.textContent = comments[2];
  }, 5000);
  setTimeout(() => {
    loadingText.textContent = comments[3];
  }, 7500);
}
