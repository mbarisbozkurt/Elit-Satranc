document.addEventListener('DOMContentLoaded', () => {

  //For hamburger menu
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const menu = document.getElementById('menu');

  hamburgerMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
  });


  //For header scrolled
  const header = document.getElementById('header');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  })

});