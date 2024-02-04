$(document).ready(function () {
  if ($(".burger").length > 0) {
    let menu = $(".menu");
    let burger = $(".burger");

    burger.on("click", function () {
      $(this).toggleClass("burger--opened");
      menu.stop().slideToggle();
    });
  }

  if ($(".thisYear").length > 0) {
    let date = new Date();
    $(".thisYear").text(date.getFullYear());
  }

  if ($("select").length > 0) {
    $("select").map(function () {
      $(this).selectric({
        onOpen: function (element) {},
        onChange: function (element) {},
        onClose: function (element) {},
      });
    });
  }

  if ($(".phone-input").length > 0) {
    $(".phone-input").map(function () {
      $(this).inputmask({
        mask: "+7(999) 999-99-99",
        placeholder: "*",
        showMaskOnHover: false,
        showMaskOnFocus: true,
        clearIncomplete: true,
      });
    });
  }

  if ($("[data-fancybox]").length > 0) {
    Fancybox.bind("[data-fancybox]", {
      speedIn: 600,
      speedOut: 600,
    });
  }

  if ($(".tabs").length > 0) {
    $(".tabs").tabslet({
      mouseevent: "click",
      attribute: "href",
      animation: true,
    });
  }

  if ($(".modal").length > 0) {
    MicroModal.init({
      openTrigger: "data-modal",
      disableScroll: true,
      awaitOpenAnimation: true,
      awaitCloseAnimation: true,

      onShow: () => {
        $("body").addClass("modal-open");
      },

      onClose: () => {
        $("body").removeClass("modal-open");
      },
    });

    $("[data-modal]").map(function () {
      $(this).click((e) => e.preventDefault());
    });
  }

  if ($(".slider-catalog").length > 0) {
    const sliders = document.querySelectorAll(".slider-catalog");
    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        if (!slider.swiper) {
          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 4,
            spaceBetween: 50,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                grid: {
                  rows: 1,
                  fill: "row",
                },
                spaceBetween: 10,
              },
              390: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                grid: {
                  rows: 2,
                  fill: "row",
                },
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                grid: {
                  rows: 2,
                  fill: "row",
                },
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
                grid: {
                  rows: 1,
                  fill: "row",
                },
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 30,
                grid: {
                  rows: 1,
                  fill: "row",
                },
              },
              1500: {
                slidesPerView: 4,
                spaceBetween: 50,
                grid: {
                  rows: 1,
                  fill: "row",
                },
              },
            },
          });
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();
  }

  $(".video__play").on("click", function () {
    let self = $(this);
    let parents = self.parents(".video-block");

    if ($(this).parents(".video-block").find("video").length > 0) {
      let elem = $(this).parents(".video-block").find("video");
      self.toggleClass("paused");
      $(this).parents(".video-block").toggleClass("play");
      self.hasClass("paused") ? elem.trigger("play") : elem.trigger("pause");
    }
  });
});

$(window).resize(function () {});

$(window).scroll(function () {
  if ($(window).scrollTop() > 0) {
    $(".header").addClass("header--fixed");
  } else {
    $(".header").removeClass("header--fixed");
  }
});

function openModal(modal) {
  MicroModal.show(modal);
  $(".modal__close").on("click", function () {
    closeModal(modal);
  });
  $("body").addClass("modal-open");
}

function closeModal(modal) {
  MicroModal.close(modal);
  $("body").removeClass("modal-open");
}
