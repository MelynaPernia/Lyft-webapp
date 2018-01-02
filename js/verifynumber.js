$(document).ready(function() {
  var code = (sessionStorage.code);
  var digitOneCode = code.charAt(0);
  var digitTwoCode = code.charAt(1);
  var digitThreeCode = code.charAt(2);
  var stateDigitOne = false;
  var stateDigitTwo = false;
  var stateDigitThree = false;

  function clearInput() {
    $('.digit-one').val('');
    $('.digit-two').val('');
    $('.tercerDig').val('');
    $('.digit-one').focus();
    desabledButton($('.btn-next-verify-number'));
  }

  function desabledButton(btn) {
    $(btn).attr('disabled', '');
    $(btn).removeClass('btn-enabled-verify');
  }

  function enabledButton(btn) {
    $(btn).removeAttr('disabled');
    $(btn).addClass('btn-enabled-verify');
  }

  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function verifyCode() {
    if (stateDigitOne && stateDigitTwo && stateDigitThree) {
      enabledButton($('.btn-next-verify-number'));
    } else {
      desabledButton($('.btn-next-verify-number'));
    }
  }

  function validateOnlyNumber(event) {
    var numberCodeASCII = event.keyCode;
    var centinel = false;
    if (numberCodeASCII >= 48 && numberCodeASCII <= 57) {
      centinel = true;
    }
    return centinel;
  }

  // Inicializando
  desabledButton($('.btn-next-verify-number'));

  // Agregando el número
  $('.help-block').text('Enter the code sent to +' + sessionStorage.number);
  // Validar el código con cada valor ingresado en los input's
  $('.digit-one').on('input', function() {
    var valueDigit = $(this).val();
    if (valueDigit === digitOneCode) {
      stateDigitOne = true;
    } else {
      stateDigitOne = false;
    }
    verifyCode();
  });
  $('.digit-two').on('input', function() {
    var valueDigit = $(this).val();
    if (valueDigit === digitTwoCode) {
      stateDigitTwo = true;
    } else {
      stateDigitTwo = false;
    }
    verifyCode();
  });
  $('.digit-three').on('input', function() {
    var valueDigit = $(this).val();
    if (valueDigit === digitThreeCode) {
      stateDigitThree = true;
    } else {
      stateDigitThree = false;
    }
    verifyCode();
  });

  $('.digit-one').on('keypress', validateOnlyNumber);
  $('.digit-two').on('keypress', validateOnlyNumber);
  $('.digit-three').on('keypress', validateOnlyNumber);

  $('.btn-prev-register-number').click(function() {
    window.location.href = './registernumber.html';
  });
  // Generar otro código y validarlo
  $('.btn-resend').on('click', function() {
    clearInput();
    code = getRandomArbitrary(100, 999);
    alert('Su nuevo código es LAB-' + code);
    sessionStorage.code = code;
    digitOneCode = sessionStorage.code.charAt(0);
    digitTwoCode = sessionStorage.code.charAt(1);
    digitThreeCode = sessionStorage.code.charAt(2);
    verifyCode();
  });

  $('.btn-next-verify-number').click(function() {
    window.location.href = './registerdata.html';
  });
});
