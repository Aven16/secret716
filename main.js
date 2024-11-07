$(document).ready(function(){
    $('.header').height($(window).height());
})

new Swiper('.product-wrapper', {
    slidesPerView: 1, // Show 1 product at a time
    slidesPerGroup: 1, // Move only 1 product per button click
    spaceBetween: 10, // Adjust space between slides
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 2,
        },
    },
});
  document.querySelector("#__next > div.MuiContainer-root.MuiContainer-maxWidthLg.css-4yf5de")
  
  // Log current slidesPerView
  console.log('Current slidesPerView:', swiper.params.slidesPerView);