var submitEl = document.querySelector("#submit");
var nameInput = document.querySelector("#username");
var msgDiv = document.querySelector("#msg");
var timer =8;


function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
}

submitEl.addEventListener("click", function(event){
    event.preventDefault();
    console.log(event);         //TO TEST
    if (nameInput.value === "") {
        displayMessage("error", "username cannot be blank");
      } else {
        displayMessage("success", "");
        localStorage.setItem("score", timer);
        localStorage.setItem("name", name);
        }
});



    