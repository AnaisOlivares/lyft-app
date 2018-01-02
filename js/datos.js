$(document).ready(function() {
  var name = $('#icon_prefix');
  var email = $('#email');
  $('.validate').on('keyup', function() {
    if (($('.validate').val().length >= 1) && ($('#email').val().length >= 9)) {
      $('#next-verif').removeClass('disabled');
    } else {
      $('#next-verif').addClass('disabled');
    };
    $('#test5').on('click', function check() {
      $('#next-verif').removeClass('disabled');
      check();
    });
  });


  //   $('#next-verif').on('click', function(){
  //   if ($('.validate').val().length >= 3 && $('#email').val().length >= 9){
  //     $('#next-verif').removeClass('disabled', 'disabled') ;
  //
  //   };
  //
  // })

});
