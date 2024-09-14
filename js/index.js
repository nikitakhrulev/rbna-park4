

const swiper = new Swiper('.swiper-products', {
  slidesPerView: 1,
  spaceBetween: 21,
  direction: 'horizontal',
  // loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '#arrowRight',
    prevEl: '#arrowLeft',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    1440: {
      slidesPerView: 2.3,
         spaceBetween: 21,

    },
}
});


const swiperImg = new Swiper('.swiper-img', {
  slidesPerView: 1,
  spaceBetween: 21,
  direction: 'horizontal',
  // loop: true,
  // Navigation arrows

});
const swiperText = new Swiper('.swiper-text', {
  slidesPerView: 1,
  spaceBetween: 21,
  direction: 'horizontal',
  // loop: true,
  // Navigation arrows
});
swiperImg.controller.control = swiperText;
swiperText.controller.control = swiperImg;