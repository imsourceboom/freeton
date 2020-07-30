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
    const listHeight =
      window.innerHeight -
      (header.clientHeight + topContainer.clientHeight + 30 + tab.clientHeight);

    transactionList.style.minHeight = `${listHeight}px`;
  }
};

listHeight();
