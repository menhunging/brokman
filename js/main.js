let observer = () => {};

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

  if ($(".video__play").length > 0) {
    $(".video__play").on("click", function () {
      let self = $(this);

      if ($(this).parents(".video-block").find("video").length > 0) {
        let elem = $(this).parents(".video-block").find("video");
        self.toggleClass("paused");
        $(this).parents(".video-block").toggleClass("play");
        self.hasClass("paused") ? elem.trigger("play") : elem.trigger("pause");
      }
    });
  }

  if ($(".slider-projects").length > 0) {
    const sliders = document.querySelectorAll(".slider-projects");
    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        if (!slider.swiper) {
          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 2.4,
            spaceBetween: 16,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            breakpoints: {
              0: {
                slidesPerView: 1.15,
                spaceBetween: 18,
              },
              480: {
                slidesPerView: 1.75,
                spaceBetween: 18,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 12,
              },
              1280: {
                slidesPerView: 2.4,
                spaceBetween: 16,
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

  if ($(".index-slider-catalog").length > 0) {
    if ($(window).width() < 1024) {
      initCatalogIndexPage();
    }
  }

  if ($(".slider-catalog").length > 0) {
    const sliders = document.querySelectorAll(".slider-catalog");
    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        if (!slider.swiper) {
          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 3,
            spaceBetween: 20,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            breakpoints: {
              0: {
                slidesPerView: 1.25,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 16,
              },

              1280: {
                slidesPerView: 3,
                spaceBetween: 20,
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
});

$(window).resize(function () {
  if ($(".index-slider-catalog").length > 0) {
    if ($(window).width() < 1024) {
      initCatalogIndexPage();
    } else {
      observer();
    }
  }
});

$(window).scroll(function () {
  if ($(window).scrollTop() > 0) {
    $(".header").addClass("header--fixed");
  } else {
    $(".header").removeClass("header--fixed");
  }
});

$(window).on("load", function () {
  if ($(".map-block").length > 0) {
    setTimeout(() => ymapsLoad(), 500);
    setTimeout(() => ymaps.ready(init), 1000);
  }

  function ymapsLoad() {
    var script = document.createElement("script");
    script.src =
      "https://api-maps.yandex.ru/2.1/?apikey=0cec76e1-1847-46ed-a96a-c84c0917f2ad&lang=ru_RU";
    document.getElementsByTagName("head")[0].appendChild(script);
  }

  function init() {
    var myMap = new ymaps.Map("map", {
      center: [55.886521, 37.4368],
      zoom: 15,
      controls: false,
    });

    myMap.controls.remove("searchControl");

    var myPlacemark = new ymaps.Placemark(
      [55.886521, 37.4368],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "../../img/svg/location.svg",
        // iconImageSize: [40, 40],
        // iconImageOffset: [-20, -20],
      }
    );

    myMap.geoObjects.add(myPlacemark);
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

function initCatalogIndexPage() {
  if ($(".index-slider-catalog").hasClass("init")) return false;

  $(".index-slider-catalog").addClass("init");

  const swiper = new Swiper(".index-slider-catalog", {
    slidesPerView: 2.4,
    spaceBetween: 16,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      320: {
        slidesPerView: 1.25,
        spaceBetween: 16,
        grid: {
          rows: 2,
          fill: "row",
        },
      },
      640: {
        slidesPerView: 2.5,
        spaceBetween: 16,
        grid: {
          rows: 2,
          fill: "row",
        },
      },
    },
  });

  let destroy = () => {
    if ($(".index-slider-catalog").hasClass("init")) {
      $(".index-slider-catalog").removeClass("init");

      swiper.destroy(true, true);
    }
  };

  observer = destroy;
}
