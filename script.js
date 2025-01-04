$(document).ready(function () {
  $("#hamburger").on("click", function () {
    $("#mobNav").toggleClass("scale-0");
    $("body").toggleClass("overflow-hidden");
  });

  $(".slick.marquee").slick({
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: false,
    cssEase: "linear",
    slidesToShow: 1,
    draggable: false,
    focusOnSelect: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
  });
  $(".clickbtn").click(function () {
    let tabID = $(this).attr("data-tab");

    $(this).addClass("active").siblings().removeClass("active");

    $("#tab" + tabID)
      .removeClass("hidden")
      .siblings()
      .addClass("hidden");
  });

  $(".accordian-btn").on("click", function () {
    if ($(this).next().hasClass("hidden")) {
      $(".content").addClass("hidden");
      $(this).next().removeClass("hidden");
      $(".plus-icon").removeClass("fa-minus").addClass("fa-plus");
      $(this).find(".plus-icon").removeClass("fa-plus").addClass("fa-minus");
    } else {
      $(this).next().addClass("hidden");
      $(this).find(".plus-icon").removeClass("fa-minus").addClass("fa-plus");
    }
  });

  $(".services").click(function () {
    let toshow = $(this).attr("data-toshow");
    if ($("#toshow-" + toshow).hasClass("hidden")) {
      $(this).addClass("nav-active").siblings().removeClass("nav-active");
      $(".megamenu").addClass("hidden");
      $("#toshow-" + toshow).removeClass("hidden");
    } else {
      $(".megamenu").addClass("hidden");
      $(this).removeClass("nav-active");
    }
  });

  // $(".industries").click(function () {
  //   if ($(this).hasClass("hidden")) {
  //     $(".drop-menu").addClass("hidden");
  //     $(this).removeClass(hidden);
  //     $(this).find(".arrow").addClass(".rotateY(180deg)");
  //   } else {
  //   }
  // });

  $(".industries").on("click", function () {
    let todown = $(this).attr("data-todown");
    console.log(todown);
    if ($("#todown-" + todown).hasClass("hidden")) {
      $(".drop-menu").addClass("hidden");
      $("#todown-" + todown).removeClass("hidden");
      // $(".plus-icon").removeClass("fa-minus").addClass("fa-plus");
      // $(this).find(".plus-icon").removeClass("fa-plus").addClass("fa-minus");
    } else {
      $(".drop-menu").addClass("hidden");
      // $(this).find(".plus-icon").removeClass("fa-minus").addClass("fa-plus");
    }
  });

  $(".single-slider ").slick({
    dots: false,
    infinite: false,
    speed: 200,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
    autoplay: false,
  });
  $(".slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    focusOnSelect: true,
    prevArrow: $(".portfolio-prev"),
    nextArrow: $(".portfolio-next"),
  });
});
