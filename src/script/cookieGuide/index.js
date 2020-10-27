const cookieGuide = document.getElementById("cookie-guide");

if (cookieGuide !== null) {
  const osTabs = Array.from(document.querySelectorAll("ul.os-tab > li"));
  const osBoxes = Array.from(document.querySelectorAll("ul.os-box > li"));
  const browserTabs = Array.from(
    document.querySelectorAll("nav.browser-tab figure")
  );
  const contentsBoxes = Array.from(
    document.querySelectorAll("article.contents")
  );

  osTabs.map((tab, i) => {
    tab.addEventListener("click", () => {
      osTabs.map((target, j) => {
        if (tab === target) {
          target.classList.add("active");
        } else {
          target.classList.remove("active");
        }
      });

      if (i === 0) {
        browserTabs[0].classList.add("on");
        browserTabs[1].classList.remove("on");
        contentsBoxes[0].classList.add("on");
        contentsBoxes[1].classList.remove("on");
      }

      if (i === 1) {
        browserTabs[2].classList.add("on");
        browserTabs[3].classList.remove("on");
        contentsBoxes[2].classList.add("on");
        contentsBoxes[3].classList.remove("on");
      }

      if (i === 2) {
        browserTabs[4].classList.add("on");
        browserTabs[5].classList.remove("on");
        contentsBoxes[4].classList.add("on");
        contentsBoxes[5].classList.remove("on");
      }

      osBoxes.map((box, j) => {
        if (i === j) {
          box.classList.add("active");
        } else {
          box.classList.remove("active");
        }
      });
    });
  });

  browserTabs.map((tab, i) => {
    tab.addEventListener("click", () => {
      browserTabs.map((target, j) => {
        if (tab === target) {
          target.classList.add("on");
        } else {
          target.classList.remove("on");
        }
      });

      contentsBoxes.map((box, j) => {
        if (i === j) {
          box.classList.add("on");
        } else {
          box.classList.remove("on");
        }
      });
    });
  });
}
