import { createPopup } from "../popup";

const setCookie = (key, value, expiredays) => {
  const date = new Date();
  //   date.setDate(date.getDate() + expiredays * 24 * 60 * 60 * 1000);
  date.setDate(date.getDate() + expiredays);
  document.cookie = `${key}=${value}; path=/; expires=${date.toUTCString()};`;
};

const getCookie = (key) => {
  let result = null;
  const cookie = document.cookie.split(";");

  cookie.some(function (item) {
    item = item.replace(" ", "");
    const dic = item.split("=");

    if (key === dic[0]) {
      result = dic[1];
      return true;
    }
  });
  return result;
};

// export const cookieCheck = () => {
const main = document.querySelector("main > #home");
const cookie = getCookie("mainpopup");
// if (cookie != "false") {
if (main !== null) {
  createPopup();

  const container = document.querySelector(".popup-container");
  const close = document.querySelector(".popup-close");
  const checkBox = document.querySelector(".popup-check-input");
  const label = document.querySelector(".popup-check-label");
  const image = document.querySelector(".popup-check-image");

  // label.addEventListener("click", () => {
  //   const bgCheck = getComputedStyle(image).backgroundImage;

  //   if (bgCheck == "none") {
  //     image.style.backgroundImage = 'url("/assets/images/symbols/check.svg")';
  //   } else {
  //     image.style.backgroundImage = "";
  //   }
  // });

  close.addEventListener("click", (e) => {
    // if (checkBox.checked) {
    //   setCookie("mainpopup", "false", 7);
    // }
    container.parentElement.removeChild(container);
  });
}
// }
// };

// cookieCheck();
