/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

var folder = document.getElementsByClassName('cont-wrapper');
var blade_1 = document.getElementsByClassName('first-fold');
var blade_2 = document.getElementsByClassName('second-fold');
var blade_3 = document.getElementsByClassName('third-fold');
var blade_4 = document.getElementsByClassName('fourth-fold');

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