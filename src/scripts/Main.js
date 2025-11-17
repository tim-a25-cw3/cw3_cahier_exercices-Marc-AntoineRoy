import { Pagination } from 'swiper/modules';
import Icons from './utils/Icons.js';

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

      pagination: {
        el: '.swiper-pagination',
      },
    });
  }
}
new Main();
