const withdrawBtn = document.querySelector("#home ul.tab > li.withdraw-btn");
const stakingBtn = document.querySelector("#home ul.tab > li.staking-btn");

const goInfoBtn = document.querySelector(".staking-container .move-info-btn");
const goParticipationBtn = document.querySelector(
  ".info-container .go-staking"
);

const sendContainer = document.querySelector("#home > .send-container");
const stakingContainer = document.querySelector("#home > .staking-container");
const infoContainer = document.querySelector("#home > .info-container");

const infoBack = document.querySelector(".slide-header.invest > .back");
const sendBack = document.querySelector(".slide-header.send > .back");
const stakingBack = document.querySelector(".slide-header.staking > .back");

const sendContainerOnToggle = () => {
  sendContainer.classList.add("on");
};

const stakingContainerOnToggle = () => {
  stakingContainer.classList.add("on");
};

const infoContainerOnToggle = () => {
  infoContainer.classList.add("on");
};

if (sendContainer !== null) {
  withdrawBtn.addEventListener("click", sendContainerOnToggle);
  sendBack.addEventListener("click", function () {
    sendContainer.classList.remove("on");
  });
}

if (stakingContainer !== null) {
  goInfoBtn.addEventListener("click", infoContainerOnToggle);
  stakingBtn.addEventListener("click", stakingContainerOnToggle);
  stakingBack.addEventListener("click", function () {
    stakingContainer.classList.remove("on");
  });
}

if (infoContainer !== null) {
  goParticipationBtn.addEventListener("click", function () {
    infoContainer.classList.remove("on");
  });
  infoBack.addEventListener("click", function () {
    infoContainer.classList.remove("on");
  });
}
