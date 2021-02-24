var timerEl = $("#timer");   //timer variable using j query
var startGameBtn = document.getElementById("start-game"); //these are my 2 buttons, nextBtn hidden until start game is pressed
var nextBtn = document.getElementById("next");
nextBtn.style.display = "none";
var welcome = document.getElementById("welcome");
var highScores = document.getElementById("highscore");
var qA = document.querySelector(".question-answer");
var endGame = document.getElementById(".end-game");
var correct = 0

var questionIndex = 0;      //start index at zero- when the nextBtn is clicked questionIndex++; i then use this number for my if statements 
var answerOptionsIndex = 0;
var currentAnswersIndex = 0;


var questions = [
    {
        question: "How many Super Bowls have the Jets won?",
        answers: ["1", "2", "3", "4"],
        correctAnswer: 0
    },
    {
        question: "Who was the Jets Quarterback when they won Super Bowl III?",
        answers: ["Chad Pennington", "Vinny Testeverde", "Joe Namath", "Ray Lucas"],
        correctAnswer: 2
    },
    {
        question: "Who is the Jets all-time leading rusher?",
        answers: ["Thomas Jones", "Curtis Martin", "Leon Washington", "John Riggins"],
        correctAnswer: 1
    },
    {
        question: "In what year was the franchise founded? (Hint: they were known as the Titans",
        answers: ["1946", "1959", "1966", "1970"],
        correctAnswer: 1
    },
    {
        question: "Who is the Jets current Head Coach?",
        answers: ["Todd Bowles", "Rex Ryan", "Mike LaFleur", "Robert Saleh"],
        correctAnswer: 3
    }
]
console.log(questions[0].correctAnswer);


function startGame() {    //this function runs when the start button is pressed
    countdown();            //this is my timer countdown 
    welcome.style.display = "none";
    nextBtn.style.display = "flex";
    setQuestion();
}

function countdown() {              //countdown function created using set interval
    var timeleft = 60;
    var timeInterval = setInterval(function () {
        if (timeleft > 1) {
            timerEl.text(timeleft + " seconds left");
            timeleft--;
        }
        else if (timeleft === 1) {
            timerEl.text(timeleft + " second");
            timeleft--;
        }
        else {
            timerEl.text("");
            clearInterval(timeInterval);
            quizEnd();

        }
    }, 1000);
}

var ans0 = document.getElementById("ans-0");
var ans1 = document.getElementById("ans-1");
var ans2 = document.getElementById("ans-2");
var ans3 = document.getElementById("ans-3");
var counter = document.querySelector(".counter");
var nextQ = document.getElementById("next-q");
var qNext = document.getElementById("q-next");

var score = 0;

function setQuestion() {
    var currentQuestion = questions[questionIndex];
    $("#question").text(currentQuestion.question);
    var currentAnswers = questions[answerOptionsIndex];
    var correctAnswerIndex = 0;
    nextQ.classList.add("d-none");
    qNext.classList.add("d-none");

    for (var i = 0; i < 4; i++) {
        document.getElementById(`ans-${i}`).textContent = questions[answerOptionsIndex].answers[i];
        questions[questionIndex].correctAnswer
    }
    for (var j = 0; j < questions.length; j++) {
        ans0.addEventListener("click", function () {
            // console.log(correctAnswerIndex)
            if (questions[j].correctAnswer === 0) {
                console.log("correct answer", questions[j].correctAnswer)
                nextQ.classList.remove("d-none")
            }
            else {
                qNext.classList.remove("d-none")
            }

        })
        ans1.addEventListener("click", function () {
            if (questions[j].correctAnswer === 1) {
                console.log("correct answer", questions[j].correctAnswer)
                nextQ.classList.remove("d-none")
            }
            else {
                qNext.classList.remove("d-none")
            }

        })
        ans2.addEventListener("click", function () {
            if (questions[j].correctAnswer === 2) {
                console.log("correct answer", questions[j].correctAnswer)
                nextQ.classList.remove("d-none")
            }
            else {
                qNext.classList.remove("d-none")
            }

        })
        ans3.addEventListener("click", function () {
            if (questions[j].correctAnswer === 3) {
                console.log("correct answer", questions[j].correctAnswer)
                nextQ.classList.remove("d-none")
            }
            else {
                qNext.classList.remove("d-none")
            }

        })

    }

    console.log(correctAnswerIndex)

    questionIndex++;
    answerOptionsIndex++;
    correctAnswerIndex++;

}

console.log(typeof questions[0].correctAnswer)

function quizEnd() {
    endGame.classList.remove("d-none");
}


startGameBtn.addEventListener('click', startGame);   //start button initiates the game
nextBtn.addEventListener('click', setQuestion, counter)       //nextBtn cylces through the question


