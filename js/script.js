"use strict";

new Swiper(".motivation__swiper", {
  loop: true,
  slidesPerView: 1,
  speed: 700,
  spaceBetween: 90,
  loopedSlides: 3,
  autoplay: {
    delay: 3000
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
