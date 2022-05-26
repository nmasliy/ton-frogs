import Swiper from 'swiper';

export function initCardSliders() {
    if (document.querySelector('.card-sliders')) {
        const thumbs = new Swiper(".card-thumbs", {
            spaceBetween: 20,
            slidesPerView: 'auto',
            direction: 'vertical',
            breakpoints: {
                // Change direction if it's need
                320: {
                    direction: 'horizontal',
                },
                1024: {
                    direction: 'vertical',
                }
            },
        });
        const slider = new Swiper(".card-slider", {
            spaceBetween: 30,
            slidesPerView: 1,
            freeMode: true,
            watchSlidesProgress: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            thumbs: {
                swiper: thumbs,
            },
        });
        // If we have iframes in slider we need stop it when slide changed 
        slider.on('slideChange', function () {
            const $players = document.querySelectorAll('.card-slider__item--video iframe');
            if ($players.length > 0) {
                $players.forEach(item => {
                    var iframeSrc = item.src;
                    item.src = iframeSrc;
                });
            }
        });
    }
}