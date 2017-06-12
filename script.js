"use strict";

function start() {
  var input = document.getElementById("input").value;
  var timeLeft = (60 * input);
  if (timeLeft != Math.floor(timeLeft)) {
    alert("whl nmbrz ony plz");
    document.getElementById("input").value = Math.floor(input);
  } else {
    document.getElementById("timer").classList.remove('hide');
    document.getElementById("start").classList.add('hide');
    document.getElementById("input").classList.add('hide');
    document.getElementById("minutes").classList.add('hide');
    updateDisplay();
    var clock = setInterval(function () {
      if (timeLeft == 0) {
        clearInterval(clock);
        alert('your tomato is done, sir');
        document.getElementById("timer").classList.add('clicky');
        document.getElementById("timer").addEventListener("click", ()=>{
          document.getElementById("start").classList.remove('hide');
          document.getElementById("minutes").classList.remove('hide');
          document.getElementById("input").classList.remove('hide');
          document.getElementById("timer").classList.add('hide');
          document.getElementById("timer").classList.remove('clicky');
        });
      } else {
        timeLeft += -1;
        updateDisplay();
      }
    }, 1000);
  }
  function updateDisplay() {
    var seconds = timeLeft % 60;
    if (seconds < 10) {
      seconds = ("0" + String(seconds));
    }
    var minutes = Math.floor(timeLeft / 60);
    document.getElementById("timer").innerHTML = minutes + ":" + seconds;
  }
}
