const body = document.querySelector("body");
const btn = document.querySelector("#home ul.tab li.withdraw-btn");
const container = document.querySelector("#home .send-component");
const cover = document.querySelector(" .send-component .cover");

if (btn !== null) {
  btn.addEventListener("click", function (e) {
    body.classList.add("fixed");
    container.classList.add("on");
  });

  cover.addEventListener("click", function () {
    body.classList.remove("fixed");
    container.classList.remove("on");
  });
}
