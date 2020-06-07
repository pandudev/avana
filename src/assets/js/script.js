// Script Here
window.$ = window.jQuery = require("jquery");

function reset() {
  $(".mobile-menu").removeClass("show");
  $(".navbar__hamburger").removeClass("active");
  $("body").removeClass("fixed");
}

function resize() {
  var width = $(window).width();
  if (width > 1200) {
    $(".navbar__nav").show();
    $(".navbar__hamburger").hide();
    $("#contact__span").text("di samping");
  } else if (width > 992) {
    $(".navbar__nav").show();
    $(".navbar__hamburger").hide();
    $("#contact__span").text("di samping");
  } else if (width > 768) {
    $(".navbar__nav").hide();
    $(".navbar__hamburger").show();
    $("#contact__span").text("di samping");
  } else {
    $(".navbar__nav").hide();
    $(".navbar__hamburger").show();
    $("#contact__span").text("di bawah");
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
