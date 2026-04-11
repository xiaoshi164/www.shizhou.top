/*================ 
Template Name: Dzine
Description: Dzine - Modern Design Service Agency HTML Template
Version: 1.0 
Author: https://www.templatemonster.com/authors/techeshta
=======================*/


// Table Of Content

// 01. Fixed Header JS
// 02. Active Link Page JS
// 03. Animation JS

/* -----------------------------------------------------
    01. Fixed Header JS
----------------------------------------------------- */
$(document).ready(function () {
  headerFixed();
});
$(document).on('scroll', function () {
  headerFixed();
});
function headerFixed() {
  if ($(window).scrollTop() >= 30) {
    $('header').addClass('sticky-menu');
  } else {
    $('header').removeClass('sticky-menu');
  }

  if ($(window).scrollTop() >= 600) {
    $('header').addClass('sticky-header');
  } else {
    $('header').removeClass('sticky-header');
  }
}


/* -----------------------------------------------------
    02. Active Link Page JS
----------------------------------------------------- */
$(document).ready(function () {
  $(".tabActive a").click(function () {
    $(".tabActive a").removeClass("active");
    $(this).addClass("active");
  });
  $(function () {
    var path = window.location.href;
    var pop = [];
    $('.tabActive a').each(function () {
      var anchor = $(this).prop('href').split("/").pop();
      pop.push(anchor);
      var href = this.href.replace(".html", "").replace(".php", "");
      var navPath = path.replace(".html", "").replace(".php", "");
      if (href === navPath) {
        $(this).addClass('active');
      }
    });
    var anchor = $('.tabActive a[href*="' + pop[0] + '"]');
    if (path.split('/').pop() == "") {
      $(anchor).addClass("active")
    }
  });
});


/* -----------------------------------------------------
  03. Animation JS
----------------------------------------------------- */
$(document).ready(function () {
  new WOW().init();
});
