$('#start').click(function(){

  isPaused = 0;

  $(this).prop('hidden', true);
  $('#plus-1').prop('hidden', false);
  $('#pause').prop('hidden', false);

  $('#plus-1').click(function(){
    deadline += 60 * 1000;
  });

  $('#pause').click(function(){
    if(!isPaused){
      isPaused = 1;
      $('#plus-1').prop('hidden', true);
      $('#reset').prop('hidden', false);
    } else {
      isPaused = 0;
      $('#plus-1').prop('hidden', false);
      $('#reset').prop('hidden', true);
    }
  });

  $('#reset').click(function(){
    resetTimer();
  });

  function getTimeRemaining() {
    
      deadline -= 1000;

      var seconds = Math.floor((deadline / 1000) % 60);
      var minutes = Math.floor((deadline / 1000 / 60) % 60);
      var hours = Math.floor((deadline / (1000 * 60 * 60)) % 24);
      return {
        'total': deadline,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
  }

  function initializeClock(id) {

    timeinterval = setInterval(function(){
      if(!isPaused){
        var t = getTimeRemaining();
        
        $('.hours').val(('0' + t.hours).slice(-2));
        $('.minutes').val(('0' + t.minutes).slice(-2));
        $('.seconds').val(('0' + t.seconds).slice(-2));

        if (t.total <= 0) {
          resetTimer();
          alert("Cabou");
        }
      }
      console.log(t);
    }, 1000);
  }

  function resetTimer(){
    clearInterval(timeinterval);
    $('.hours').val(''); 
    $('.minutes').val('');
    $('.seconds').val('');
    
    $(this).prop('hidden', true);
    $('#pause').prop('hidden', true);
    $('#plus-1').prop('hidden', false);
    $('#start').prop('hidden', false);

  }

  var hour_val = $('.hours').val();
  var min_val = $('.minutes').val();
  var sec_val = $('.seconds').val();

  deadline = (hour_val * 3600 * 1000) + (min_val * 60 * 1000) + (sec_val * 1000);
  initializeClock('clockdiv');

});