function updateTimer(deadline) {
  var time = deadline - new Date();
  return {
    'days': Math.floor(time/(1000 * 60 * 60 * 24)),
    'hours': Math.floor( (time/(1000 * 60 * 60)) % 24),
    'minutes': Math.floor( (time/1000/60) % 60),
    'seconds': Math.floor( (time/1000) % 60),
    'total': time
  };
}

function animateClock(span){
  span.className = "turn";
  setTimeout(function(){
    span.className = "";
  },700);
}

function startTimer(id, deadline){
  var timerInterval = setInterval(function(){
    var clock = document.getElementById(id);
    var timer = updateTimer(deadline);

    clock.innerHTML = '<span>' + timer.days + '</span>'
                    + '<span>' + timer.hours + '</span>'
                    + '<span>' + timer.minutes + '</span>'
                    + '<span>' + timer.seconds + '</span>';

   // Animation states
    var spans = clock.getElementsByTagName("span");
    animateClock(spans[3]); // Animates seconds unit every second.
    if(timer.seconds == 59) animateClock(spans[2]); // When seconds hits 59, animate minutes also.
    if(timer.minutes == 59 && timer.seconds == 59) animateClock(spans[1]);
    if(timer.hours == 23 && timer.minutes == 59 && timer.seconds == 59) animateClock(spans[0]); 

    //check for end of timer
    if(timer.total < 1){
      clearInterval(timerInterval);
      clock.innerHTML = '<span>0</span><span>0</span><span>0</span><span>0</span>';
    }


  }, 1000);
}

window.onload = function() { // /When the windown loads, run...
  var deadline = new Date("November 24 2016 01:00:00 AM");
  startTimer("clock", deadline);
}

