const highScoreList = document.querySelector("ul");
const clearBtn = document.querySelector(".clear");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];


/*var li = document.createElement("li");
li.classList.add("score");
li.textContent =`${highScores.name} - ${highScores.score}`;
li.setAttribute("id", "index"+ index);
highScoreList.appendChild(li); */


highScoreList.innerHTML = highScores.map(
    highScores => {
    return `<li class="score"><i class="material-icons">grade</i>${highScores.name} --- ${highScores.score}</li>`;
  })
  .join("");

//Clear all results from screen and storage
clearBtn.addEventListener("click", function(event){
    highScoreList.parentNode.removeChild(highScoreList);
    localStorage.clear();
    // disable btn once used
    clearBtn.disabled = "true";
    clearBtn.style.opacity = "40%";
    });