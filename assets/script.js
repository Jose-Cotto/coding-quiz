"use strict";
//Timer
var timerEl = document.getElementById("timer");
//view high score link
var ViewHsEl = document.getElementById("highscore");
//start quiz button
var startQuizEl = document.getElementById("start-button");
//container for the landing page
var homeContainerEl = document.getElementById("homepage-container");
// quiz questions and answers container
var quizContainerEl = document.getElementById("quiz-container");
//quiz question container
var quizQuestionEl = document.getElementById("quiz-question");
//answer button containers
var answerOne = document.getElementById("answer-button1");
var answerTwo = document.getElementById("answer-button2");
var answerThree = document.getElementById("answer-button3");
var answerFour = document.getElementById("answer-button4");
//quiz answer container to listen for clicks in the container
var answerContainer = document.getElementById("ques-answer-container");
//timer
var time = 60;
//object containing all questions, possible answers and the actual answer

var quizQuestions = [
	{
		question: "when was javascript created?",
		choices: [
			"A . 2001",
			"B . 2009",
			"C . It was always present",
			"D . 1995",
		],
		answer: "D. 1995",
	},
	{
		question: "Inside of which HTML element do we put the JavaScript link?",
		choices: [
			"A . <JS>",
			"B . <JavaScript",
			"C . <Scripting>",
			"D . <Script>",
		],
		answer: "D. <script>",
	},
	{
		question: "Arrays in JavaScript can be used to store ________",
		choices: [
			"A . strings ",
			"B . objects",
			"C .arrays",
			"D . All of the above",
		],
		answer: "D. All of the above",
	},
	{
		question: "Commonly used data types do not include?",
		choices: ["A . strings", "B . booleans", "C . alerts", "D . numbers"],
		answer: "C. alerts",
	},
];

var currentQuestion = 0;

function renderQuestions() {
	quizQuestionEl.textContent = quizQuestions[currentQuestion].question;
	answerOne.textContent = quizQuestions[currentQuestion].choices[0];
	answerTwo.textContent = quizQuestions[currentQuestion].choices[1];
	answerThree.textContent = quizQuestions[currentQuestion].choices[2];
	answerFour.textContent = quizQuestions[currentQuestion].choices[3];

	answerContainer.addEventListener("click", function (event) {
		var element = event.target;

		if (element.textContent.matches(quizQuestions[currentQuestion].answer)) {
			answerCheck();
		}
	});
}

//listens for click on the start quiz button and runs function provided
startQuizEl.addEventListener("click", startQuiz);
function startQuiz() {
	//start timer
	startTimer();
	//de render landing page
	homeContainerEl.style.display = "none";
	//render questions container
	quizContainerEl.style.display = "flex";
	// run function to load random answers and questions and listen for correct answers. This function should also have the conditions to change questions and answers if a button is pressed and render the feed back (right or wrong) under the questions.
	renderQuestions();
	//call function that renders finalscore page
}

function startTimer() {
	var timerInterval = setInterval(function () {
		//add condition where if answer is incorrect subtract 5 seconds
		time--;
		timerEl.textContent = time;

		if (time === 0) {
			clearInterval(timerInterval);
		}
	}, 1000);
}

function answerCheck() {
    
}

