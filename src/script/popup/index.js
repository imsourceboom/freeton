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
  const close = createElement("button", "close");
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
  // footer.appendChild(checkGroup);
  // checkGroup.appendChild(input);
  // checkGroup.appendChild(label);
  // label.appendChild(labelBundle);
  // labelBundle.appendChild(checkImage);
  // labelBundle.appendChild(checkComment);
  // input.setAttribute("type", "checkbox");
  // input.setAttribute("id", "popup-check");
  // input.setAttribute("hidden", "");
  // label.setAttribute("for", "popup-check");

  // title.textContent = "베타 테스트 안내";
  // content.textContent =
  //   "∙ 현재 퍼스트톤 지갑은 보다 원활한 서비스를 제공하기 위해 베타서비스를 진행하고 있음을 알려드립니다.";
  title.textContent = "쿠키 삭제 안내";
  content.innerHTML = `
      <p style="color:#4b7bec;">
      캐시 및 쿠키를 삭제하면, 웹사이트 이용 시 발생하는 로그인 문제를 해결할 수 있습니다.
      </p>
      <br/>
      <p>
      브라우저를 사용할 때 웹사이트 정보는 캐시 및 쿠키 형태로 저장되는데,
      캐시는 다음 방문 시 페이지를 더 빠르게 열 수 있도록 페이지의 일부를 저장하여 기억합니다.
      쿠키는 내가 방문하는 사이트에서 만들어내는 파일로 인터넷 사용기록을 저장하여 인터넷을 쉽게 사용할 수 있도록 합니다.
      </p>
      <br/>
      <p>
      캐시와 쿠키 형태의 웹사이트 정보 저장은 자연스러운 현상이나 저장된 이력들은 접속한 사이트의 기능이 업데이트 될 때 문제의
      원인이 되기도 합니다.
      </p>
      <br/>
      <p>
      이용에 불편을 드려 대단히 죄송합니다.
      </p>
      <br/>
      <br/>
      <a href="/cookieGuide.do" style="display: block; width: 200px; margin: 0 auto; padding: 13px 10px; text-align: center; background-color: #4b7bec; color: #fff; border-radius: 4px;">안내 페이지로 이동</a>

    `;
  // title.textContent = "로그인 오류 안내";
  // content.innerHTML = `
  //     <p>
  //   ∙ 현재 다음과 같은 현상이 발생하여 문제를 확인 중에 있습니다.
  //     </p>
  //     <br/>
  //     <p style="padding-left: 14px;">
  //     - 퍼스트톤 로그인 불가
  //     </p>
  //     <br/>
  //     <p style="padding-left: 14px;">
  //     퍼스트톤에 보관된 자금은 어떠한 경우에도 안전하게 보전될 것 입니다.
  //     </p>
  //     <br/>
  //     <p style="padding-left: 14px;">
  //     더불어 최대한 빠른 원인 파악 및 정상화를 위해 최선을 다할 것이며
  //     정상화까지의 현황을 지속적으로 전달 드리겠습니다.
  //     </p>
  //     <br/>
  //     <p style="padding-left: 14px;">
  //     이용에 불편을 드린 점 진심으로 사과 드립니다.
  //     감사합니다.
  //     </p>
  //   `;
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

    // text-align: center;
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
