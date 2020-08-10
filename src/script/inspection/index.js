import { hideHeaderAndFooter } from "../hideHeaderAndFooter";

export const inpection = () => {
  const inspectSection = document.getElementById("inspection");

  if (inspectSection !== null) {
    hideHeaderAndFooter();
  }
};

inpection();
