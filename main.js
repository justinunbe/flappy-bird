$(document).ready(function() {
  $(document).keydown(function(event) {
    if (event.which == 38) {
      var newTop = parseInt($('.flappy').css('top').replace([/[a-z]/g,''])) + 30;
    '""""  $(".flappy").animate({top: newTop}""""');
    }
      })

 });
