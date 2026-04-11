/*================ 
Template Name: Dzine
Description: Dzine - Modern Design Service Agency HTML Template
Version: 1.0 
Author: https://www.templatemonster.com/authors/techeshta
=======================*/


// Table Of Content

// 01. Slider JS

/* -----------------------------------------------------
    01. Slider JS
----------------------------------------------------- */
$(document).ready(function () {
    var swiper = new Swiper(".companySwiper", {
        slidesPerView: 4,
        spaceBetween: 70,
        autoplay: true,
        speed: 2000,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            992: {
                slidesPerView: 4,
                spaceBetween: 70,
            },
            520: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            420: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 2,
                spaceBetween: 30,
            }
        }
    });
});