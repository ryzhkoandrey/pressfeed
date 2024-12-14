// =============== MOBILE MENU ===============

// Open / Close

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

// Submenu

const submenuLinks = document.querySelectorAll('.menu__item--has-submenu > .menu__link');

submenuLinks.forEach(function (link) {
    link.addEventListener('click', function () {

        const submenu = link.nextElementSibling;
        const isOpen = link.classList.toggle('menu__link--active');

        if (isOpen) {
            submenu.style.maxHeight = submenu.scrollHeight + 'px';
        } else {
            submenu.removeAttribute('style');
        }
    });
});