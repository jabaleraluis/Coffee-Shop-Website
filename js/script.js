const sections = document.querySelectorAll("section[id]");
const menuOpenBtn = document.querySelector("#menu-open-btn");
const menuCloseBtn = document.querySelector("#menu-close-btn");
const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const topBtn = document.querySelector(".top-button");

menuOpenBtn.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

menuCloseBtn.addEventListener("click", () => menuOpenBtn.click());

navLinks.forEach((link) => {
  link.addEventListener("click", () => menuOpenBtn.click());
});

const scrollActivate = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 250,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(".nav-menu .nav-item a[href*=" + sectionId + "]");

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", () => {
  scrollActivate();

  window.scrollY >= 500 ? topBtn.classList.add("show") : topBtn.classList.remove("show");
});

//! Initialize Swiper
const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

//! Scroll reveal
const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 800,
  delay: 150,
  reset: true,
});

scrollY === 0 && window.innerWidth >= 900
  ? sr.reveal("nav .nav-logo, nav ul li", { reset: false, interval: 50 })
  : sr.clean("nav");

sr.reveal(".section-title, .item-sr, .slider-wrapper", { interval: 100 });
sr.reveal(".hero-details, .about-image-wrapper, .contact-info-list", { origin: "left" });
sr.reveal(".hero-image-wrapper, .about-details, .contact-form", { origin: "right" });
sr.reveal("footer .social-link-list, footer .copyright-text, footer .policy-text", {
  origin: "bottom",
  interval: 100,
});
