/* eslint-disable */
const sr = require('scrollreveal')();

const CustomVueScrollReveal = {
  install(Vue) {
    Vue.directive('scroll-reveal', {
      inserted: (el, binding) => {
        const options = binding.value || {};
        const time = binding.value || 1000;

        if (binding.modifiers) {
          if (binding.modifiers.reset) {
            options.reset = true;
          }

          if (binding.modifiers.nomobile) {
            options.mobile = false;
          }
        }

        sr.reveal(el, options, time);
      },
    });
  },
};

export default CustomVueScrollReveal;


/* eslint-disable */


// import ScrollReveal from 'scrollreveal';
// var sr = ScrollReveal();
// sr.revealAbout('.about-image', {
//   duration: 600,
//   distance: '50px',
//   easing: 'ease-out',
//   origin: 'bottom',
//   reset: true,
//   scale: 1,
//   viewFactor: 0,
//   afterReveal: revealAboutChildren
// }, 200);
// var revealAboutChildren = sr.reveal('.about-content', {
//   duration: 500,
//   scale: 1,
//   distance: '20px',
//   origin: 'bottom',
//   reset: true,
//   easing: 'ease-out',
//   viewFactor: 1
// }, 75);
// sr.revealBoxImg('.box-img', {
//   duration: 600,
//   distance: '50px',
//   easing: 'ease-out',
//   origin: 'bottom',
//   reset: true,
//   scale: 1,
//   viewFactor: 0,
//   afterReveal: revealBoxImgChildren
// }, 200);
// var revealBoxImgChildren = sr.reveal('.img-caption', {
//   duration: 500,
//   scale: 1,
//   distance: '20px',
//   origin: 'bottom',
//   reset: true,
//   easing: 'ease-out',
//   viewFactor: 1
// }, 75);
