const button = document.querySelector("#home > .send");
const container = document.querySelector("#home > .send-container");
const close = document.querySelector("#home > .send-container > .close > .box");

// console.log(button);
// console.log(container);
// console.log(close);

const onToggle = () => {
  container.classList.toggle("on");
};

if (container !== null) {
  button.addEventListener("click", onToggle);
  close.addEventListener("click", onToggle);
}
