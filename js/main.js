// =============== MOBILE MENU ===============

const body = document.querySelector('body');
const header = document.querySelector('.header');
const menu = document.querySelector('.menu');
const menuToggler = document.querySelector('.header__menu-toggler');

menuToggler.onclick = toggleMenu;

function toggleMenu() {
    body.classList.toggle('no-scroll');
    header.classList.toggle('header--active');
    menu.classList.toggle('menu--active');
    menuToggler.classList.toggle('header__menu-toggler--active');
};