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
