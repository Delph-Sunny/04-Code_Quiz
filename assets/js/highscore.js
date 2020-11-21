/* General constants */
const table = document.querySelector("table");
const clearBtn = document.querySelector(".clear");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const ranking = ["1st", "2nd", "3rd", "4th", "5th"]

 
/**** Create table content when recorded scores****/
if (highScores.length !== 0) {
  /* Display header */
  var thead = document.createElement("thead");
  table.appendChild(thead);
  var rowHeader = thead.insertRow(0);
  rowHeader.insertCell(0).outerHTML= "<th>Rank</th>";
  rowHeader.insertCell(1).outerHTML= "<th>Name</th>";
  rowHeader.insertCell(2).outerHTML= "<th>Score</th>";

  /* Display results */
  var tbody = document.createElement("tbody");
  table.appendChild(tbody);
  for (let i=0; i < highScores.length; i++ ){
    let row = tbody.insertRow(i);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    let name = highScores[i].name;
    let score = highScores[i].score;
    let rank = ranking[i]; 
  
    cell1.innerHTML=`${rank}`;
    cell2.innerHTML=`${name}`;
    cell3.innerHTML=`${score}`;
  }
}

/**** Clear all results from screen and storage ****/
clearBtn.addEventListener("click", function(event){
    table.removeChild(tbody);
    table.removeChild(thead);
    localStorage.clear();
    /* Disable btn once used */
    clearBtn.disabled = "true";
    clearBtn.style.opacity = "40%";
    });