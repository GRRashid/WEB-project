
(function pageSpeed() {
    const startTime = new Date();

    window.onload = () => {
        const endTime = new Date();
        const latency = (endTime - startTime) / 1000;
        const latencyBlock = document.querySelector('.latency');

        latencyBlock.innerHTML = 'Page load time is ' + latency + ' second';
    };
})();

// Инициализация слайдера swiper
let swiper = new Swiper(".section-photo__slider", {
    // Параметр сколько показывать слайдов на странице
    slidesPerView: 3,
    // Отступы между слайдами
    spaceBetween: 30,
    // Навигация (стрелочки)
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});