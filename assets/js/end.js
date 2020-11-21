const submitEl = document.querySelector("#btn-submit");
const backEl = document.querySelector("#btn-back");
const nameInput = document.querySelector("#username");
const scoreSpan = document.querySelector("#finalScore");
const msgDiv = document.querySelector("#msg");

const latestScore = localStorage.getItem("latestScore");
const highScoreList = JSON.parse(localStorage.getItem("highScores")) || [];      // To store all values
  
const MAX_HIGH_SCORES = 5;   //Max ranking

/* To display a message after clicking on submit button */
function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
}

scoreSpan.textContent = latestScore; // Display score


submitEl.addEventListener("click", function(event){
  event.preventDefault();
  var userScore = {
    score: latestScore,
    name: nameInput.value.trim(),
  };
  
    
  if (userScore.name == "") {
    displayMessage("error", "Oops! You forgot to enter your username.");
  } else {
    displayMessage("success", "Name recorded. You're now in the high score list.");
    highScoreList.push(userScore);                     // Add new item to array
    highScoreList.sort((a, b) => b.score - a.score);  // Sort by score from the highest to the lowest
    highScoreList.splice(MAX_HIGH_SCORES);            // Remove last

    localStorage.setItem("highScores", JSON.stringify(highScoreList));
    
    // disable mutiple submissions
    submitEl.disabled = "true";
    submitEl.style.opacity = "40%";
    backEl.textContent = "Home"     // Change button text    
   }
});
