const header = document.getElementById('last-img')
const slides = Array.from(header.querySelectorAll('img'))
const slideCount = slides.length
let picture = (60.741 * window.screen.width) / 100
let whalf = picture / 2
let slideIndex = 0
let minus = (10.444 * window.screen.width) / 100

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
