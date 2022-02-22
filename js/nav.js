const menuHamburger = document.querySelector('.menu-hamburger');
const menuItems = document.querySelectorAll('.menu-item');

menuHamburger.style.display = 'none';

const hamburger = document.querySelector('.hamburger');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');

function toggleMenu(){
      if(menuHamburger.style.display === 'none'){
            menuHamburger.style.display = 'block';
            closeIcon.style.display = 'block';
            menuIcon.style.display = 'none';
      } else {
            menuHamburger.style.display = 'none';
            closeIcon.style.display = 'none';
            menuIcon.style.display = 'block';
      }
}

hamburger.addEventListener('click', toggleMenu);

menuItems.forEach(
      function(menuItem) {
            menuItem.addEventListener('click', toggleMenu);
});