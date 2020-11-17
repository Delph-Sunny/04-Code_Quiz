const highScoreList = document.querySelector("#highscoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];



console.log(highScores); // TO TEST
           

var li = document.createElement("li");
li.textContent =`<li class="score">${scores.name} - ${score.score}</li>`;

const score = {
    score: mostRecentScore,
    name: username.value
}