/*================ 
Template Name: Dzine
Description: Dzine - Modern Design Service Agency HTML Template
Version: 1.0 
Author: https://www.templatemonster.com/authors/techeshta
=======================*/


// Table Of Content

// 01. Auto Count Number JS

/* -----------------------------------------------------
  01. Auto Count Number JS
----------------------------------------------------- */
$(document).ready(function () {
    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 9000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});