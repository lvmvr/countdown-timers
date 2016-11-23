var countdown = function(end, elements, callback) {
  // Decalre variables for timing
  var _second = 1000,
      _minute = _second * 60,
      _hour = _minute * 60,
      _day = _hour * 24,

      end = new Date(end),
      timer,

      calculate = function() {

        var now = new Date(),
            remaining = end.getTime() - now.getTime(),
            // Will store day, time, minute, etc.
            data;

        if (isNaN(end)) {
          console.log('Invalid date and/ or time.');
          return;
        }

        // Is there time left on the timer? 
        if (remaining <= 0) {
          clearInterval(timer);

          // Don't call it a callback! But check anyways...
          if (typeof callback === 'function') {
            callback();
          }


        } else if (!timer) { // if the timer isn't set...
          timer = setInterval(calculate, _second); // run every second 
        } else {
          data = {
            "days":    Math.floor(remaining / _day),
            "hours":   Math.floor((remaining % _day) / _hour),
            "minutes": Math.floor((remaining % _hour) / _minute),
            "seconds": Math.floor((remaining % _minute) / _second)        
          }

          if (elements.length) {
            for (i in elements) {
              var x = elements[i];
              data[x] = ('00' + data[x]).slice(-2);
              document.getElementById(x).innerHTML = data[x];
            }
          }
        }

      };

  calculate();
}










