const createElement = (element, className) => {
  const tag = document.createElement(element);
  tag.setAttribute("class", `popup-${className}`);
  return tag;
};

export const createPopup = () => {
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
    "∙ 현재 퍼스트톤 지갑은 보다 원활한 서비스를 제공하기 위해 베타서비스를 진행하고 있음을 알려드립니다.";
  // title.textContent = "🚨 신고접수안내";
  // content.innerHTML = `
  //   <p>최근 퍼스트톤 관계자 등으로 사칭하는 </p>
  //   <p>피해 사례가 발생하고 있습니다.</p>
  //   <p>자세한 제보를 기다립니다.</p>
  //   <p style="margin-bottom: 1.2em;">감사합니다.</p>
  //   <button style="box-shadow: 0 1px 5px rgba(0,0,0,0.29); font-size: 1.05em; width: 120px;
  //   height: 33px; border-radius: 4px; matgin-top: 1.2em;"><a href="https://forms.gle/kCY27jFn1rE3Wxes5" target="_blank" rel="noreferrer noopner">⚠️ 신고하기</a></button>
  //   `;
  checkComment.textContent = `7일 동안 보이지 않기`;

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

    text-align: center;
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
