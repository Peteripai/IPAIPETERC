function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#typed-output', {
      strings: ["I AM a currently a Web Developer and Web designer",],
      typeSpeed: 60,
      backSpeed: 60,
      loop: false
    });
  });
  
  function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    menu.classList.toggle('open');
  }
  
