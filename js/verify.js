$(document).ready(function() {
  var number = Math.floor(Math.random() * (400 - 100) + 100);
  // volver a enviar código
  $('#resend').on('click', function() {
    alert('Tu código: ' + 'LAB-' + number);
  });
  // siguiente
  $('#verify-code').on('keyup', function() {
    if ($('#verify-code').val().length === 3) {
      $('#next-verif').removeClass('disabled');
    } else {
      $('#next-verif').addClass('disabled');
    }
  });
});
