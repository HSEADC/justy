/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
var viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

if (viewport_width > 912) {
  var watch = document.getElementById('watch');
  var show = document.getElementsByClassName('show');
  watch.addEventListener('mouseover', function () {
    show[0].style.display = 'inline-flex';
    show[0].classList.add('show-animation');
  });
  watch.addEventListener('mouseout', function () {
    show[0].style.display = 'none';
    show[0].classList.remove('show-animation');
  });
}
/******/ })()
;