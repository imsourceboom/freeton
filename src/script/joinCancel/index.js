const ul = document.querySelector(".participation-set ul");
const joinBtn = document.querySelector(".participation-set ul li.join-btn");
const cancelBtn = document.querySelector(".participation-set ul li.cancel-btn");
const joinContainer = document.querySelector(".participation-set .join");
const cancelContainer = document.querySelector(".participation-set .cancel");

if (joinBtn !== null || cancelBtn !== null) {
  joinBtn.addEventListener("click", function () {
    ul.classList.remove("on");
    joinBtn.classList.add("on");
    joinContainer.classList.add("on");
    cancelBtn.classList.remove("on");
    cancelContainer.classList.remove("on");
  });

  cancelBtn.addEventListener("click", function () {
    ul.classList.add("on");
    joinBtn.classList.remove("on");
    joinContainer.classList.remove("on");
    cancelBtn.classList.add("on");
    cancelContainer.classList.add("on");
  });
}
