import { throttliing } from "../function";

export function confirmList() {
  const button = document.getElementById("list-confirm");
  const section = document.getElementById("wallet");

  if (button !== null) {
    button.addEventListener("click", () => {
      section.classList.toggle("list-on");
    });

    window.addEventListener(
      "scroll",
      throttliing(() => {
        if (section.classList.contains("list-on")) {
          const top = section.getBoundingClientRect().top;
          console.log(top);

          if (top >= 0) {
            section.classList.remove("list-on");
          }
        }
      })
    );
  }
}

confirmList();
