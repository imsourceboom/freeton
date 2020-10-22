// export const hideHeaderAndFooter = () => {
let section = document.querySelector("main > section");
let sectionID = section.getAttribute("id");

switch (sectionID) {
  case "inspection":
  case "loading":
    document.body.classList.add("load-and-inspect");
    break;

  default:
    document.body.classList.remove("load-and-inspect");
    break;
}
// };

// hideHeaderAndFooter();
