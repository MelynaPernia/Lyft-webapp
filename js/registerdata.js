$(document).ready(function() {
  var verifyFistName = false;
  var verifyLastName = false;
  var verifyEmail = false;
  var verifyCheck = false;

  function validateText(event) {
    var patternText = /^[a-zA-Z_áéíóúñ_ÁÉÍÓÚÑ]*$/;
    var centinel = false;
    if (patternText.test(event.key)) {
      centinel = true;
    } else {
      centinel = false;
    }
    return centinel;
  }

  function validateEmail(event) {
    var patternEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    patternEmail.test(event);
  }

  function verifyCamposText(text) {
    var centinel = false;
    if (text) {
      centinel = true;
      enabledButton();
    } else {
      centinel = false;
      desabledButton();
    }
    return centinel;
  }

  function desabledButton(btn) {
    $(btn).attr('disabled', '');
    $(btn).removeClass('btn-enabled-register-data');
  }

  function enabledButton(btn) {
    $(btn).removeAttr('disabled');
    $(btn).addClass('btn-enabled-register-data');
  }

  function verifyData() {
    if (verifyFistName && verifyLastName && verifyEmail && verifyCheck) {
      enabledButton('.btn-next-register-data');
    } else {
      desabledButton('.btn-next-register-data');
    }
  }

  // Validar firstName y lastName para ingresar solo texto
  $('#firstName').on('keypress', validateText);
  $('#lastName').on('keypress', validateText);

  // Validar cada input ingresado
  $('#firstName').on('input', function() {
    verifyFistName = verifyCamposText($(this).val());
    verifyData();
  });
  $('#lastName').on('input', function() {
    verifyLastName = verifyCamposText($(this).val());
    verifyData();
  });
  $('#email').on('input', function() {
    patternEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var resulEmail = patternEmail.test($(this).val());
    if (resulEmail) {
      verifyEmail = true;
    } else {
      verifyEmail = false;
    }
    verifyData();
  });
  $('input[type="checkbox"]').on('click', function(event) {
    if (event.target.checked) {
      verifyCheck = true;
    } else {
      verifyCheck = false;
    }
    verifyData();
  });

  $('.btn-prev-verify-number').click(function() {
    window.location.href = './verifynumber.html';
  });
  $('.btn-next-register-data').on('click', function() {
    window.location.href = './registersuccess.html';
  });
});
