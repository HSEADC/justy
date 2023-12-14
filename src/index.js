import './index.css'

const folder = document.getElementsByClassName('cont-wrapper')
const blade_1 = document.getElementsByClassName('first-fold')
const blade_2 = document.getElementsByClassName('second-fold')
const blade_3 = document.getElementsByClassName('third-fold')
const blade_4 = document.getElementsByClassName('fourth-fold')

const header = document.getElementsByClassName('header-article')
let whalf = window.innerWidth / 2

header[0].addEventListener('mousemove', function (e) {
  if (e.pageX < whalf) {
    header[0].style.cursor = 'pointer'
  } else {
    header[0].style.cursor = 'alias'
  }
})

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
