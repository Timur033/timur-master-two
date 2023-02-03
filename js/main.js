  const burgerMenu = document.querySelector('.burger-menu');
  const menu = document.querySelector('.menu');
  burgerMenu.addEventListener('click', () => {
    menu.classList.toggle('show');
  });

 

  Fancybox.bind('[data-fancybox]', {
    // Your options go here
  });