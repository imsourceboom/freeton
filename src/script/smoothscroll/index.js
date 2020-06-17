import SmoothScroll from "smooth-scroll";
import { swup } from "../swup";

function scroll() {
  new SmoothScroll('a[href*="#"]', {
    speed: 300,
    speedAsDuration: true,
  });
}

scroll();

swup.on("contentReplaced", scroll);
