const toggleBtn = document.querySelector('.navbar_toogleBtn');
const menu = document.querySelector('.navbar_menu');
const sign = document.querySelector('.navbar_sign');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    sign.classList.toggle('active');
});