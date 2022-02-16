const menuHamburger = document.querySelector('.menu-hamburger');
const menuItems = document.querySelectorAll('.menu-item');

const hamburger = document.querySelector('.hamburger');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');

function toggleMenu(){
      if(menuHamburger.classList.contains('showMenu')){
            menuHamburger.classList.remove('showMenu');
            closeIcon.style.display = 'none';
            menuIcon.style.display = 'block';
      } else {
            menuHamburger.classList.add('showMenu');
            closeIcon.style.display = 'block';
            menuIcon.style.display = 'none';
      }
}

hamburger.addEventListener('click', toggleMenu);

menuItems.forEach(
      function(menuItem) {
            menuItem.addEventListener('click', toggleMenu);
})