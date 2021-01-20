const createElement = (element, className) => {
  const tag = document.createElement(element);
  tag.setAttribute('class', `popup-${className}`);
  return tag;
};

export const createPopup = () => {
  const container = createElement('div', 'container');
  const wrapper = createElement('div', 'wrapper');
  const box = createElement('div', 'box');
  const header = createElement('div', 'header');
  const title = createElement('div', 'title');
  const close = createElement('button', 'close');
  const body = createElement('div', 'body');
  const content = createElement('div', 'content');
  const footer = createElement('div', 'footer');
  const checkGroup = createElement('div', 'check-group');
  const input = createElement('input', 'check-input');
  const label = createElement('label', 'check-label');
  const labelBundle = createElement('div', 'check-label-bundle');
  const checkImage = createElement('span', 'check-image');
  const checkComment = createElement('p', 'check-comment');

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

  /*
    Kilox Wallet 설치 안내
  */
  title.textContent = '서비스 종료 안내';
  content.innerHTML = `
      <p>
        <h3 style="display: inline-block; color: #e74c3c; text-decoration: underline; margin-right: 5px;">
          Firston Wallet
        </h3>
        <span>
          서비스가 종료됩니다.
        </span>
      </p>
      <br/>
      <p style="">
        먼저 Firston Wallet 이용자 여러분께 진심으로 감사의 말씀을 드리며,
        Firston Wallet 서비스를 종료하게 되었음을 안내해드립니다.
      </p>
      <br/>
      <p>
        안정적인 서비스 제공을 위해 KiloX Wallet 서비스에 집중하기로 결정하게 되었습니다.
      </p>
      <br/>
      <ul>
        <li>
          <b style="font-weight: bold; color: #d35400; margin-right: 30px;">종료 일자</b>
          <!-- <span><b style="font-weight: bold;">2021</b>년 <b style="font-weight: bold;">2</b>월 <b style="font-weight: bold;">5</b>일</span> -->
          <span>추후 공지</span>
        </li>
      </ul>
      <br/>
      <p>
        <!-- 해당 종료 일자 전까지 -->
        전용 애플리케이션을 설치하시고 Firston Wallet에 있는 자산을 KiloX Wallet으로 옮기셔서 이용해 주시기 바랍니다.
      </p>
      <p>
        감사합니다.
      </p>
      <br/>
      <br/>
      <div style="display: flex; align-items: center; justify-content: center;">
        <a href="https://play.google.com/store/apps/details?id=com.kilox.app&hl=ko" style="" target="_blank">
          <img style="width: 4em; border-radius: 14.6%; box-shadow: 1px 1px 5px rgba(0,0,0,0.6);" src="https://play-lh.googleusercontent.com/1siCbYovOktLBtxL86r0u7LLksSuYBMhJeBOZvdCFdBNWu3mx_BL3B-V1ckfhHTuHA=s180-rw" />
          <!-- <img style="width: 4em; border-radius: 14.6%; box-shadow: 1px 1px 5px rgba(0,0,0,0.6);" src="data:image/webp;base64,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" /> -->
        </a>
        <span style="margin: 0 2em;">for</span>
        <img style="width: 13em; height: auto;" src="https://cdn.worldvectorlogo.com/logos/google-play-4.svg" />
      </div>
      <br/>
      <div style="display: flex; align-items: center; justify-content: center;">
        <a href="https://apps.apple.com/us/app/kilox-wallet/id1535086604" style="" target="_blank">
          <img style="width: 4em; border-radius: 14.6%; box-shadow: 1px 1px 5px rgba(0,0,0,0.6);" src="https://play-lh.googleusercontent.com/1siCbYovOktLBtxL86r0u7LLksSuYBMhJeBOZvdCFdBNWu3mx_BL3B-V1ckfhHTuHA=s180-rw" />
        </a>
        <span style="margin: 0 2em;">for</span>
        <img style="width: 13em; height: auto;" src="https://cdn.worldvectorlogo.com/logos/available-on-the-app-store.svg" />
      </div>
      <p style="font-size: 0.85em; margin-top: 0.8em; text-align: center; color: #1e90ff; ">🚀 iOS용 정식 버전 출시하였습니다</p>
    `;

  /*
    Kilox Wallet 설치 안내
  */
  // title.textContent = 'Kilox Wallet 앱 설치 안내';
  // content.innerHTML = `
  //     <p style="color:#5352ed;">
  //     Kilox Wallet 애플리케이션이 출시가 되었습니다.
  //     </p>
  //     <br/>
  //     <p>
  //     더욱 쾌적하고 원활한 서비스 이용을 위해 최적화된 애플리케이션을 출시하게 되었습니다.
  //     </p>
  //     <br/>
  //     <p>
  //     전용 애플리케이션을 설치 하시고 Firston Wallet에 있는 자산을 Kilox Wallet으로 옮기셔서 이용해 주시면 감사하겠습니다.
  //     </p>
  //     <br/>
  //     <br/>
  //     <div style="display: flex; align-items: center; justify-content: center;">
  //       <a href="https://play.google.com/store/apps/details?id=com.kilox.app&hl=ko" style="">
  //         <img style="width: 4em; border-radius: 14.6%; box-shadow: 1px 1px 5px rgba(0,0,0,0.6);" src="data:image/webp;base64,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" />
  //       </a>
  //       <span style="margin: 0 2em;">for</span>
  //       <img style="width: 13em; height: auto;" src="https://cdn.worldvectorlogo.com/logos/google-play-4.svg" />
  //     </div>
  //     <br/>
  //     <br/>
  //     <div style="display: flex; align-items: center; justify-content: center;">
  //       <a href="https://kilox.io/guide/ios/install" style="" target="_blank">
  //         <img style="width: 4em; border-radius: 14.6%; box-shadow: 1px 1px 5px rgba(0,0,0,0.6);" src="data:image/webp;base64,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" />
  //       </a>
  //       <span style="margin: 0 2em;">for</span>
  //       <img style="width: 13em; height: auto;" src="https://cdn.worldvectorlogo.com/logos/available-on-the-app-store.svg" />
  //     </div>
  //     <p style="font-size: 0.85em; margin-top: 0.8em; text-align: center; color: rgb(212, 72, 85); ">* iOS용은 현재 테스트 버전입니다.</p>
  //   `;

  /*
    쿠키 삭제 안내 팝업
  */
  // title.textContent = '쿠키 삭제 안내';
  // content.innerHTML = `
  //     <p style="color:#4b7bec;">
  //     캐시 및 쿠키를 삭제하면, 웹사이트 이용 시 발생하는 로그인 문제를 해결할 수 있습니다.
  //     </p>
  //     <br/>
  //     <p>
  //     이용에 불편을 드려 대단히 죄송합니다.
  //     </p>
  //     <br/>
  //     <br/>
  //     <a href="/cookieGuide.do" style="display: block; width: 200px; margin: 0 auto; padding: 13px 10px; text-align: center; background-color: #4b7bec; color: #fff; border-radius: 4px;">안내 페이지로 이동</a>
  //   `;

  /*
      로그인 오류 안내
    */
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

  if (matchMedia('screen and (min-width: 768px)').matches) {
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
  } else {
    wrapper.style.cssText = `
      position: absolute;
      width: 100%;
      min-height: 100vh;
      top: 0;
      left: 0;
    `;

    box.style.cssText = `
      background-color: #fff;
      width: 100vw;
      min-height: 100vh;
      border-radius: 5px;
      padding: 5px 0;
    `;

    header.style.cssText = `
      position: relative;
      padding: 32px 0;
      text-align: center;
    `;
  }

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
