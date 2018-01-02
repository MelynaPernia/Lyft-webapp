$(document).ready(function() {
  function desabledButton(btn) {
    $(btn).attr('disabled', '');
    $(btn).removeClass('btn-enabled');
  }

  function enabledButton(btn) {
    $(btn).removeAttr('disabled');
    $(btn).addClass('btn-enabled');
  }

  function getCountry() {
    return data;
  }

  function getNumberRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function setCodePostal(country) {
    var arrCountry = getCountry();
    var codePostal = 51;
    for (var i = 0; i < arrCountry.length; i++) {
      if ((arrCountry[i]['country']).toLowerCase() === country)
        codePostal = arrCountry[i]['code-postal'];
    }
    return codePostal;
  }

  function validateOnlyNumber(event) {
    var numberCodeASCII = event.keyCode;
    var centinel = false;
    if (numberCodeASCII >= 48 && numberCodeASCII <= 57) {
      centinel = true;
    }
    return centinel;
  }

  function validateSizeNumber(event) {
    var centinel = false;
    if (event.target.value.length === 10) {
      centinel = true;
      enabledButton('.btn-next-register-number');
    } else {
      desabledButton('.btn-next-register-number');
    }
    return centinel;
  }

  // Inicializando
  desabledButton('.btn-next-register-number');
  var codePostal = '51';

  // Cambiar el ícono de la bandera y el código postal.
  $('.list-countries li').on('click', function() {
    $('.dropdown-toggle img').replaceWith($(this).html());
    var nameCountry = $(this).children().data('country');
    codePostal = setCodePostal(nameCountry);
    $('.code-postal').text('+' + setCodePostal(nameCountry));
  });

  // Validar el ingreso de valores en el input
  $('.input-number').on('keypress', validateOnlyNumber);
  $('.input-number').on('keyup', validateSizeNumber);
  $('.input-number').on('keypress', validateOnlyNumber);

  // Generar el código y mostrar la siguiente vista
  $('.btn-next-register-number').on('click', function() {
    var codeRandom = getNumberRandom(100, 999);
    sessionStorage.code = codeRandom;
    sessionStorage.number = codePostal + $('.input-number').val();
    alert('Tu código: LAB-' + codeRandom);
    window.location.href = './verifynumber.html';
  });
  // Regresar a la vista anterior
  $('.btn-view-previous').on('click', function() {
    window.location.href = './singup.html';
  });
});
