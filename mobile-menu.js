const menuIcon = document.getElementById('menu-icon');
const mobileMenuCloseIcon = document.getElementById('mobile-menu-close-icon');
const navbar = document.getElementById('navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('header-body');
  navbar.classList.toggle('header-body--show');
});

mobileMenuCloseIcon.addEventListener('click', () => {
  navbar.classList.toggle('header-body');
  navbar.classList.toggle('header-body--show');
});
