// =============== MENU ===============

const menuToggler = document.querySelector('.header__menu-toggler');
const menu = document.querySelector('.menu');

menuToggler.onclick = toggleMenu;

function toggleMenu() {
    menuToggler.classList.toggle('header__menu-toggler--active');
    menu.classList.toggle('menu--active');
    document.body.classList.toggle('no-scroll');
};