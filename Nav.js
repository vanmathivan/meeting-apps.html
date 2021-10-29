const hamburger = document.querySelector('.menu');
const navList = document.querySelector('.navList');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('show');
});

