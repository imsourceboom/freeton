// export const loadingText = () => {
const loadingSection = document.querySelector("#loading");

if (loadingSection !== null) {
  const loadingText = document.querySelector("#loading .text");

  const comments = {
    create: "지갑을 생성 중입니다.",
    active: "지갑을 활성화 중입니다.",
  };

  let className = loadingSection.getAttribute("class");

  switch (className) {
    case "create-wallet":
      loadingText.textContent = comments.create;
      break;

    case "active-wallet":
      loadingText.textContent = comments.active;
      break;

    default:
      break;
  }

  // if (loadingText.classList.contains("create-wallet")) {
  //   loadingText.textContent = comments.create;
  // }

  // setTimeout(() => {
  //   loadingText.textContent = comments[1];
  // }, 3000);
  // setTimeout(() => {
  //   loadingText.textContent = comments[2];
  // }, 6000);
  // setTimeout(() => {
  //   loadingText.textContent = comments[3];
  // }, 7500);
}
// };

// loadingText();
