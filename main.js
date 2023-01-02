const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const burgerMenu = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

emailMenu.addEventListener('click', toggleDesktopMenu);

burgerMenu.addEventListener('click', toggleMobileMenu);

aside.addEventListener('click', toggleCarritoAside);

menuCarritoIcon.addEventListener('click', toggleCarritoAside);

/*correo lado derecho*/ 
function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    aside.classList.add('inactive');



}
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    aside.classList.add('inactive'); //Para que se desactive el aside cuando mobileMenu este activo
    
}

/*Aside derecho... Carrito de compras*/ 
function toggleCarritoAside(){
    aside.classList.toggle('inactive');
    mobileMenu.classList.add('inactive'); //Para que se desactive el mobileMenu cuando el Aside este activo
    desktopMenu.classList.add('inactive');
}
