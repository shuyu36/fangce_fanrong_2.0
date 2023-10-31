document.addEventListener("DOMContentLoaded", function () {
  AOS.init();

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      1660: {
        slidesPerView: 4,
        slidesPerGroup: 1,
      },

      1266: {
        slidesPerView: 3,
        slidesPerGroup: 1,
      },

      769: {
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
    },
    spaceBetween: 20, // 这里定义间距的值
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
