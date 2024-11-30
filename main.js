

const navBar = document.querySelector('header');

window.onscroll = () => {
  navBar.classList.toggle('active', window.scrollY > 100);
}



const swiper = new Swiper('.slider-wrapper', {

  loop: true,


  





ScrollReveal({
  reset:true,
  distance: '100px',
  duration: 2500
})

Scrolct-description, .context-text', {origin : 'top'});
ScrollReveal().reveal('.about-img, .home-text-content h1, .price, .small, .order-img,  .contact-img', { origin : 'left' });
ScrollReveal().reveal('.cart-icon, .product-box h2, .order-text, .home-img, .contact-input, .heading-text p, .contact-text', { origin : 'right' });
ScrollReveal().reveal('.button,  .menu-next, .footer-content, .product-box, .gallary-box', { origin : 'bottom' });