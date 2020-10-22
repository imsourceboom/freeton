import { throttling } from "../function";

export const listHeight = () => {
  const walletSection = document.querySelector("section#wallet");

  if (walletSection !== null) {
    const header = document.querySelector("body > header");
    const topContainer = document.querySelector(
      "section#wallet > .top-container"
    );
    const tab = document.querySelector("section#wallet > ul.tab");
    const transactionList = document.querySelector(
      "section#wallet > .transaction-list"
    );

    let style = getComputedStyle(topContainer).marginTop;
    let topContainerMarginHeight = parseInt(
      style.substring(0, style.length - 2)
    );

    const listHeight =
      window.innerHeight -
      (header.clientHeight +
        topContainer.clientHeight +
        topContainerMarginHeight +
        tab.clientHeight);

    transactionList.style.minHeight = `${listHeight}px`;
  }
};

// listHeight();

window.addEventListener("resize", throttling(listHeight, 10));
