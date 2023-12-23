/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
var heightOfViewport = window.innerHeight;
var fortyPercentOfViewport = heightOfViewport * 0.4;
window.addEventListener('scroll', function () {
  var watchedElement1 = document.getElementById('first-item');
  var watchedElement = document.getElementById('second-item');
  var watchedElement2 = document.getElementById('last-img');
  var colorChangedElement = document.getElementById('first');
  var colorChangedElement2 = document.getElementById('second');
  var colorChangedElement3 = document.getElementById('third');
  var targetHeight = fortyPercentOfViewport;
  var rect = watchedElement.getBoundingClientRect();
  var rect2 = watchedElement2.getBoundingClientRect();
  var rect3 = watchedElement1.getBoundingClientRect();

  if (rect3.top <= targetHeight) {
    colorChangedElement.classList.add('now');
  }

  if (rect.top <= targetHeight) {
    colorChangedElement2.classList.add('now');
    colorChangedElement.classList.remove('now');
  } else {
    colorChangedElement2.classList.remove('now');
  }

  if (rect2.top <= targetHeight) {
    colorChangedElement3.classList.add('now');
    colorChangedElement2.classList.remove('now');
  } else {
    colorChangedElement3.classList.remove('now');
  }
});
var header = document.getElementById('last-img');
console.log(header);
var slides = Array.from(header.querySelectorAll('img'));
var slideCount = slides.length;
var picture = 60.741 * window.screen.width / 100;
var whalf = picture / 2;
var slideIndex = 0;
var minus = 19.63 * window.screen.width / 100;
header.addEventListener('mousemove', function (e) {
  if (e.pageX - minus < whalf) {
    header.removeEventListener('click', showNextSlide);
    header.classList.remove('right');
    header.classList.add('left');
    header.addEventListener('click', showPreviousSlide);
  } else {
    header.removeEventListener('click', showPreviousSlide);
    header.classList.remove('left');
    header.classList.add('right');
    header.addEventListener('click', showNextSlide);
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
/******/ })()
;