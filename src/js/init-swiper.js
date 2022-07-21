// иницшализация слайдера
new Swiper('.checkout-infographic', {
  // бесконечное вращение
  loop: true,
  setWrapperSize:true,
  simulationTouch: true,
  // autoHide: true,
  // управление клавиатурой
  // Keyboard: {
  //   enabled: true,
  //   onlyInViewport: true,
  //   pageUpDown:true,
  // },
  initialSlide: 0,
  // отступ
  spaceBetween: 40,
  // автовращение
  autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    540: {
      slidesPerView: 3,
    },
    700: {
      slidesPerView: 4,
    },
    1100: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 6,
    }
  }
})