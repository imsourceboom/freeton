// export function agree() {
const checks = Array.from(document.querySelectorAll(".agree-wrap"));

if (checks !== null) {
  checks.map((check) => {
    check.addEventListener("click", () => {
      const box = check.children[0];

      if (box.checked) {
        check.nextElementSibling.classList.add("active");
        check.nextElementSibling.removeAttribute("disabled");
      } else {
        check.nextElementSibling.classList.remove("active");
        check.nextElementSibling.setAttribute("disabled", "");
      }
    });
  });
}
// }

// agree();
