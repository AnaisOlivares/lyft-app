$(document).ready(function() {
  var number = Math.floor(Math.random() * (400 - 100) + 100);

  $('#resend').on('click', function() {
    alert('Tu código: ' + 'LAB-' + number);
  });
});
