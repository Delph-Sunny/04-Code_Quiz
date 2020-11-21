const questionEl = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-txt"));
const countdownBox = document.querySelector(".timer");


let currentQuestion = {};
let acceptingAnswers = false;
let questionCounter = 0;
let availableQuestions = [];

let interval;
const startingMinutes = 1;          // Initial timer in minutes
let time = startingMinutes * 60;     // conversion of minutes into seconds


/**** Start the timer and display in min and s ****/
function startTimer() {
  interval = setInterval(function(){         // Interval time of clock at every 1000 millisecond
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;
    // Adding leading 0
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    if (time >= 0){                         // Only display positive time
    countdownBox.value = `Time: ${minutes}:${seconds}`;
    }
    if (--time <= 0) {                      // Stop timer as soon as negative value
      clearInterval(interval);
    }
  }, 1000);  
}


/* Stop timer and record score in s  
function stopTimer() {
    score = time;
    clearInterval(interval); 
}*/
 

/* Quiz questions */
let questions = [
    {
      question: "Commonly used data types do not include:",
      choice1: "strings",
      choice2: "alerts",
      choice3: "booleans",
      choice4: "numbers",
      answer: 2
    },
    {
      question: "The condition in an if / else statement is enclosed within __",
      choice1: "quotes",
      choice2: "curly brackets",
      choice3: "parentheses",
      choice4: "square brackets",
      answer: 3
    },
    {
      question: "Arrays in JavaScript can be used to store __",
      choice1: "numbers and strings",
      choice2: "other arrays",
      choice3: "booleans",
      choice4: "all of the above",
      answer: 2
    },
    {
      question: "String values must be enclosed within ___ when being assigned to variables.",
      choice1: "curly brackets",
      choice2: "commas",
      choice3: "quotes",
      choice4: "parentheses",
      answer: 1
    },
    {
      question: "A very useful tool used during development and debugging for printing content to the debugger is:",
      choice1: "JavaScript",
      choice2: "terminal / bash",
      choice3: "for loops",
      choice4: "console.log",
      answer: 4
    }
];

/*let score = {                // To store all values
  userScore: 0
} */

//CONSTANTS
const NBQUESTIONS = 5;
const PENALTY = 10; 

function startGame() {
    startTimer()
    questionCounter = 0;
    availableQuestions = [...questions]; //copy the questions array
    newQuestion();
};

function newQuestion() {
    if (questionCounter >= NBQUESTIONS || time < 0) {
      if (time < 0 ) { time = 0 }     // Setting time to 0 if negative value
      localStorage.setItem("latestScore", time);
      return window.location.assign("./end.html"); //go to the end page
    }
    questionCounter++; 
    /* shuffling questions */
    const questionIndex = Math.floor(Math.random() * availableQuestions.length); // random index
    
    currentQuestion = availableQuestions[questionIndex];
    questionEl.innerText = currentQuestion.question;
    /* Fill the choices matching the question above */
    choices.forEach( function(choice) {
        const number = choice.dataset["number"];    //get the data-number vlaue property
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);  //Remove the used question from the array
    acceptingAnswers = true;   
};

choices.forEach( function(choice) {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;
    
    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];
    let classToApply = "wrong";
    
    /* Check if answer is correct */
    if (selectedAnswer == currentQuestion.answer){
      classToApply = "correct";
    }
    if (classToApply ==="wrong") {
      time-=PENALTY;
    }

    selectedChoice.parentElement.classList.add(classToApply);

    /* Display color red or green for 1 second */
    setTimeout(function() {
      selectedChoice.parentElement.classList.remove(classToApply);
      newQuestion();
    }, 1000);
  });
});


startGame();

