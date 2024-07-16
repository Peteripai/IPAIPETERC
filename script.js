function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#typed-output', {
      strings: ["I AM a Web Developer,Web designer and a Technology Enthusiast",],
      typeSpeed: 60,
      backSpeed: 30,
      loop: true
    });
  });
  
  function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    menu.classList.toggle('open');
  }
  
