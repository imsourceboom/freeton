export const hideHeaderAndFooter = () => {
  document.body.classList.add("load-and-inspect");
};

export const showHeaderAndFooter = () => {
  document.body.classList.remove("load-and-inspect");
};
