import Swiper, { Navigation } from "swiper";

export function carousel() {
  Swiper.use([Navigation]);

  const home = document.querySelector("section#home");

  if (home !== null) {
    new Swiper(".swiper-container", {
      slidesPerView: "auto",
      // spaceBetween: 10,
      centeredSlides: true,
      loop: true,
      navigation: {
        prevEl: ".carousel-button-prev",
        nextEl: ".carousel-button-next",
      },
    });
  }
}

carousel();
