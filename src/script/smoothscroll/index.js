import SmoothScroll from "smooth-scroll";

export function scroll() {
  new SmoothScroll('a[href*="#"]', {
    speed: 300,
    speedAsDuration: true,
  });
}

scroll();
