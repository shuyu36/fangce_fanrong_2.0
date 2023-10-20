document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      769: {
        slidesPerView: 3,
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
