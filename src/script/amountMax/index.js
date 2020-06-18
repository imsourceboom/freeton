export function amountMax() {
  const possibles = Array.from(document.querySelectorAll(".withdraw-possible"));
  const maxBtn = Array.from(document.querySelectorAll(".amount-max"));

  if (possibles !== null || maxBtn !== null) {
    maxBtn.map((btn) => {
      btn.addEventListener("click", () => {
        possibles.map((possible) => {
          btn.previousElementSibling.value = possible.textContent;
        });
      });
    });
  }
}

amountMax();
