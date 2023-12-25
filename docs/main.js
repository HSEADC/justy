/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
function handleIntersect(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      target2.classList.add('animate-on-view');
    }
  });
}

var options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.7
};
var observer = new IntersectionObserver(handleIntersect, options);
var target = document.querySelector('.anim-tag');
var target2 = document.querySelector('.second-round');
observer.observe(target);
var heightOfViewport = window.innerHeight;
var fortyPercentOfViewport = heightOfViewport * 0.7;
window.addEventListener('scroll', function () {
  var firstCard = document.getElementById('card1');
  var secondCard = document.getElementById('card3');
  var watchedElement = document.getElementsByClassName('cards');
  var targetHeight = fortyPercentOfViewport;
  var rect = watchedElement[0].getBoundingClientRect();

  if (rect.top <= targetHeight) {
    firstCard.classList.add('animation-left');
    secondCard.classList.add('animation-right');
  }
});
/******/ })()
;