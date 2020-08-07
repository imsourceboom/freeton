import { throttling } from "../function";
const button = document.querySelector(".top-btn");

if (button !== null) {
  window.addEventListener(
    "scroll",
    throttling(() => {
      const top = window.pageYOffset;

      if (top > 0) {
        button.style.display = "block";
      } else {
        button.style.display = "none";
      }
    })
  );
}
