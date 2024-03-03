"use strict"
//Timer 
var timerEl = document.getElementById("timer")
//view high score link
var ViewHsEl = document.getElementById("highscore")
//start quiz button 
var startQuizEl = document.getElementById("start-button")
//container for the landing page
var homeContainerEl = document.getElementById("homepage-container")
// quiz questions and answers container
var quizContainerEl = document.getElementById("quiz-container")
//timer
var time = 60;
//object containing all questions, possible answers and the actual answer 

var quizQuestions = { 
}






//listens for click on the start quiz button and runs function provided
startQuizEl.addEventListener("click", startQuiz) 
function startQuiz() {
    //start timer 
    startTimer();
    //de render landing page
    homeContainerEl.style.display = "none"
     //render questions container 
    quizContainerEl.style.display = "flex"
    // run function to load random answers and questions and listen for correct answers. This function should also have the conditions to change questions and answers if a button is pressed and render the feed back (right or wrong) under the questions.

    //call function that renders finalscore page 
   
}

function startTimer() {
    var timerInterval = setInterval(function () {
        //add condition where if answer is incorrect subtract 5 seconds
        time--;
        timerEl.textContent = time

        if (time === 0) {
            clearInterval(timerInterval)
        }

    }, 1000)
}

