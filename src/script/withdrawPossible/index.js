// export const withdrawPossibleCalculate = () => {
const withdrawPossibles = Array.from(
  document.querySelectorAll(".withdraw-possible")
);

if (withdrawPossibles !== null) {
  withdrawPossibles.map((draw) => {
    let max = draw.textContent;
    max = max.replace(/,|\./gi, "");
    max = parseFloat(max);
    max = (max - 20000000) / 1000000000;
    max = max.toFixed(9);
    if (max <= 0.020000001) {
      draw.textContent = `0.000000000`;
    } else {
      max = max.toString();
      let divide = max.split(".");
      divide[0] = parseFloat(divide[0]).toLocaleString();
      const value = `${divide[0]}.${divide[1]}`;
      draw.textContent = value;
    }
  });
}
// };

// withdrawPossibleCalculate();
