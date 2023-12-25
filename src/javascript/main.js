function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      target2.classList.add('animate-on-view')
    }
  })
}

let options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.7
}

let observer = new IntersectionObserver(handleIntersect, options)

let target = document.querySelector('.anim-tag')
let target2 = document.querySelector('.second-round')

observer.observe(target)

const heightOfViewport = window.innerHeight
const fortyPercentOfViewport = heightOfViewport * 0.7

window.addEventListener('scroll', () => {
  const firstCard = document.getElementById('card1')
  const secondCard = document.getElementById('card3')
  const watchedElement = document.getElementsByClassName('cards')
  const targetHeight = fortyPercentOfViewport

  const rect = watchedElement[0].getBoundingClientRect()

  if (rect.top <= targetHeight) {
    firstCard.classList.add('animation-left')
    secondCard.classList.add('animation-right')
  }
})
