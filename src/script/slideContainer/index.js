export const stakingBtn = document.querySelector(
  "#home ul.tab > li.staking-btn"
);

export const goInfoBtn = document.querySelector(
  ".staking-container .move-info-btn"
);
export const goParticipationBtn = document.querySelector(
  ".info-container .go-staking"
);

const stakingContainer = document.querySelector("#home > .staking-container");
const infoContainer = document.querySelector("#home > .info-container");

export const infoBack = document.querySelector(".slide-header.invest > .back");
export const stakingBack = document.querySelector(
  ".slide-header.staking > .back"
);

const stakingContainerOnToggle = () => {
  stakingContainer.classList.add("on");
};

const infoContainerOnToggle = () => {
  infoContainer.classList.add("on");
};

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
