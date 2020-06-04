const withdrawBtn = document.querySelector("#home ul.tab > li.withdraw-btn");
const container = document.querySelector("#home > .send-container");
const back = document.querySelector(
  "#home > .send-container > .header > .back"
);

// console.log(withdrawBtn);
// console.log(container);
// console.log(back);

const onToggle = () => {
  container.classList.toggle("on");
};

if (container !== null) {
  withdrawBtn.addEventListener("click", onToggle);
  back.addEventListener("click", onToggle);
}
