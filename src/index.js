import './index.css'

const folder = document.getElementsByClassName('cont-wrapper')
const blade_1 = document.getElementsByClassName('first-fold')
const blade_2 = document.getElementsByClassName('second-fold')
const blade_3 = document.getElementsByClassName('third-fold')
const blade_4 = document.getElementsByClassName('fourth-fold')

const header = document.getElementsByClassName('verticle')
const slides = Array.from(header[0].querySelectorAll('img'))
const slideCount = slides.length
let whalf = 627 / 2
let slideIndex = 0

header[0].addEventListener('mousemove', function (e) {
  if (e.pageX - 109 < whalf) {
    header[0].removeEventListener('click', showNextSlide)
    header[0].classList.remove('right')
    header[0].classList.add('left')
    header[0].addEventListener('click', showPreviousSlide)
  } else {
    header[0].removeEventListener('click', showPreviousSlide)
    header[0].classList.remove('left')
    header[0].classList.add('right')
    header[0].addEventListener('click', showNextSlide)
  }
})

function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount
  updateSlider()
}
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount
  updateSlider()
}
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.opacity = '1'
    } else {
      slide.style.opacity = '0'
    }
  })
}

updateSlider()

for (let i = 0; i < folder.length; i++) {
  folder[i].addEventListener('mouseenter', function () {
    blade_4[i].style.transform = 'rotateX(-35deg)'
    blade_3[i].style.transform = 'rotateX(-25deg)'
    blade_2[i].style.transform = 'rotateX(-15deg)'
    blade_1[i].style.transform = 'rotateX(-5deg)'
  })
  folder[i].addEventListener('mouseleave', function () {
    blade_4[i].style.transform = 'rotateX(0deg)'
    blade_3[i].style.transform = 'rotateX(0deg)'
    blade_2[i].style.transform = 'rotateX(0deg)'
    blade_1[i].style.transform = 'rotateX(0deg)'
  })
}
