window.addEventListener('DOMContentLoaded', () => {

  const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function(className, settings) {
      swiper = new Swiper(className, settings);
      
      if (callback) {
        callback(swiper);
      }
    }

    const checker = function() {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  }

  resizableSwiper(
    '(max-width: 767px)',
    '.mySwiper',
    {
      loop: true,
      spaceBetween: 16,
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    },
  );
});

const button = document.querySelector(".brand-button");
const text = document.querySelector(".brand-button__text");
const wrapper = document.querySelector(".mySwiper__wrapper");
const img = document.querySelector(".brand-button__img");
button.addEventListener('click', () => {
  if(!wrapper.classList.contains("mySwiper__wrapper--open")) {
   wrapper.classList.add("mySwiper__wrapper--open");
   img.classList.add("brand-button__img--open")
   text.textContent = "Скрыть";
  } else {
    wrapper.classList.remove("mySwiper__wrapper--open");
    img.classList.remove("brand-button__img--open")
    wrapper.classList.add("mySwiper__wrapper--close");
    text.textContent = "Показать все";
  }
})
