$(document).ready(function () {
  if ($(".card-block").length > 0) {
    const swiperProductSmall = new Swiper(".slider-small-slider", {
      slidesPerView: 4,
      spaceBetween: 12,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 12,
        },
        390: {
          slidesPerView: 4,
          spaceBetween: 12,
        },
      },
    });

    const swiperProductBig = new Swiper(".slider-big-slider", {
      slidesPerView: 1,
      navigation: {
        nextEl: ".slider-small-slider__wrap .swiper-button-next",
        prevEl: ".slider-small-slider__wrap .swiper-button-prev",
      },
      thumbs: {
        swiper: swiperProductSmall,
      },
    });
  }
});
