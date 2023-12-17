/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

var folder = document.getElementsByClassName('cont-wrapper');
var blade_1 = document.getElementsByClassName('first-fold');
var blade_2 = document.getElementsByClassName('second-fold');
var blade_3 = document.getElementsByClassName('third-fold');
var blade_4 = document.getElementsByClassName('fourth-fold');
var header = document.getElementsByClassName('verticle');
var slides = Array.from(header[0].querySelectorAll('img'));
var slideCount = slides.length;
var whalf = 627 / 2;
var slideIndex = 0;
header[0].addEventListener('mousemove', function (e) {
  if (e.pageX - 109 < whalf) {
    header[0].removeEventListener('click', showNextSlide);
    header[0].classList.remove('right');
    header[0].classList.add('left');
    header[0].addEventListener('click', showPreviousSlide);
  } else {
    header[0].removeEventListener('click', showPreviousSlide);
    header[0].classList.remove('left');
    header[0].classList.add('right');
    header[0].addEventListener('click', showNextSlide);
  }
});

function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

function updateSlider() {
  slides.forEach(function (slide, index) {
    if (index === slideIndex) {
      slide.style.opacity = '1';
    } else {
      slide.style.opacity = '0';
    }
  });
}

updateSlider();

var _loop = function _loop(i) {
  folder[i].addEventListener('mouseenter', function () {
    blade_4[i].style.transform = 'rotateX(-35deg)';
    blade_3[i].style.transform = 'rotateX(-25deg)';
    blade_2[i].style.transform = 'rotateX(-15deg)';
    blade_1[i].style.transform = 'rotateX(-5deg)';
  });
  folder[i].addEventListener('mouseleave', function () {
    blade_4[i].style.transform = 'rotateX(0deg)';
    blade_3[i].style.transform = 'rotateX(0deg)';
    blade_2[i].style.transform = 'rotateX(0deg)';
    blade_1[i].style.transform = 'rotateX(0deg)';
  });
};

for (var i = 0; i < folder.length; i++) {
  _loop(i);
}
/******/ })()
;