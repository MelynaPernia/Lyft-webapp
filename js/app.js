$(document).ready(function() {
  // Animación del logo-lyft
  $('img').animate({
    marginBottom: '4in',
    opacity: 0.4
  }, 5000);
  // Abrir la vista singup
  setTimeout(function() {
    window.location.href = './views/singup.html';
  }, 5000);
});
