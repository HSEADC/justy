/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
var heightOfViewport = window.innerHeight;
var fortyPercentOfViewport = heightOfViewport * 0.4;
window.addEventListener('scroll', function () {
  var watchedElement1 = document.getElementById('first-item');
  var watchedElement = document.getElementById('second-item');
  var watchedElement2 = document.getElementById('third-item');
  var watchedElement3 = document.getElementById('fourth-item');
  var colorChangedElement = document.getElementById('first');
  var colorChangedElement2 = document.getElementById('second');
  var colorChangedElement3 = document.getElementById('third');
  var colorChangedElement4 = document.getElementById('fourth');
  var targetHeight = fortyPercentOfViewport;
  var rect = watchedElement.getBoundingClientRect();
  var rect2 = watchedElement2.getBoundingClientRect();
  var rect3 = watchedElement1.getBoundingClientRect();
  var rect4 = watchedElement3.getBoundingClientRect();

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

  if (rect4.top <= targetHeight) {
    colorChangedElement4.classList.add('now');
    colorChangedElement3.classList.remove('now');
  } else {
    colorChangedElement4.classList.remove('now');
  }
});
/******/ })()
;