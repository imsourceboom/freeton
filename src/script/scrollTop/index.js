const topButton = document.querySelector(".top-btn");

import {
  stakingBtn,
  goInfoBtn,
  goParticipationBtn,
  infoBack,
  stakingBack,
} from "../slideContainer";

const stakingTop = () => {
  topButton.setAttribute("href", "#staking-top");
};

const infoTop = () => {
  topButton.setAttribute("href", "#info-top");
};

const bodyTop = () => {
  topButton.setAttribute("href", "#body");
};

if (topButton !== null) {
  topButton.setAttribute("href", "#body");

  stakingBtn.addEventListener("click", stakingTop);
  infoBack.addEventListener("click", stakingTop);
  goParticipationBtn.addEventListener("click", stakingTop);
  stakingBack.addEventListener("click", bodyTop);
  goInfoBtn.addEventListener("click", infoTop);
}
