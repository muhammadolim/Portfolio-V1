var swiperH = new Swiper('.swiper-container-h', {
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination-h',
        clickable: true,
    },
    keyboard: {
        enabled: true,
    },
})
var swiperV = new Swiper('.swiper-container-v', {
    direction: 'vertical',
    grabCursor: true,
    loop: true,
    pagination: {
        el: '.swiper-pagination-v',
        clickable: true,
    },
    effect: 'cube',
    cubeEffect: {
        shadow: false,
        slideShadows: false,
    },
    keyboard: {
        enabled: true,
    },
})