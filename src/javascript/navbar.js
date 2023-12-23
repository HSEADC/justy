const heightOfViewport = window.innerHeight
const fortyPercentOfViewport = heightOfViewport * 0.4

window.addEventListener('scroll', () => {
  const watchedElement1 = document.getElementById('first-item')
  const watchedElement = document.getElementById('second-item')
  const watchedElement2 = document.getElementById('last-img')
  const colorChangedElement = document.getElementById('first')
  const colorChangedElement2 = document.getElementById('second')
  const colorChangedElement3 = document.getElementById('third')
  const targetHeight = fortyPercentOfViewport

  const rect = watchedElement.getBoundingClientRect()
  const rect2 = watchedElement2.getBoundingClientRect()
  const rect3 = watchedElement1.getBoundingClientRect()

  if (rect3.top <= targetHeight) {
    colorChangedElement.classList.add('now')
  }
  if (rect.top <= targetHeight) {
    colorChangedElement2.classList.add('now')
    colorChangedElement.classList.remove('now')
  } else {
    colorChangedElement2.classList.remove('now')
  }
  if (rect2.top <= targetHeight) {
    colorChangedElement3.classList.add('now')
    colorChangedElement2.classList.remove('now')
  } else {
    colorChangedElement3.classList.remove('now')
  }
})

const header = document.getElementById('last-img')
console.log(header)
const slides = Array.from(header.querySelectorAll('img'))
const slideCount = slides.length
let picture = (60.741 * window.screen.width) / 100
let whalf = picture / 2
let slideIndex = 0
let minus = (19.63 * window.screen.width) / 100

header.addEventListener('mousemove', function (e) {
  if (e.pageX - minus < whalf) {
    header.removeEventListener('click', showNextSlide)
    header.classList.remove('right')
    header.classList.add('left')
    header.addEventListener('click', showPreviousSlide)
  } else {
    header.removeEventListener('click', showPreviousSlide)
    header.classList.remove('left')
    header.classList.add('right')
    header.addEventListener('click', showNextSlide)
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
