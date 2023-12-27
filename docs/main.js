/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
var viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

if (viewport_width > 912) {
  var handleIntersect = function handleIntersect(entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        target2.classList.add('animate-on-view');
      }
    });
  };

  var options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7
  };
  var observer = new IntersectionObserver(handleIntersect, options);
  var target = document.querySelector('.anim-tag');
  var target2 = document.querySelector('.second-round');
  observer.observe(target);
  var heightOfViewport = window.innerHeight;
  var fortyPercentOfViewport = heightOfViewport * 0.7;
  window.addEventListener('scroll', function () {
    var firstCard = document.getElementById('card1');
    var secondCard = document.getElementById('card3');
    var watchedElement = document.getElementsByClassName('cards');
    var targetHeight = fortyPercentOfViewport;
    var rect = watchedElement[0].getBoundingClientRect();

    if (rect.top <= targetHeight) {
      firstCard.classList.add('animation-left');
      secondCard.classList.add('animation-right');
    }
  });
} else {
  var _handleIntersect = function _handleIntersect(entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        _target2.classList.add('animate-on-view-mobile');
      }
    });
  };

  var slider = document.querySelector('.slider'),
      sliderTrack = slider.querySelector('.cards'),
      slides = slider.querySelectorAll('.card'),
      slideWidth = slides[0].offsetWidth,
      slideIndex = 0,
      posInit = 0,
      posX1 = 0,
      posX2 = 0,
      posY1 = 0,
      posY2 = 0,
      posFinal = 0,
      isSwipe = false,
      isScroll = false,
      allowSwipe = true,
      transition = true,
      nextTrf = 0,
      prevTrf = 0,
      lastTrf = --slides.length * slideWidth,
      posThreshold = slides[0].offsetWidth * 0.35,
      trfRegExp = /([-0-9.]+(?=px))/,
      getEvent = function getEvent() {
    return event.type.search('touch') !== -1 ? event.touches[0] : event;
  },
      slide = function slide() {
    if (transition) {
      sliderTrack.style.transition = 'transform .5s';
    }

    sliderTrack.style.transform = "translate3d(-".concat(slideIndex * slideWidth, "px, 0px, 0px)");
  },
      swipeStart = function swipeStart() {
    var evt = getEvent();

    if (allowSwipe) {
      transition = true;
      nextTrf = (slideIndex + 1) * -slideWidth;
      prevTrf = (slideIndex - 1) * -slideWidth;
      posInit = posX1 = evt.clientX;
      posY1 = evt.clientY;
      sliderTrack.style.transition = '';
      document.addEventListener('touchmove', swipeAction);
      document.addEventListener('mousemove', swipeAction);
      document.addEventListener('touchend', swipeEnd);
      document.addEventListener('mouseup', swipeEnd);
    }
  },
      swipeAction = function swipeAction() {
    var evt = getEvent(),
        style = sliderTrack.style.transform,
        transform = +style.match(trfRegExp)[0];
    posX2 = posX1 - evt.clientX;
    posX1 = evt.clientX;
    posY2 = posY1 - evt.clientY;
    posY1 = evt.clientY; // определение действия свайп или скролл

    if (!isSwipe && !isScroll) {
      var posY = Math.abs(posY2);

      if (posY > 7 || posX2 === 0) {
        isScroll = true;
        allowSwipe = false;
      } else if (posY < 7) {
        isSwipe = true;
      }
    }

    if (isSwipe) {
      // запрет ухода влево на первом слайде
      if (slideIndex === 0) {
        if (posInit < posX1) {
          setTransform(transform, 0);
          return;
        } else {
          allowSwipe = true;
        }
      } // запрет ухода вправо на последнем слайде


      if (slideIndex === --slides.length) {
        if (posInit > posX1) {
          setTransform(transform, lastTrf);
          return;
        } else {
          allowSwipe = true;
        }
      } // запрет протаскивания дальше одного слайда


      if (posInit > posX1 && transform < nextTrf || posInit < posX1 && transform > prevTrf) {
        reachEdge();
        return;
      } // двигаем слайд


      sliderTrack.style.transform = "translate3d(".concat(transform - posX2, "px, 0px, 0px)");
    }
  },
      swipeEnd = function swipeEnd() {
    posFinal = posInit - posX1;
    isScroll = false;
    isSwipe = false;
    document.removeEventListener('touchmove', swipeAction);
    document.removeEventListener('mousemove', swipeAction);
    document.removeEventListener('touchend', swipeEnd);
    document.removeEventListener('mouseup', swipeEnd);

    if (allowSwipe) {
      if (Math.abs(posFinal) > posThreshold) {
        if (posInit < posX1) {
          slideIndex--;
        } else if (posInit > posX1) {
          slideIndex++;
        }
      }

      if (posInit !== posX1) {
        allowSwipe = false;
        slide();
      } else {
        allowSwipe = true;
      }
    } else {
      allowSwipe = true;
    }
  },
      setTransform = function setTransform(transform, comapreTransform) {
    if (transform >= comapreTransform) {
      if (transform > comapreTransform) {
        sliderTrack.style.transform = "translate3d(".concat(comapreTransform, "px, 0px, 0px)");
      }
    }

    allowSwipe = false;
  },
      reachEdge = function reachEdge() {
    transition = false;
    swipeEnd();
    allowSwipe = true;
  };

  sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';
  sliderTrack.addEventListener('transitionend', function () {
    return allowSwipe = true;
  });
  slider.addEventListener('touchstart', swipeStart);
  slider.addEventListener('mousedown', swipeStart);
  var _options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7
  };

  var _observer = new IntersectionObserver(_handleIntersect, _options);

  var _target = document.querySelector('.anim-tag');

  var _target2 = document.querySelector('.second-round');

  _observer.observe(_target);
}
/******/ })()
;