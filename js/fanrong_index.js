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

      1260:{
        slidesPerView: 3,
        slidesPerGroup: 1,
      },
      501:{
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
    },
    spaceBetween: 50, // 这里定义间距的值
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
});
