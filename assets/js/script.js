var timerEl = document.getElementById("timer");
var startGameBtn = document.getElementById("start-game");
var question = document.getElementById("question");
var answers = document.getElementById("answers");
var welcome = document.getElementById("welcome");


var questions = [
    {
        question1: "How many Super Bowls have the Jets won?",
        answers1: ["1", "2", "3", "4"],
        correctAnswer1: [0]
    },
    {
        question2: "Who was the Jets Quarterback when they won Super Bowl III?",
        answers2: ["Chad Pennington", "Vinny Testeverde", "Joe Namath", "Ray Lucas"],
        correctAnswer2: [2]
    },
    {
        question3: "Who is the Jets all-time leading rusher?",
        answers3: ["Thomas Jones", "Curtis Martin", "Leon Washington", "John Riggins"],
        correctAnswer3: [1]
    },
    {
        question4: "In what year was the franchise founded? (Hint: they were known as the Titans",
        answers4: ["1946", "1959", "1966", "1970"],
        correctAnswer4: [1]
    },
    {
        question5: "Who is the Jets current Head Coach?",
        answers5: ["Todd Bowles", "Rex Ryan", "Mike LaFleur", "Robert Saleh"],
        correctAnswer5: [3]
    }
]

startGameBtn.addEventListener("click", function() {
    countdown();
    welcome.style.display = "none";



})

function countdown() {
    var timeleft = 60;
    var timeInterval = setInterval(function(){
        if (timeleft > 1) {
            timerEl.textContent = timeleft + " seconds left";
            timeleft --;
        }
        else if (timeleft === 1) {
            timerEl.textContent = timeleft + " second";
            timeleft--;
        }
        else {
            timerEl.textContent = "";
            clearInterval(timeInterval);
    
        }
    }, 1000);
}
