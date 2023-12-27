const viewport_width = Math.max(
  document.documentElement.clientWidth,
  window.innerWidth || 0
)

if (viewport_width > 912) {
  const heightOfViewport = window.innerHeight
  const fortyPercentOfViewport = heightOfViewport * 0.6

  window.addEventListener('scroll', () => {
    const firstCard = document.getElementById('card3')
    const secondCard = document.getElementById('card4')
    const watchedElement = document.getElementsByClassName('cards')
    const targetHeight = fortyPercentOfViewport

    const rect = watchedElement[0].getBoundingClientRect()

    if (rect.top <= targetHeight) {
      firstCard.classList.add('movedown')
      secondCard.classList.add('movedown')
    }
  })
}
