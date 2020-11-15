const startButton = document.querySelector("#start");
const questionContainerElement = document.querySelector("#question-container")
const countdownBox = document.querySelector(".clock");

const startingMinutes = 5;          // Initial timer in minutes
var time = startingMinutes * 60;     // conversion of minutes into seconds

startButton.addEventListener("click", function () {
  startGame();
  startClock()
});

function startClock() {
  setInterval(function(){                           // Interval time of clock at every 1000 millisecond
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;
    // Adding leading 0
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    countdownBox.value = `${minutes}:${seconds}`;
    time--;
  }, 1000);  
  
    
}


function startGame(){

}