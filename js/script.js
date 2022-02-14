"use strict";

new Swiper(".motivation__swiper", {
  loop: true,
  slidesPerView: 1,
  speed: 700,
  spaceBetween: 90,
  loopedSlides: 3,
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    hideOnClick: !0
  }
});

const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".burger__menu");

if (iconMenu) {
  iconMenu.addEventListener("click", function(e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}

// window.addEventListener("click", e => {
//   const target = document.querySelector("._lock");
//   console.log(target);
//   if (target) {
//     menuBody.classList.remove("_active");
//     iconMenu.classList.remove("_active");
//   }
// });
