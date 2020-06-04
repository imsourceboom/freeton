const withdrawBtn = document.querySelector("#home ul.tab > li.withdraw-btn");
const stakingBtn = document.querySelector("#home ul.tab > li.staking-btn");
const sendContainer = document.querySelector("#home > .send-container");
const stakingContainer = document.querySelector("#home > .staking-container");
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

if (sendContainer !== null) {
  withdrawBtn.addEventListener("click", sendContainerOnToggle);
  back.map((b) => {
    b.addEventListener("click", (e) => {
      back.map((v) => {
        if (b === v) {
          sendContainer.classList.remove("on");
        }
      });
    });
  });
}

if (stakingContainer !== null) {
  stakingBtn.addEventListener("click", stakingContainerOnToggle);
  back.map((b) => {
    b.addEventListener("click", (e) => {
      back.map((v) => {
        if (b === v) {
          stakingContainer.classList.remove("on");
        }
      });
    });
  });
}
