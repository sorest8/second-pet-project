document.addEventListener('DOMContentLoaded', function () {
    const path = window.location.pathname;
    let page = 'home';

    if (path.includes('about.html')) page = 'about';
    if (path.includes('location.html')) page = 'location';
    if (path.includes('careers.html')) page = 'careers';

    const desktopLinks = document.querySelectorAll('.header-nav-list-item-link');
    desktopLinks.forEach(link => {
        if (link.getAttribute('data-page') === page) {
            link.classList.add('active');
        }
    });

    const mobileLinks = document.querySelectorAll('.header-nav-list-item-link-mobile');
    mobileLinks.forEach(link => {
        if (link.getAttribute('data-page') === page) {
            link.classList.add('active');
        }
    });
});

document.querySelectorAll('.header-burgerMenu').forEach(function (burgerMenu) {

    const burgerBtn = burgerMenu.querySelector('.header-burgerMenu-btn');
    const burgerContent = burgerMenu.querySelector('.header-burgerMenu-content');

    burgerBtn.addEventListener('click', function () {
        burgerContent.classList.toggle('header-burgerMenu-content__visible');
        burgerBtn.classList.toggle('open');
    })
})


document.querySelectorAll('.faqs-content-top-item-inner').forEach(function (dropDownInner) {

    const dropDownBtn = dropDownInner.querySelector('.faqs-content-top-item-title');
    const dropDownItem = dropDownInner.querySelector('.faqs-content-top-item-description');


    dropDownBtn.addEventListener('click', function () {
        dropDownItem.classList.toggle('faqs-content-top-item-description__visible');
        dropDownBtn.classList.toggle('active');
    });
});


// Находим все элементы
const sliderInner = document.querySelector('.introduce-slider-inner');
const slides = document.querySelectorAll('.introduce-content');
const circles = document.querySelectorAll('.introduce-content-circle');

// Текущий активный слайд
let currentSlide = 0;

// Функция для показа слайда
function showSlide(slideNumber) {
    // Скрываем все слайды
    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    // Убираем активный класс со всех кружков
    circles.forEach(circle => {
        circle.classList.remove('active');
    });

    // Показываем нужный слайд
    slides[slideNumber].style.display = 'block';

    // Делаем нужный кружок активным
    circles[slideNumber].classList.add('active');

    // Запоминаем текущий слайд
    currentSlide = slideNumber;
}

// Добавляем клики на кружки
circles.forEach((circle, index) => {
    circle.addEventListener('click', function () {
        showSlide(index);
    });
});

// Функция для следующего слайда
function nextSlide() {
    let next = currentSlide + 1;
    if (next >= slides.length) {
        next = 0;
    }
    showSlide(next);
}

// Автопереключение каждые 5 секунд
setInterval(nextSlide, 5000);

// Показываем первый слайд при загрузке страницы
showSlide(0);
