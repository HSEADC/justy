/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
var body = document.getElementsByTagName('body');
var cancel = document.getElementById('cancel');
var menuMobile = document.getElementsByClassName('menu-mobile');
var menuMobileAbove = document.getElementsByClassName('menu-mobile-above');
menuMobile[0].addEventListener('click', function () {
  body[0].style.overflow = 'hidden';
  menuMobileAbove[0].style.display = 'block';
});
cancel.addEventListener('click', function () {
  body[0].style.overflow = 'auto';
  menuMobileAbove[0].style.display = 'none';
});
/******/ })()
;