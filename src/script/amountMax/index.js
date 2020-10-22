import { comma, convertNumber } from "../amountInputVerify";

// export function amountMax() {
const maxBtn = Array.from(document.querySelectorAll(".amount-max"));
const withdrawPossibles = Array.from(
  document.querySelectorAll(".withdraw-possible")
);
const maxInputs = Array.from(document.querySelectorAll(".max-input"));
const totalPlusFee = Array.from(
  document.querySelectorAll(".total-plus-fee dd")
);

if (maxBtn !== null) {
  let possibleAmount;
  let totalAmount;

  maxBtn.map((btn, i) => {
    btn.addEventListener("click", () => {
      withdrawPossibles.map((target, j) => {
        if (i == j) {
          possibleAmount = target.textContent;
        }
      });
      maxInputs.map((target, j) => {
        if (i == j) {
          target.value = possibleAmount;
        }
      });

      totalAmount = convertNumber(possibleAmount);
      totalAmount = totalAmount + 0.02;
      totalAmount = totalAmount.toString();
      totalAmount = comma(totalAmount);

      totalPlusFee.map((target, j) => {
        if (i == j) {
          target.textContent = totalAmount;
          target.nextElementSibling.value = convertNumber(totalAmount);
        }
      });
    });
  });
}
// }

// amountMax();
