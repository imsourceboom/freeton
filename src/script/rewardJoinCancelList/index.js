const rewardBtn = document.querySelector(
  ".reward-set .title strong.reward-btn"
);
const joinCancelBtn = document.querySelector(
  ".reward-set .title strong.join-cancel-btn"
);
const rewardList = document.querySelector(".reward-set ul.reward-list");
const joinCancelList = document.querySelector(
  ".reward-set ul.join-cancel-list"
);

if (rewardBtn !== null || joinCancelBtn !== null) {
  rewardBtn.addEventListener("click", () => {
    rewardBtn.classList.add("on");
    rewardList.classList.add("on");
    joinCancelBtn.classList.remove("on");
    joinCancelList.classList.remove("on");
  });

  joinCancelBtn.addEventListener("click", () => {
    rewardBtn.classList.remove("on");
    rewardList.classList.remove("on");
    joinCancelBtn.classList.add("on");
    joinCancelList.classList.add("on");
  });
}
