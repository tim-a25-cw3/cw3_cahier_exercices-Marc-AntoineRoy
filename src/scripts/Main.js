import Icons from './utils/Icons.js';
import Swiper from 'swiper/bundle';

class Main {
  constructor() {
    this.init();
  }

  init() {
    Icons.load();

    this.initSwiperCards();
  }

  initSwiperCards() {
    const target = document.querySelector('.js-swiper-cards');
    const swiper = new Swiper(target, {
      slidesPerView: 2,

      pagination: {
        el: '.swiper-pagination',
      },

      breakpoints: {
        480: {
          slidesPerView: 1,
        },

        768: {
          slidesPerView: 2,
        },

        1024: {
          slidesPerView: 1,
        },
      },
    });
  }
}
new Main();
