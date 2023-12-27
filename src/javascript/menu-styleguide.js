const body = document.getElementsByTagName('body')
const cancel = document.getElementById('cancel')
const menuMobile = document.getElementsByClassName('menu-mobile')
const menuMobileAbove = document.getElementsByClassName('menu-mobile-above')

menuMobile[0].addEventListener('click', () => {
  body[0].style.overflow = 'hidden'
  menuMobileAbove[0].style.display = 'block'
})

cancel.addEventListener('click', () => {
  body[0].style.overflow = 'auto'
  menuMobileAbove[0].style.display = 'none'
})
