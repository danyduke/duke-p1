const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");
const header = document.querySelector("header");
const bars = document.querySelectorAll(".menu-hamburger div");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
  bars.forEach((bar) => {
    if (!menuHamburger.classList.contains("change")) {
      bar.classList.toggle("burgerBlack", window.scrollY > 0);
    }
  });
});

menuHamburger.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
});

function myFunction(x) {
  x.classList.toggle("change");
  bars.forEach((bar) => {
    if (x.classList.contains("change")) {
      bar.classList.toggle("burgerBlack", false);
    } else {
      bar.classList.toggle("burgerBlack", window.scrollY > 0);
    }
  });
}
