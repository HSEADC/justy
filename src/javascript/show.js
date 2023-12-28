const viewport_width = Math.max(
  document.documentElement.clientWidth,
  window.innerWidth || 0
)

if (viewport_width > 912) {
  const watch = document.getElementById('watch')
  const show = document.getElementsByClassName('show')

  watch.addEventListener('mouseover', function () {
    show[0].style.display = 'inline-flex'
    show[0].classList.add('show-animation')
  })

  watch.addEventListener('mouseout', function () {
    show[0].style.display = 'none'
    show[0].classList.remove('show-animation')
  })
}
