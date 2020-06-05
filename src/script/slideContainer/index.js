const withdrawBtn = document.querySelector("#home ul.tab > li.withdraw-btn");
const stakingBtn = document.querySelector("#home ul.tab > li.staking-btn");
const participationBtn = document.querySelector(".staking-container button");
const sendContainer = document.querySelector("#home > .send-container");
const stakingContainer = document.querySelector("#home > .staking-container");
const investContainer = document.querySelector("#home > .invest-container");
// const back = Array.from(document.querySelectorAll(".slide-header > .back"));
const investBack = document.querySelector(".slide-header.invest > .back");
const sendBack = document.querySelector(".slide-header.send > .back");
const stakingBack = document.querySelector(".slide-header.staking > .back");

// console.log(withdrawBtn);
// console.log(container);
// console.log(back);

const sendContainerOnToggle = () => {
  sendContainer.classList.add("on");
};

const stakingContainerOnToggle = () => {
  stakingContainer.classList.add("on");
};

const investContainerOnToggle = () => {
  investContainer.classList.add("on");
};

if (sendContainer !== null) {
  withdrawBtn.addEventListener("click", sendContainerOnToggle);
  sendBack.addEventListener("click", function () {
    sendContainer.classList.remove("on");
  });
}

if (stakingContainer !== null) {
  stakingBtn.addEventListener("click", stakingContainerOnToggle);
  stakingBack.addEventListener("click", function () {
    stakingContainer.classList.remove("on");
  });
}

if (investContainer !== null) {
  participationBtn.addEventListener("click", investContainerOnToggle);
  investBack.addEventListener("click", function () {
    investContainer.classList.remove("on");
  });
  // back.map((b) => {
  //   b.addEventListener("click", (e) => {
  //     investContainer.classList.remove("on");
  //   });
  // });
}
