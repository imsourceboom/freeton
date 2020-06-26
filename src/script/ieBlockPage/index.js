import { browserCheck } from "../agentCheck";

const browser = browserCheck();

document.addEventListener("DOMContentLoaded", function () {
  if (browser == "ie") {
    // const preloadImages = ["/assets/images/icons/apple-icon.png"];

    // const preload = () => {
    //   const tag = document.createElement("link");
    //   tag.rel = "preload";
    //   tag.as = "image";
    //   tag.href = preloadImages;
    //   document.head.appendChild(tag);
    // };

    // preload();

    const browsers = [
      {
        name: "Chrome",
        url: "https://www.google.com/intl/ko_ALL/chrome/",
        image: "https://www.google.com/chrome/static/images/chrome-logo.svg",
      },
      {
        name: "FireFox",
        url: "https://www.mozilla.org/ko/firefox/",
        image:
          "https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png",
      },
      {
        name: "Whale",
        url: "https://whale.naver.com/ko/",
        image:
          "https://upload.wikimedia.org/wikipedia/ko/7/7a/Naver_whale_logo.png",
      },
      {
        name: "Opera",
        url: "https://www.opera.com/ko/computer/",
        image:
          "https://www-static.operacdn.com/static-heap/6e/6eeaecd153e69883e2429e4755f5361048cfac89/opera-mobile-apps.png",
      },
    ];

    const createElement = (element, className) => {
      const tag = document.createElement(element);
      tag.setAttribute("class", className);
      return tag;
    };

    const createList = (name, url, image) => {
      const liTag = document.createElement("li");
      const linkTag = document.createElement("a");
      const imageTag = document.createElement("img");
      const nameTag = document.createElement("div");

      liTag.appendChild(linkTag);
      linkTag.appendChild(imageTag);
      linkTag.appendChild(nameTag);

      linkTag.setAttribute("href", url);
      linkTag.setAttribute("target", "_blank");
      imageTag.setAttribute("src", image);
      nameTag.textContent = name;

      liTag.style.cssText = `
      width: 25%;
      float: left;
      text-align: center;
      opacity: .75;
      -webkit-transition: .3s;
      -ms-transition: .3s;
      transition: .3s;
    `;

      imageTag.style.cssText = `
      width: 50px;
      height: 50px;
      display: inline-block;
    `;

      return liTag;
    };

    const container = createElement("div", "ie-container");
    const logoWrap = createElement("figure", "logo-wrap");
    const logo = createElement("img", "logo");
    const wrapper = createElement("div", "warpper");
    const notice = createElement("div", "notice");
    const suggest = createElement("div", "suggest");
    const other = createElement("div", "other");
    const box = createElement("ul", "box");

    body.innerHTML = "";
    body.appendChild(container);
    container.appendChild(logoWrap);
    container.appendChild(wrapper);
    logoWrap.appendChild(logo);
    wrapper.appendChild(notice);
    wrapper.appendChild(suggest);
    wrapper.appendChild(other);
    other.appendChild(box);

    for (let i = 0; i < browsers.length; i++) {
      const browser = createList(
        browsers[i].name,
        browsers[i].url,
        browsers[i].image
      );
      box.appendChild(browser);
    }

    logo.setAttribute("src", "/assets/images/icons/apple-icon.png");

    notice.textContent = `
    Firston 서비스는
    Internet Explorer 브라우저에서 원활하게
    동작하지 않습니다.
  `;

    suggest.textContent = `아래 브라우저들을 이용해주세요.`;

    container.style.cssText = `
    position: fixed;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100vw;
    max-width: 1680px;
    height: 100vh;
  `;

    logoWrap.style.cssText = `
    position: absolute;
    top: 30px;
    left: 40px;
    // height: 70px;
    // padding: 0 50px;
    display: flex;
    align-items: center;
  `;

    logo.style.cssText = `
    width: 30px;
    height: 30px;
    cursor: pointer;
  `;

    wrapper.style.cssText = `
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    // width: 100%;
    // max-width: 500px;
  `;

    notice.style.cssText = `
    font-weight: 700;
    white-space: nowrap;
    margin-bottom: 20px;
  `;

    suggest.style.cssText = `
    text-align: center;
  `;

    other.style.cssText = `
    margin-top: 50px;
  `;
  }
});
