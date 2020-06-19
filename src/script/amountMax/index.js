export function amountMax() {
  const maxBtn = Array.from(document.querySelectorAll(".amount-max"));

  if (maxBtn !== null) {
    maxBtn.map((btn) => {
      btn.addEventListener("click", () => {
        btn.previousElementSibling.value =
          btn.parentNode.parentNode.parentNode.previousElementSibling.children[1].textContent;
      });
    });
  }
}

amountMax();
