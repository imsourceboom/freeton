import { throttliing } from "../function";
const button = document.querySelector(".top-btn");

if (button !== null) {
  window.addEventListener(
    "scroll",
    throttliing(() => {
      const top = document.body.getBoundingClientRect().top;
      if (top < 0) {
        button.style.display = "block";
      } else {
        button.style.display = "none";
      }
    })
  );
}
