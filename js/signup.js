$(document).ready(function() {
  var $email = $('#inputEmail');
  var $password = $('#inputPassword');
  $('select').material_select();

  var $telf = $('#icon_telephone');
  $telf.on('keyup', function() {
    if ($telf.val().length === 10) {
      // alert('holi');
      $('#signup').removeClass('disabled');
    } else {
      $('#signup').addClass('disabled');
    }
  });
});
