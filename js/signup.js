$(document).ready(function() {
  var $email = $('#inputEmail');
  var $telf = $('#icon_telephone');
  var number = Math.floor(Math.random() * (400 - 100) + 100);

  $('select').material_select();

  $telf.on('keyup', function() {
    if ($telf.val().length === 10) {
      // alert('holi');
      $('#signup').removeClass('disabled');
    } else {
      $('#signup').addClass('disabled');
    }
  });
  $('#signup').on('click', function() {
    // debugger
    alert('Tu código: ' + 'LAB-' + number);
  });
});
