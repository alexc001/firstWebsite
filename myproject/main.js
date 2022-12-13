const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-menu');
const menu = document.querySelector('.menu');


hamburger.addEventListener('click', function(){
  this.classList.toggle('is-active');
  
  mobile_menu.classList.toggle('is-active');
  
});

mobile_menu.addEventListener('click', function(){
  mobile_menu.classList.toggle('is-active');
})
