// Script Here
window.$ = window.jQuery = require("jquery");

$(".faq__item__answer").first().show();

$(document).ready(function () {
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
});
