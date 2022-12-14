const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

emailMenu.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    console.log('click');
    desktopMenu.classList.toggle('inactive');
}

console.log("js funcionando");