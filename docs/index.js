/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
 // import * as THREE from 'three'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
// const canvas = document.querySelector('canvas.webgl')
// const scene = new THREE.Scene()
// const gltfLoader = new GLTFLoader()
// gltfLoader.load('models/Fox.gltf', (gltf) => {
//   gltf.scene.scale.set(0.025, 0.025, 0.025)
//   scene.add(gltf.scene)
// })
// const sizes = {
//   width: window.innerWidth,
//   height: window.innerHeight
// }
// window.addEventListener('resize', () => {
//   sizes.width = window.innerWidth
//   sizes.height = window.innerHeight
//   camera.aspect = sizes.width / sizes.height
//   camera.updateProjectionMatrix()
//   renderer.setSize(sizes.width, sizes.height)
//   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// })
// const camera = new THREE.PerspectiveCamera(
//   75,
//   sizes.width / sizes.height,
//   0.1,
//   100
// )
// camera.position.set(2, 2, 2)
// scene.add(camera)
// const renderer = new THREE.WebGLRenderer({
//   canvas: canvas
// })
// renderer.outputColorSpace = THREE.LinearSRGBColorSpace
// renderer.shadowMap.enabled = true
// renderer.shadowMap.type = THREE.PCFSoftShadowMap
// renderer.setSize(sizes.width, sizes.height)
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// const folder = document.getElementsByClassName('cont-wrapper')
// const blade_1 = document.getElementsByClassName('first-fold')
// const blade_2 = document.getElementsByClassName('second-fold')
// const blade_3 = document.getElementsByClassName('third-fold')
// const blade_4 = document.getElementsByClassName('fourth-fold')
// const header = document.getElementsByClassName('verticle')
// const slides = Array.from(header[0].querySelectorAll('img'))
// const slideCount = slides.length
// let whalf = 627 / 2
// let slideIndex = 0
// header[0].addEventListener('mousemove', function (e) {
//   if (e.pageX - 109 < whalf) {
//     header[0].removeEventListener('click', showNextSlide)
//     header[0].classList.remove('right')
//     header[0].classList.add('left')
//     header[0].addEventListener('click', showPreviousSlide)
//   } else {
//     header[0].removeEventListener('click', showPreviousSlide)
//     header[0].classList.remove('left')
//     header[0].classList.add('right')
//     header[0].addEventListener('click', showNextSlide)
//   }
// })
// function showPreviousSlide() {
//   slideIndex = (slideIndex - 1 + slideCount) % slideCount
//   updateSlider()
// }
// function showNextSlide() {
//   slideIndex = (slideIndex + 1) % slideCount
//   updateSlider()
// }
// function updateSlider() {
//   slides.forEach((slide, index) => {
//     if (index === slideIndex) {
//       slide.style.opacity = '1'
//     } else {
//       slide.style.opacity = '0'
//     }
//   })
// }
// updateSlider()
// for (let i = 0; i < folder.length; i++) {
//   folder[i].addEventListener('mouseenter', function () {
//     blade_4[i].style.transform = 'rotateX(-35deg)'
//     blade_3[i].style.transform = 'rotateX(-25deg)'
//     blade_2[i].style.transform = 'rotateX(-15deg)'
//     blade_1[i].style.transform = 'rotateX(-5deg)'
//   })
//   folder[i].addEventListener('mouseleave', function () {
//     blade_4[i].style.transform = 'rotateX(0deg)'
//     blade_3[i].style.transform = 'rotateX(0deg)'
//     blade_2[i].style.transform = 'rotateX(0deg)'
//     blade_1[i].style.transform = 'rotateX(0deg)'
//   })
// }
// const circle = document.querySelector('.second-round')
// let num = (180.511 * window.screen.width) / 100
// window.addEventListener('scroll', function () {
//   console.log(num)
//   console.log(scrollY)
//   if (scrollY >= num) {
//     console.log(circle.style.animation)
//     circle.style.animation = 'movetop .8s ease-out forwards'
//   }
// })
// console.log(window.scrollY)
// let num = (160.511 * window.screen.width) / 100
// let num2 = (731 / window.screen.width) * 100
// circle.style.marginTop = `${num2}vw`
// window.addEventListener('scroll', function () {
//   console.log(num)
//   console.log(scrollY)
//   if (scrollY >= num) {
//     window.addEventListener('wheel', onWheel)
//     // circle.style.marginTop = '17.704vw'
//   }
// })
// function onWheel(e) {
//   let circleMargin = circle.style.marginTop
//   console.log(circleMargin)
//   let delta = e.deltaY
//   let deltaVW = (delta / window.screen.width) * 100
//   let strMar = circleMargin.slice(0, -2)
//   let newValue = Number(strMar) - deltaVW
//   circle.style.marginTop = `${newValue}vw`
// }

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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0NDSkE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGVBQVQsQ0FBeUJDLE9BQXpCLEVBQWtDQyxRQUFsQyxFQUE0QztFQUMxQ0QsT0FBTyxDQUFDRSxPQUFSLENBQWdCLFVBQUNDLEtBQUQsRUFBVztJQUN6QixJQUFJQSxLQUFLLENBQUNDLGNBQVYsRUFBMEI7TUFDeEJDLE9BQU8sQ0FBQ0MsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsaUJBQXRCO0lBQ0Q7RUFDRixDQUpEO0FBS0Q7O0FBRUQsSUFBSUMsT0FBTyxHQUFHO0VBQ1pDLElBQUksRUFBRSxJQURNO0VBRVpDLFVBQVUsRUFBRSxLQUZBO0VBR1pDLFNBQVMsRUFBRTtBQUhDLENBQWQ7QUFNQSxJQUFJVixRQUFRLEdBQUcsSUFBSVcsb0JBQUosQ0FBeUJiLGVBQXpCLEVBQTBDUyxPQUExQyxDQUFmO0FBRUEsSUFBSUssTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBYjtBQUNBLElBQUlWLE9BQU8sR0FBR1MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGVBQXZCLENBQWQ7QUFFQWQsUUFBUSxDQUFDZSxPQUFULENBQWlCSCxNQUFqQixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFzZS8uL3NyYy9pbmRleC5jc3M/ODM5NiIsIndlYnBhY2s6Ly9iYXNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Jhc2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXNlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vaW5kZXguY3NzJ1xuXG4vLyBpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSdcblxuLy8gaW1wb3J0IHsgR0xURkxvYWRlciB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9sb2FkZXJzL0dMVEZMb2FkZXIuanMnXG5cbi8vIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcy53ZWJnbCcpXG5cbi8vIGNvbnN0IHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKClcblxuLy8gY29uc3QgZ2x0ZkxvYWRlciA9IG5ldyBHTFRGTG9hZGVyKClcblxuLy8gZ2x0ZkxvYWRlci5sb2FkKCdtb2RlbHMvRm94LmdsdGYnLCAoZ2x0ZikgPT4ge1xuLy8gICBnbHRmLnNjZW5lLnNjYWxlLnNldCgwLjAyNSwgMC4wMjUsIDAuMDI1KVxuLy8gICBzY2VuZS5hZGQoZ2x0Zi5zY2VuZSlcbi8vIH0pXG4vLyBjb25zdCBzaXplcyA9IHtcbi8vICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuLy8gICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodFxuLy8gfVxuXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuLy8gICBzaXplcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG4vLyAgIHNpemVzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxuXG4vLyAgIGNhbWVyYS5hc3BlY3QgPSBzaXplcy53aWR0aCAvIHNpemVzLmhlaWdodFxuLy8gICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpXG5cbi8vICAgcmVuZGVyZXIuc2V0U2l6ZShzaXplcy53aWR0aCwgc2l6ZXMuaGVpZ2h0KVxuLy8gICByZW5kZXJlci5zZXRQaXhlbFJhdGlvKE1hdGgubWluKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvLCAyKSlcbi8vIH0pXG5cbi8vIGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYShcbi8vICAgNzUsXG4vLyAgIHNpemVzLndpZHRoIC8gc2l6ZXMuaGVpZ2h0LFxuLy8gICAwLjEsXG4vLyAgIDEwMFxuLy8gKVxuLy8gY2FtZXJhLnBvc2l0aW9uLnNldCgyLCAyLCAyKVxuLy8gc2NlbmUuYWRkKGNhbWVyYSlcblxuLy8gY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XG4vLyAgIGNhbnZhczogY2FudmFzXG4vLyB9KVxuLy8gcmVuZGVyZXIub3V0cHV0Q29sb3JTcGFjZSA9IFRIUkVFLkxpbmVhclNSR0JDb2xvclNwYWNlXG4vLyByZW5kZXJlci5zaGFkb3dNYXAuZW5hYmxlZCA9IHRydWVcbi8vIHJlbmRlcmVyLnNoYWRvd01hcC50eXBlID0gVEhSRUUuUENGU29mdFNoYWRvd01hcFxuLy8gcmVuZGVyZXIuc2V0U2l6ZShzaXplcy53aWR0aCwgc2l6ZXMuaGVpZ2h0KVxuLy8gcmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyhNYXRoLm1pbih3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbywgMikpXG5cbi8vIGNvbnN0IGZvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NvbnQtd3JhcHBlcicpXG4vLyBjb25zdCBibGFkZV8xID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmlyc3QtZm9sZCcpXG4vLyBjb25zdCBibGFkZV8yID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2Vjb25kLWZvbGQnKVxuLy8gY29uc3QgYmxhZGVfMyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RoaXJkLWZvbGQnKVxuLy8gY29uc3QgYmxhZGVfNCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZvdXJ0aC1mb2xkJylcblxuLy8gY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndmVydGljbGUnKVxuLy8gY29uc3Qgc2xpZGVzID0gQXJyYXkuZnJvbShoZWFkZXJbMF0ucXVlcnlTZWxlY3RvckFsbCgnaW1nJykpXG4vLyBjb25zdCBzbGlkZUNvdW50ID0gc2xpZGVzLmxlbmd0aFxuLy8gbGV0IHdoYWxmID0gNjI3IC8gMlxuLy8gbGV0IHNsaWRlSW5kZXggPSAwXG5cbi8vIGhlYWRlclswXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmdW5jdGlvbiAoZSkge1xuLy8gICBpZiAoZS5wYWdlWCAtIDEwOSA8IHdoYWxmKSB7XG4vLyAgICAgaGVhZGVyWzBdLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd05leHRTbGlkZSlcbi8vICAgICBoZWFkZXJbMF0uY2xhc3NMaXN0LnJlbW92ZSgncmlnaHQnKVxuLy8gICAgIGhlYWRlclswXS5jbGFzc0xpc3QuYWRkKCdsZWZ0Jylcbi8vICAgICBoZWFkZXJbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93UHJldmlvdXNTbGlkZSlcbi8vICAgfSBlbHNlIHtcbi8vICAgICBoZWFkZXJbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93UHJldmlvdXNTbGlkZSlcbi8vICAgICBoZWFkZXJbMF0uY2xhc3NMaXN0LnJlbW92ZSgnbGVmdCcpXG4vLyAgICAgaGVhZGVyWzBdLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0Jylcbi8vICAgICBoZWFkZXJbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93TmV4dFNsaWRlKVxuLy8gICB9XG4vLyB9KVxuXG4vLyBmdW5jdGlvbiBzaG93UHJldmlvdXNTbGlkZSgpIHtcbi8vICAgc2xpZGVJbmRleCA9IChzbGlkZUluZGV4IC0gMSArIHNsaWRlQ291bnQpICUgc2xpZGVDb3VudFxuLy8gICB1cGRhdGVTbGlkZXIoKVxuLy8gfVxuLy8gZnVuY3Rpb24gc2hvd05leHRTbGlkZSgpIHtcbi8vICAgc2xpZGVJbmRleCA9IChzbGlkZUluZGV4ICsgMSkgJSBzbGlkZUNvdW50XG4vLyAgIHVwZGF0ZVNsaWRlcigpXG4vLyB9XG4vLyBmdW5jdGlvbiB1cGRhdGVTbGlkZXIoKSB7XG4vLyAgIHNsaWRlcy5mb3JFYWNoKChzbGlkZSwgaW5kZXgpID0+IHtcbi8vICAgICBpZiAoaW5kZXggPT09IHNsaWRlSW5kZXgpIHtcbi8vICAgICAgIHNsaWRlLnN0eWxlLm9wYWNpdHkgPSAnMSdcbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgc2xpZGUuc3R5bGUub3BhY2l0eSA9ICcwJ1xuLy8gICAgIH1cbi8vICAgfSlcbi8vIH1cblxuLy8gdXBkYXRlU2xpZGVyKClcblxuLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBmb2xkZXIubGVuZ3RoOyBpKyspIHtcbi8vICAgZm9sZGVyW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoKSB7XG4vLyAgICAgYmxhZGVfNFtpXS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlWCgtMzVkZWcpJ1xuLy8gICAgIGJsYWRlXzNbaV0uc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZVgoLTI1ZGVnKSdcbi8vICAgICBibGFkZV8yW2ldLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGVYKC0xNWRlZyknXG4vLyAgICAgYmxhZGVfMVtpXS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlWCgtNWRlZyknXG4vLyAgIH0pXG4vLyAgIGZvbGRlcltpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xuLy8gICAgIGJsYWRlXzRbaV0uc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZVgoMGRlZyknXG4vLyAgICAgYmxhZGVfM1tpXS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlWCgwZGVnKSdcbi8vICAgICBibGFkZV8yW2ldLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGVYKDBkZWcpJ1xuLy8gICAgIGJsYWRlXzFbaV0uc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZVgoMGRlZyknXG4vLyAgIH0pXG4vLyB9XG5cbi8vIGNvbnN0IGNpcmNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWNvbmQtcm91bmQnKVxuLy8gbGV0IG51bSA9ICgxODAuNTExICogd2luZG93LnNjcmVlbi53aWR0aCkgLyAxMDBcbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XG4vLyAgIGNvbnNvbGUubG9nKG51bSlcbi8vICAgY29uc29sZS5sb2coc2Nyb2xsWSlcbi8vICAgaWYgKHNjcm9sbFkgPj0gbnVtKSB7XG4vLyAgICAgY29uc29sZS5sb2coY2lyY2xlLnN0eWxlLmFuaW1hdGlvbilcbi8vICAgICBjaXJjbGUuc3R5bGUuYW5pbWF0aW9uID0gJ21vdmV0b3AgLjhzIGVhc2Utb3V0IGZvcndhcmRzJ1xuLy8gICB9XG4vLyB9KVxuXG4vLyBjb25zb2xlLmxvZyh3aW5kb3cuc2Nyb2xsWSlcbi8vIGxldCBudW0gPSAoMTYwLjUxMSAqIHdpbmRvdy5zY3JlZW4ud2lkdGgpIC8gMTAwXG4vLyBsZXQgbnVtMiA9ICg3MzEgLyB3aW5kb3cuc2NyZWVuLndpZHRoKSAqIDEwMFxuLy8gY2lyY2xlLnN0eWxlLm1hcmdpblRvcCA9IGAke251bTJ9dndgXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xuLy8gICBjb25zb2xlLmxvZyhudW0pXG4vLyAgIGNvbnNvbGUubG9nKHNjcm9sbFkpXG4vLyAgIGlmIChzY3JvbGxZID49IG51bSkge1xuLy8gICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIG9uV2hlZWwpXG4vLyAgICAgLy8gY2lyY2xlLnN0eWxlLm1hcmdpblRvcCA9ICcxNy43MDR2dydcbi8vICAgfVxuLy8gfSlcblxuLy8gZnVuY3Rpb24gb25XaGVlbChlKSB7XG4vLyAgIGxldCBjaXJjbGVNYXJnaW4gPSBjaXJjbGUuc3R5bGUubWFyZ2luVG9wXG4vLyAgIGNvbnNvbGUubG9nKGNpcmNsZU1hcmdpbilcbi8vICAgbGV0IGRlbHRhID0gZS5kZWx0YVlcbi8vICAgbGV0IGRlbHRhVlcgPSAoZGVsdGEgLyB3aW5kb3cuc2NyZWVuLndpZHRoKSAqIDEwMFxuLy8gICBsZXQgc3RyTWFyID0gY2lyY2xlTWFyZ2luLnNsaWNlKDAsIC0yKVxuLy8gICBsZXQgbmV3VmFsdWUgPSBOdW1iZXIoc3RyTWFyKSAtIGRlbHRhVldcbi8vICAgY2lyY2xlLnN0eWxlLm1hcmdpblRvcCA9IGAke25ld1ZhbHVlfXZ3YFxuLy8gfVxuXG5mdW5jdGlvbiBoYW5kbGVJbnRlcnNlY3QoZW50cmllcywgb2JzZXJ2ZXIpIHtcbiAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgdGFyZ2V0Mi5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLW9uLXZpZXcnKVxuICAgIH1cbiAgfSlcbn1cblxubGV0IG9wdGlvbnMgPSB7XG4gIHJvb3Q6IG51bGwsXG4gIHJvb3RNYXJnaW46ICcwcHgnLFxuICB0aHJlc2hvbGQ6IDAuN1xufVxuXG5sZXQgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoaGFuZGxlSW50ZXJzZWN0LCBvcHRpb25zKVxuXG5sZXQgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFuaW0tdGFnJylcbmxldCB0YXJnZXQyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY29uZC1yb3VuZCcpXG5cbm9ic2VydmVyLm9ic2VydmUodGFyZ2V0KVxuIl0sIm5hbWVzIjpbImhhbmRsZUludGVyc2VjdCIsImVudHJpZXMiLCJvYnNlcnZlciIsImZvckVhY2giLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwidGFyZ2V0MiIsImNsYXNzTGlzdCIsImFkZCIsIm9wdGlvbnMiLCJyb290Iiwicm9vdE1hcmdpbiIsInRocmVzaG9sZCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwib2JzZXJ2ZSJdLCJzb3VyY2VSb290IjoiIn0=