import { swup } from "../swup";

function joinCancel() {
  const ul = document.querySelector(".participation-set ul");
  const joinNav = document.querySelector(".participation-set ul li.join-btn");
  const cancelNav = document.querySelector(
    ".participation-set ul li.cancel-btn"
  );
  const joinContainer = document.querySelector(".participation-set .join");
  const cancelContainer = document.querySelector(".participation-set .cancel");
  const joinInput = document.querySelector(
    '.participation-set .join input[type="text"]'
  );
  const cancelInput = document.querySelector(
    '.participation-set .cancel input[type="text"]'
  );
  const joinCheckBox = document.querySelector(
    '.participation-set .join input[type="checkbox"]'
  );
  const cancelCheckBox = document.querySelector(
    '.participation-set .cancel input[type="checkbox"]'
  );
  const joinButton = document.querySelector(".participation-set .join button");
  const cancelButton = document.querySelector(
    ".participation-set .cancel button"
  );

  console.log(joinButton);
  console.log(cancelButton);

  if (joinNav !== null || cancelNav !== null) {
    joinNav.addEventListener("click", function () {
      ul.classList.remove("on");
      joinNav.classList.add("on");
      joinContainer.classList.add("on");
      cancelNav.classList.remove("on");
      cancelContainer.classList.remove("on");
      cancelInput.value = "";
      cancelCheckBox.checked = false;
      cancelButton.classList.remove("active");
      cancelButton.setAttribute("disabled", "");
    });

    cancelNav.addEventListener("click", function () {
      ul.classList.add("on");
      joinNav.classList.remove("on");
      joinContainer.classList.remove("on");
      cancelNav.classList.add("on");
      cancelContainer.classList.add("on");
      joinInput.value = "";
      joinCheckBox.checked = false;
      joinButton.classList.remove("active");
      joinButton.setAttribute("disabled", "");
    });
  }
}

joinCancel();

swup.on("contentReplaced", joinCancel);
