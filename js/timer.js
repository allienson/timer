$('#start').click(function(){

  isPaused = 0;

  $(this).hide();

  $('#pause').click(function(){
    if(!isPaused){
      isPaused = 1;
    } else {
      isPaused = 0;
    }
  });

  $('#reset').click(function(){
    clearInterval(timeinterval);
    $('.hours').html('00'); 
    $('.minutes').html('00');
    $('.seconds').html('00');
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
    var clock = document.getElementById(id);
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    timeinterval = setInterval(function(){
      if(!isPaused){
        var t = getTimeRemaining();
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }
      console.log(t);
    }, 1000);
  }

  var hour_val = $('#setHour').val();
  var min_val = $('#setMin').val();

  deadline = (hour_val * 3600 * 1000) + (min_val * 60 * 1000);
  initializeClock('clockdiv');

});