export function hamburger() {
  const header = document.querySelector("body > header");
  const hamburger = document.querySelector(".hamburger");
  const mobileNavBack = document.querySelector(".mobile-nav-back");
  const mobileNav = document.querySelector(".mobile-nav");
  const close = document.querySelector(".mobile-nav .close");
  const mobileMenu = Array.from(document.querySelectorAll(".mobile-nav ul li"));

  if (header !== null) {
    const trigger = (e) => {
      mobileNav.classList.toggle("active");
      mobileNavBack.classList.toggle("active");
    };

    hamburger.addEventListener("click", trigger);
    close.addEventListener("click", trigger);
    mobileMenu.map((menu) => {
      menu.addEventListener("click", trigger);
    });
  }
}

hamburger();
