const navBtnMobile = document.querySelector('.btn-mobile-nav')
const navHeader = document.querySelector('header')

navBtnMobile.addEventListener('click', function () {
    navHeader.classList.toggle('nav-open')
})