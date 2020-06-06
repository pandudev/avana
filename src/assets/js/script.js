// Script Here
window.$ = window.jQuery = require("jquery");

function reset() {
  $(".mobile-menu").removeClass("show");
  $(".navbar__hamburger").removeClass("active");
  $("body").removeClass("fixed");
}

function resize() {
  var width = $(window).width();
  if (width < 768) {
    $("#contact__span").text("di bawah");
    $(".navbar__nav").hide();
    $(".navbar__hamburger").show();
  } else {
    $(".navbar__nav").show();
    $(".navbar__hamburger").hide();
    $("#contact__span").text("di samping");
    reset();
  }
}

resize();

$(document).ready(function () {
  reset();
  $(window).resize(() => {
    resize();
  });
  $(".faq__item__question").click(function () {
    $(this).children(".faq__item__toggle").toggleClass("active");
    $(this).siblings(".faq__item__answer").slideToggle();
    $(".faq__item__answer")
      .not($(this).siblings(".faq__item__answer"))
      .slideUp();
    $(".faq__item__toggle")
      .not($(this).children(".faq__item__toggle"))
      .removeClass("active");
  });

  $(".navbar__hamburger").click(function () {
    $(".mobile-menu").toggleClass("show");
    $(".navbar__hamburger").toggleClass("active");
    $("body").toggleClass("fixed");
  });
});
