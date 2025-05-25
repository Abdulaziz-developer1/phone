const previous = document.getElementById('previous');
const next = document.getElementById('next');
const swiper = document.getElementById('swiper');


previous.addEventListener('click', function(){
    swiper.style.justifyContent = 'start';
});

next.addEventListener('click', function(){
    swiper.style.justifyContent = 'end';
});