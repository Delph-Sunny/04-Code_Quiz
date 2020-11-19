const submitEl = document.querySelector("#btn-submit");
const backEl = document.querySelector("#btn-back");
const nameInput = document.querySelector("#username");
const scoreSpan = document.querySelector("#finalScore");
const msgDiv = document.querySelector("#msg");

let user = JSON.parse(localStorage.getItem("score"));      // To store all values
  


/* To display a message after clicking on submit button */
function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
}

scoreSpan.textContent = user.userScore; // Display score


submitEl.addEventListener("click", function(event){
    event.preventDefault();
    user.userName= nameInput.value.trim()
    
    if (user.userName == "") {
        displayMessage("error", "Oops! You forgot to enter your username.");
      } else {
        displayMessage("success", "Name recorded. You're now in the high score list.");
        localStorage.setItem("user", JSON.stringify(user));
        // disable mutiple submissions
        submitEl.setAttribute = "disabled";
        submitEl.style.opacity = "40%"
        backEl.textContent = "Home"     // Change button text
        // Or return window.location.assign("./scores.html");
      }
});
