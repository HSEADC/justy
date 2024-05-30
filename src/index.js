import './index.css'

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
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      target2.classList.add('animate-on-view')
    }
  })
}

let options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.7
}

let observer = new IntersectionObserver(handleIntersect, options)

let target = document.querySelector('.anim-tag')
let target2 = document.querySelector('.second-round')

observer.observe(target)
