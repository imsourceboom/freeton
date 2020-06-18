export function commaFunc() {
  const nanos = Array.from(document.querySelectorAll(".nano"));

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
}

commaFunc();
