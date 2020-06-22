export function commaFunc() {
  const nanos = Array.from(document.querySelectorAll(".nano"));

  if (nanos !== null) {
    nanos.map((nano) => {
      let text = nano.textContent;
      text = text.replace(/,/gi, "");
      text = text.replace(/\./gi, "");
      text = parseFloat(text);
      text = text / 1000000000;
      text = text.toFixed(9);
      text = text.toString();

      let divide = text.split(".");
      divide[0] = parseFloat(divide[0]).toLocaleString();
      const value = `${divide[0]}.${divide[1]}`;
      nano.innerText = value;
    });
  }
}

commaFunc();
