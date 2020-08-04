import { debounce } from "../function";

export const amountInputVerify = () => {
  const withdrawPossibles = Array.from(
    document.querySelectorAll(".withdraw-possible")
  );
  const maxInputs = Array.from(document.querySelectorAll(".max-input"));

  if (maxInputs !== null) {
    maxInputs.map((input, i) => {
      let inputValue;
      let numberInputValue;
      let maxAmount;
      let numberMaxAmount;

      withdrawPossibles.map((withdraw, j) => {
        if (i == j) {
          maxAmount = withdraw.textContent;
          numberMaxAmount = parseInt(maxAmount.replace(/,|\./gi, ""));
        }
      });

      input.addEventListener(
        "input",
        debounce((e) => {
          e.target.value = e.target.value.replace(/[^0-9]/g, "");
          e.target.value = parseInt(e.target.value).toLocaleString();

          if (e.target.value == "NaN") {
            e.target.value = "";
          }
          console.log(e.target.value, typeof e.target.value);

          inputValue = e.target.value;
          numberInputValue = parseInt(
            inputValue.replace(/,|\./gi, "") + "000000000"
          );

          if (numberInputValue > numberMaxAmount) {
            e.target.value = maxAmount;
          }
        })
      );
    });
  }
};

amountInputVerify();
