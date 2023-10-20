document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {

      1660:{
        slidesPerView: 3,
        slidesPerGroup: 1,
      },

      1366:{
        slidesPerView: 2,
        slidesPerGroup: 1,

      },
      769: {
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
    },
    spaceBetween: 100, // 这里定义间距的值
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
});
