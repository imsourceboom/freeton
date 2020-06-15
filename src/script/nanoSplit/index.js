const nanos = Array.from(document.querySelectorAll(".nano"));
// const inputs = Array.from(document.querySelectorAll(".input-value"));

if (nanos !== null) {
  nanos.map((nano) => {
    let text = Number(nano.textContent);
    text = text / 1000000000;
    text = String(text);

    if (text.indexOf(".") == -1) {
      nano.textContent = `${text}.000000000`;
    } else {
      let divide = text.split(".");
      divide[0] = Number(divide[0]).toLocaleString();
      const value = `${divide[0]}.${divide[1]}`;
      nano.textContent = value;
    }
  });
}

// if (inputs !== null) {
//   inputs.map((input) => {
//     input.addEventListener("keypress", () => {
//       input.value = numeral(input.value).format("0,0[.][000000000]");
//     });
//   });
// }
