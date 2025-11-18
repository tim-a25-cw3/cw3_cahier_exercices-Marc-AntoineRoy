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
      slidesPerView: 1,
      spaceBetween: 30,

      pagination: {
        el: '.swiper-pagination',
      },
    });
  }
}
new Main();
