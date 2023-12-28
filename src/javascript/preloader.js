const viewport_width = Math.max(
  document.documentElement.clientWidth,
  window.innerWidth || 0
)

const preloader = document.getElementsByClassName('preloader')
const hidden = document.getElementsByClassName('hidden')
const h1 = document.getElementById('h1')
const h2 = document.getElementById('h2')
const firstLine = document.getElementById('first-line')
const secondLine = document.getElementById('second-line')
const thirdLine = document.getElementById('third-line')
const fourthLine = document.getElementById('fourth-line')
const firstSvg = document.getElementById('first-svg')
const secondSvg = document.getElementById('second-svg')
const thirdSvg = document.getElementById('third-svg')
const fourthSvg = document.getElementById('fourth-svg')

if (viewport_width > 912) {
  preloader[0].style.display = 'block'
  h1.classList.add('animation-h1')
  firstLine.classList.add('first-animation')
  secondLine.classList.add('first-animation')
  thirdLine.classList.add('first-animation')
  fourthLine.classList.add('first-animation')
  setTimeout(function () {
    hidden[0].classList.add('animation-block-up')
    h1.style.color = '#999999'
    h2.classList.add('animation-text2-up')
    firstLine.style.width = '1.704vw'
    secondLine.style.width = '1.704vw'
    thirdLine.style.width = '1.704vw'
    fourthLine.style.width = '1.704vw'
    firstLine.style.left = '2.963vw'
    secondLine.style.right = '2.963vw'
    thirdLine.style.left = '2.963vw'
    fourthLine.style.right = '2.963vw'
    firstLine.classList.remove('first-animation')
    secondLine.classList.remove('first-animation')
    thirdLine.classList.remove('first-animation')
    fourthLine.classList.remove('first-animation')
    firstLine.classList.add('animation-rotate-div')
    secondLine.classList.add('animation-rotate-div')
    thirdLine.classList.add('animation-rotate-div')
    fourthLine.classList.add('animation-rotate-div')
  }, 1000)

  setTimeout(function () {
    firstSvg.classList.add('animation-svg-rotation')
    secondSvg.classList.add('animation-svg-rotation')
    thirdSvg.classList.add('animation-svg-rotation')
    fourthSvg.classList.add('animation-svg-rotation')
  }, 1150)

  setTimeout(function () {
    firstSvg.style.opacity = '1'
    secondSvg.style.opacity = '1'
    thirdSvg.style.opacity = '1'
    fourthSvg.style.opacity = '1'
    firstLine.style.opacity = '0'
    secondLine.style.opacity = '0'
    thirdLine.style.opacity = '0'
    fourthLine.style.opacity = '0'
  }, 1250)

  setTimeout(function () {
    hidden[0].style.top = '47.5%'
    h1.style.top = '0'
    h1.classList.remove('animation-h1')
    hidden[0].classList.remove('animation-block-up')
  }, 2000)

  setTimeout(function () {
    preloader[0].classList.add('preloader-animation')
  }, 2500)

  setTimeout(function () {
    preloader[0].style.display = 'none'
  }, 3000)
}
