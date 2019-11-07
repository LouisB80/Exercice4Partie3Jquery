$(document).ready(function(){
  $('#changeHeight').on('click', function(){
    var height = parseInt($('#rect').css('height')) + 10;
    $('#rect').css('height', height);
    if (height > 100) {
      $('#rect').css('height', '10px');
    }
    console.log($('#rect').height());
  })
  $('#changeColor').on('click', function(){
    $('#rect').css('background-color', 'green');
  })
  $('#hide').on('click', function(){
    $('#rect').hide();
  })
  $('#show').on('click', function(){
    $('#rect').show();
  })
  $('#reset').on('click', function(){
    $('#rect').removeAttr('style');
  })
})
