var timerEl = $("#timer");
var startGameBtn = document.getElementById("start-game");
var questionEl = document.getElementById("question");
var answersEl = document.getElementById("answer-options");
var welcome = document.getElementById("welcome");
var highScores = document.getElementById("highscore");

var correct = 0

var li0 = document.getElementById("a");
var li1 = document.getElementById("b");
var li2 = document.getElementById("c");
var li3 = document.getElementById("d");

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

// console.log(timerEl)
// console.log(questions[0])

//click events- everytime an answer is selected the next question qill pop up
startGameBtn.addEventListener("click", gameLogic)

var questionIndex = 0;

function gameLogic() {
    countdown();
    welcome.style.display = "none";

    rendersNextQuestion();  

}

function rendersNextQuestion() {
    var currentQuestion = questions[questionIndex];
    var currentAnswers = currentQuestion.answers;
   
    questionEl.textContent = currentQuestion.question;
    
    $("li").get(questionIndex);

    for (var i = 0; i < currentAnswers.length; i++) {
        $("li").get(i).text(currentAnswers[i]);
    }
    // answersEl.textContent = currentQuestion.answers;
}
//attach an event listener, when the "next" button is click it calls rendered next q again; nedd quesitonIndex ++;

//sets my timer- i run this funcion when the start-game button is clicked
function countdown() {
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

        }
    }, 1000);
}











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