/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
var heightOfViewport = window.innerHeight;
var fortyPercentOfViewport = heightOfViewport * 0.6;
window.addEventListener('scroll', function () {
  var firstCard = document.getElementById('card3');
  var secondCard = document.getElementById('card4');
  var watchedElement = document.getElementsByClassName('cards');
  var targetHeight = fortyPercentOfViewport;
  var rect = watchedElement[0].getBoundingClientRect();

  if (rect.top <= targetHeight) {
    firstCard.classList.add('movedown');
    secondCard.classList.add('movedown');
  }
});
/******/ })()
;