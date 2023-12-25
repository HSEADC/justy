/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
var heightOfViewport = window.innerHeight;
var fortyPercentOfViewport = heightOfViewport * 0.4;
window.addEventListener('scroll', function () {
  var watchedElement1 = document.getElementById('first-item');
  var watchedElement = document.getElementById('second-item');
  var watchedElement2 = document.getElementById('third-item');
  var watchedElement3 = document.getElementById('fourth-item');
  var watchedElement4 = document.getElementById('fifth-item');
  var watchedElement5 = document.getElementById('sixth-item');
  var watchedElement6 = document.getElementById('seventh-item');
  var watchedElement7 = document.getElementById('eighth-item');
  var colorChangedElement = document.getElementById('first');
  var colorChangedElement2 = document.getElementById('second');
  var colorChangedElement3 = document.getElementById('third');
  var colorChangedElement4 = document.getElementById('fourth');
  var colorChangedElement5 = document.getElementById('fifth');
  var colorChangedElement6 = document.getElementById('sixth');
  var colorChangedElement7 = document.getElementById('seventh');
  var colorChangedElement8 = document.getElementById('eighth');
  var targetHeight = fortyPercentOfViewport;
  var rect = watchedElement.getBoundingClientRect();
  var rect2 = watchedElement2.getBoundingClientRect();
  var rect3 = watchedElement1.getBoundingClientRect();
  var rect4 = watchedElement3.getBoundingClientRect();
  var rect5 = watchedElement4.getBoundingClientRect();
  var rect6 = watchedElement5.getBoundingClientRect();
  var rect7 = watchedElement6.getBoundingClientRect();
  var rect8 = watchedElement7.getBoundingClientRect();

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

  if (rect5.top <= targetHeight) {
    console.log('fcweverv');
    colorChangedElement5.classList.add('now');
    colorChangedElement4.classList.remove('now');
  } else {
    colorChangedElement5.classList.remove('now');
  }

  if (rect6.top <= targetHeight) {
    colorChangedElement6.classList.add('now');
    colorChangedElement5.classList.remove('now');
  } else {
    colorChangedElement6.classList.remove('now');
  }

  if (rect7.top <= targetHeight) {
    colorChangedElement7.classList.add('now');
    colorChangedElement6.classList.remove('now');
  } else {
    colorChangedElement7.classList.remove('now');
  }

  if (rect8.top <= targetHeight) {
    colorChangedElement8.classList.add('now');
    colorChangedElement7.classList.remove('now');
  } else {
    colorChangedElement8.classList.remove('now');
  }
});
/******/ })()
;