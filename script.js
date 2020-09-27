const arrow = document.querySelector('.main__side-menu__arrow');
const nav = document.querySelector('.main__side-menu');
const search_icon = document.querySelector('.search__icon');
const search_input = document.querySelector('.search__input');

arrow.addEventListener('click', function () {
    arrow.classList.toggle("main__side-menu__arrow--active")
    nav.classList.toggle("main__side-menu--active");
});
search_icon.addEventListener('click', function () {
    search_icon.classList.toggle("search__icon--active");
    search_input.classList.toggle("search__input--active");
});