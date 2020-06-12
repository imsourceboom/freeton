import numeral from "numeral";

const nanos = Array.from(document.querySelectorAll(".nano"));
// const inputs = Array.from(document.querySelectorAll(".input-value"));

if (nanos !== null) {
  nanos.map((nano) => {
    let text = Number(nano.textContent);
    text = text / 1000000000;
    let divide = String(text).split(".");
    divide[0] = Number(divide[0]).toLocaleString();
    const value = `${divide[0]}.${divide[1]}`;
    nano.textContent = value;
  });
}

// if (inputs !== null) {
//   inputs.map((input) => {
//     input.addEventListener("keypress", () => {
//       input.value = numeral(input.value).format("0,0[.][000000000]");
//     });
//   });
// }
