import { swup } from "../swup";

function accordionFunc() {
  const accordionList = Array.from(
    document.querySelectorAll("ul.accordion li.list")
  );

  if (accordionList !== null) {
    accordionList.map((list) => {
      list.addEventListener("click", () => {
        list.classList.toggle("on");
      });
    });
  }
}

accordionFunc();

swup.on("contentReplaced", accordionFunc);
