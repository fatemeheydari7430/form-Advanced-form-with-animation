$(document).ready(function () {

    $('#signup').click(function() {
          $('.container').addClass('right-panel-active');
   });

   $('#signin').click(function(){
          $('.container').removeClass('right-panel-active');
   });

 });