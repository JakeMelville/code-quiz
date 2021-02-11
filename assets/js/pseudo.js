//==================
// GLOBEL VARIABLES
//==================

// Variables for application state
// 1. index to the current question in the array of question objects
// 2. time to keep track of the time left. this variable will be decremented every sec
// 3. timer id to store the timer in order to be used to stop the timer 
var currentQuestionIndex = 0;
var time = questionObjArr.length * 15;
var timerId;

// Variables to reference DOM elements using document.getElementById()
// 1. element for questions to display question and its choices
// 2. element for timer
// 3. element for question choices
// 4. element for submit button after initials entered
// 5. element for start button
// 6. element for feedback display

// ==================
// MAIN PROCESS
// ==================

function startQuiz() {
    // hide start quiz screen
    // 1. get DOM element
    // 2. set attribute "class" to "hide"

    // un-hide questions section by removing class attrib

    // start timer - calling start timer function

    // get question - calling get quesiton function
}

function startTimer() {
    timerId = setInterval(updateTime, 1000);
}

function updateTime() {
    // decrement time
    time--;

    // display time to web page with timer DOM element textContent
    timerEl.textContent = time;
  
    // check if user ran out of time (time <= 0)
    // call quizEnd function if true
    if (time <= 0) {
      quizEnd();
    }
  }

// =================
// EVENT LISTERNERS
// =================

// user clicks buttion to start quiz

// user clicks button to submit initials

// user clicks button to answer choice