// ans1.addEventListener("click", function() {
//     console.log("ans-1 selected")
// })
// ans2.addEventListener("click", function() {
//     console.log("ans-2 selected")
// })
// ans3.addEventListener("click", function() {
//     console.log("ans-3 selected")
// })













    // var choicesbtn = document.createElement("button");
    // choicesbtn.setAttribute("data-answer", currentQuestion.answers[i]);
    // choicesbtn.textContent = currentQuestion.answers[i];
    // //put event listener in the button, clear whatever is inside, using hide 
    // $("#answers").append(choicesbtn);









// function rendersNextQuestion() { //how I determine which questions will show when. 
//     //all these if's are checking my questionIndex variable (this variable increases by 1 everytime the nextBtn is clicked)
//     if (questionIndex === 0) {
//         questionEl.textContent = questions[0];
//         formQ1.textContent = answerOptions[0];
//     }
//     if (questionIndex === 1) {
//         questionEl.textContent = questions[1];
//         formQ1.textContent = answerOptions[1];
//     }
//     if (questionIndex === 2) {
//         questionEl.textContent = questions[2];
//         formQ1.textContent = answerOptions[2];
//     }
//     if (questionIndex === 3) {
//         questionEl.textContent = questions[3];
//         formQ1.textContent = answerOptions[3];
//     }
//     if (questionIndex === 4) {
//         questionEl.textContent = questions[4];
//         formQ1.textContent = answerOptions[4];
//     }
//     if (questionIndex === 5) {
//         href = "highscore.html"
//     }
// }
// var currentQuestion = questions[questionIndex];
// for (var i = 0; i < questions.length; i++) {
//     console.log(currentQuestion);
// }

// console.log(answerOptions[4][0]);



// everything below is code that I was messing around with trying to get his quiz to work.






// answersEl.textContent = currentQuestion.answers;

//attach an event listener, when the "next" button is click it calls rendered next q again; nedd quesitonIndex ++;

//sets my timer- i run this funcion when the start-game button is clicked






//this function sets the value to the li tags in the html. They are currently empty.
// function questionAnswer(questionStr, answersStr) {
//     question.textContent = questionStr;
//     li1.textContent = answersStr[0];
//     li2.textContent = answersStr[1];
//     li3.textContent = answersStr[2];
//     li4.textContent = answersStr[3];
// }






// questionAnswer(question1, answers1);

//   answers.addEventListener("click", function() {
//     questionAnswer(question2, answers2);    

//     answers.addEventListener("click", function() {
//         questionAnswer(question3, answers3);

//         answers.addEventListener("click", function() {
//             questionAnswer(question4, answers4);


//             answers.addEventListener("click", function() {
//                 questionAnswer(question5, answers5);


//                 answers.addEventListener("click", function() {
//                     //NEED TO LINK HERE TO HIGH SCORES PAGE
//                 })
//             })
//         })
//     })
// })




// var questions = [
//     {
//         question: "How many Super Bowls have the Jets won?",
//         answers: ["1", "2", "3", "4"],
//         correctAnswer: 0
//     },
//     {
//         question: "Who was the Jets Quarterback when they won Super Bowl III?",
//         answers: ["Chad Pennington", "Vinny Testeverde", "Joe Namath", "Ray Lucas"],
//         correctAnswer: 2
//     },
//     {
//         question: "Who is the Jets all-time leading rusher?",
//         answers: ["Thomas Jones", "Curtis Martin", "Leon Washington", "John Riggins"],
//         correctAnswer: 1
//     },
//     {
//         question: "In what year was the franchise founded? (Hint: they were known as the Titans",
//         answers: ["1946", "1959", "1966", "1970"],
//         correctAnswer: 1
//     },
//     {
//         question: "Who is the Jets current Head Coach?",
//         answers: ["Todd Bowles", "Rex Ryan", "Mike LaFleur", "Robert Saleh"],
//         correctAnswer: 3
//     }
// ]

// var questions = [     //questions stored as an array of strings
//     "How many Super Bowls have the Jets won?",
//     "Who was the Jets Quarterback when they won Super Bowl III?",
//     "Who is the Jets all-time leading rusher?",
//     "In what year was the franchise founded? (Hint: they were known as the Titans",
//     "Who is the Jets current Head Coach?"
// ]
// var answerOptions = [    //answers stored in an array of arrays
//     ["1", "2", "3", "4"],
//     ["Chad Pennington", "Vinny Testeverde", "Joe Namath", "Ray Lucas"],
//     ["Thomas Jones", "Curtis Martin", "Leon Washington", "John Riggins"],
//     ["1946", "1959", "1966", "1970"],
//     ["Todd Bowles", "Rex Ryan", "Mike LaFleur", "Robert Saleh"]
// ]

// console.log(answerOptions);