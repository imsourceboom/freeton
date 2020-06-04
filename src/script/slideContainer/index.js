const withdrawBtn = document.querySelector("#home ul.tab > li.withdraw-btn");
const stakingBtn = document.querySelector("#home ul.tab > li.staking-btn");
const participationBtn = document.querySelector(".staking-container button");
const sendContainer = document.querySelector("#home > .send-container");
const stakingContainer = document.querySelector("#home > .staking-container");
const investContainer = document.querySelector("#home > .invest-container");
const back = Array.from(document.querySelectorAll(".slide-header > .back"));

// console.log(withdrawBtn);
// console.log(container);
console.log(back);

const sendContainerOnToggle = () => {
  sendContainer.classList.toggle("on");
};

const stakingContainerOnToggle = () => {
  stakingContainer.classList.toggle("on");
};

const investContainerOnToggle = () => {
  investContainer.classList.toggle("on");
};

if (sendContainer !== null) {
  withdrawBtn.addEventListener("click", sendContainerOnToggle);
  back.map((b) => {
    b.addEventListener("click", (e) => {
      sendContainer.classList.remove("on");
      // back.map((v) => {
      //   if (b === v) {
      //     sendContainer.classList.remove("on");
      //   }
      // });
    });
  });
}

if (stakingContainer !== null) {
  stakingBtn.addEventListener("click", stakingContainerOnToggle);
  back.map((b) => {
    b.addEventListener("click", (e) => {
      stakingContainer.classList.remove("on");
      // back.map((v) => {
      //   if (b === v) {
      //     stakingContainer.classList.remove("on");
      //   }
      // });
    });
  });
}

if (investContainer !== null) {
  participationBtn.addEventListener("click", investContainerOnToggle);
  back.map((b, i) => {
    b.addEventListener("click", (e) => {
      investContainer.classList.remove("on");
      // back.map((v) => {
      //   if (b === v) {
      //     investContainer.classList.remove("on");
      //   }
      // });
    });
  });
}
