const setCookie = (key, value, expiredays) => {
  const date = new Date();
  date.setDate(date.getDate() + expiredays * 24 * 60 * 60 * 1000);
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

const createElement = (element, className) => {
  const tag = document.createElement(element);
  tag.setAttribute("class", `popup-${className}`);
  return tag;
};

const createPopup = () => {
  const container = createElement("div", "container");
  const wrapper = createElement("div", "wrapper");
  const box = createElement("div", "box");
  const header = createElement("div", "header");
  const title = createElement("div", "title");
  const close = createElement("div", "close");
  const body = createElement("div", "body");
  const content = createElement("div", "content");
  const footer = createElement("div", "footer");
  const checkGroup = createElement("div", "check-group");
  const input = createElement("input", "check-input");
  const label = createElement("label", "check-label");
  const labelBundle = createElement("div", "check-label-bundle");
  const checkImage = createElement("span", "check-image");
  const checkComment = createElement("p", "check-comment");

  document.body.appendChild(container);
  container.appendChild(wrapper);
  wrapper.appendChild(box);
  box.appendChild(header);
  box.appendChild(body);
  box.appendChild(footer);
  header.appendChild(title);
  header.appendChild(close);
  body.appendChild(content);
  footer.appendChild(checkGroup);
  checkGroup.appendChild(input);
  checkGroup.appendChild(label);
  label.appendChild(labelBundle);
  labelBundle.appendChild(checkImage);
  labelBundle.appendChild(checkComment);
  input.setAttribute("type", "checkbox");
  input.setAttribute("id", "popup-check");
  input.setAttribute("hidden", "");
  label.setAttribute("for", "popup-check");

  title.textContent = "베타 테스트 안내";
  content.textContent =
    "현재 퍼스트톤 지갑은 보다 원활한 서비스를 제공하기 위해 베타서비스를 진행하고 있음을 알려드립니다.";
  checkComment.textContent = `하루 동안 보이지 않기`;

  container.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999999;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,.7);
  `;

  wrapper.style.cssText = `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  `;

  box.style.cssText = `
    background-color: #fff;
    width: 90vw;
    max-width: 500px;
    border-radius: 5px;
    padding: 5px 0;
  `;

  header.style.cssText = `
    position: relative;
    padding: 22px 0;
    text-align: center;
  `;

  title.style.cssText = `
    font-weight: bold;
    font-size: 1.2em;
  `;

  close.style.cssText = `
    position: absolute;
    top: 50%;
    right: 20px;
    width: 26px;
    height: 26px;
    transform: translate3d(0, -50%, 0);
    background-image: url('https://icongr.am/clarity/close.svg?size=26&color=000000');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    cursor: pointer;
  `;

  body.style.cssText = `
    padding: 30px 20px;
  `;

  content.style.cssText = `
    line-height: 1.8;
  `;

  footer.style.cssText = `
    padding: 20px;
  `;

  label.style.cssText = `
    display: inline-block;
    cursor: pointer;
  `;

  labelBundle.style.cssText = `
    display: flex;
    align-items: center;
  `;

  checkImage.style.cssText = `
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    // background-image: url("/assets/images/symbols/check.svg");
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
  `;

  checkComment.style.cssText = `
    display: inline-block;
    color: #78918f;
    font-size: 0.95em;
    margin-left: 5px;
  `;
};

export const cookieCheck = () => {
  const main = document.querySelector("main > #home");
  const cookie = getCookie("mainpopup");
  if (cookie != "false") {
    if (main !== null) {
      createPopup();
    }

    const container = document.querySelector(".popup-container");
    const close = document.querySelector(".popup-close");
    const checkBox = document.querySelector(".popup-check-input");
    const label = document.querySelector(".popup-check-label");
    const image = document.querySelector(".popup-check-image");

    label.addEventListener("click", () => {
      const bgCheck = getComputedStyle(image).backgroundImage;

      if (bgCheck == "none") {
        image.style.backgroundImage = 'url("/assets/images/symbols/check.svg")';
      } else {
        image.style.backgroundImage = "";
      }
    });

    close.addEventListener("click", (e) => {
      if (checkBox.checked) {
        setCookie("mainpopup", "false", 1);
      }
      container.parentElement.removeChild(container);
    });
  }
};

cookieCheck();
