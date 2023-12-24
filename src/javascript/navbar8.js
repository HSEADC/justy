const heightOfViewport = window.innerHeight
const fortyPercentOfViewport = heightOfViewport * 0.4

window.addEventListener('scroll', () => {
  const watchedElement1 = document.getElementById('first-item')
  const watchedElement = document.getElementById('second-item')
  const watchedElement2 = document.getElementById('third-item')
  const watchedElement3 = document.getElementById('fourth-item')
  const watchedElement4 = document.getElementById('fifth-item')
  const watchedElement5 = document.getElementById('sixth-item')
  const watchedElement6 = document.getElementById('seventh-item')
  const watchedElement7 = document.getElementById('eighth-item')
  const colorChangedElement = document.getElementById('first')
  const colorChangedElement2 = document.getElementById('second')
  const colorChangedElement3 = document.getElementById('third')
  const colorChangedElement4 = document.getElementById('fourth')
  const colorChangedElement5 = document.getElementById('fifth')
  const colorChangedElement6 = document.getElementById('sixth')
  const colorChangedElement7 = document.getElementById('seventh')
  const colorChangedElement8 = document.getElementById('eighth')
  const targetHeight = fortyPercentOfViewport

  const rect = watchedElement.getBoundingClientRect()
  const rect2 = watchedElement2.getBoundingClientRect()
  const rect3 = watchedElement1.getBoundingClientRect()
  const rect4 = watchedElement3.getBoundingClientRect()
  const rect5 = watchedElement4.getBoundingClientRect()
  const rect6 = watchedElement5.getBoundingClientRect()
  const rect7 = watchedElement6.getBoundingClientRect()
  const rect8 = watchedElement7.getBoundingClientRect()

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
  if (rect4.top <= targetHeight) {
    colorChangedElement4.classList.add('now')
    colorChangedElement3.classList.remove('now')
  } else {
    colorChangedElement4.classList.remove('now')
  }
  if (rect5.top <= targetHeight) {
    console.log('fcweverv')
    colorChangedElement5.classList.add('now')
    colorChangedElement4.classList.remove('now')
  } else {
    colorChangedElement5.classList.remove('now')
  }
  if (rect6.top <= targetHeight) {
    colorChangedElement6.classList.add('now')
    colorChangedElement5.classList.remove('now')
  } else {
    colorChangedElement6.classList.remove('now')
  }
  if (rect7.top <= targetHeight) {
    colorChangedElement7.classList.add('now')
    colorChangedElement6.classList.remove('now')
  } else {
    colorChangedElement7.classList.remove('now')
  }
  if (rect8.top <= targetHeight) {
    colorChangedElement8.classList.add('now')
    colorChangedElement7.classList.remove('now')
  } else {
    colorChangedElement8.classList.remove('now')
  }
})
