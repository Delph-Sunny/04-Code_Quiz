const highScoreList = document.querySelector("ul");
const highScores = JSON.parse(localStorage.getItem("user")) || [];

let index;
console.log(highScores); // TO TEST
 
//Array to store

var li = document.createElement("li");
li.textContent =`<li class="score">${highScores.name} - ${highScores.score}</li>`;
li.setAttribute("id", "index"+ index);
highScoreList.appendChild(li);
