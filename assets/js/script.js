// Countdown timer
const startingMinutes = 5;
var time = startingMinutes * 60;

const countdownBox = document.getElementById("clock");


function timerUpdate() {
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;
   // Adding leading 0
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
   
    countdownBox.textContent = `${minutes}:${seconds}`;
    time--;
}

setInterval(timerUpdate, 1000);  // Interval time at every 1000 millisecond

