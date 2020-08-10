export const hideHeaderAndFooter = () => {
  const header = document.querySelector("body > header");
  const footer = document.querySelector("body > footer");

  header.style.display = "none";
  footer.style.display = "none";
};
