var timerEl = document.getElementById("timer");
var startGameBtn = document.getElementById("start-game");
var question = document.getElementById("question");
var answers = document.getElementById("answer-options");
var welcome = document.getElementById("welcome");

var li1 = document.getElementById("a");
var li2 = document.getElementById("b");
var li3 = document.getElementById("c");
var li4 = document.getElementById("d");


// console.log(questions[0])
startGameBtn.addEventListener("click", function() {
    countdown();
    welcome.style.display = "none";
    questionAnswer(question1, answers1)

    




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

function questionAnswer(questionStr, answersStr) {
    question.textContent = questionStr;
    li1.textContent = answersStr[0];
    li2.textContent = answersStr[1];
    li3.textContent = answersStr[2];
    li4.textContent = answersStr[3];
}



var question1 = "How many Super Bowls have the Jets won?";
var answers1 = ["1", "2", "3", "4"];

console.log(answers1[0])





// var questions = [
//     {
//         question1: "How many Super Bowls have the Jets won?",
//         answers1: ["1", "2", "3", "4"],
//         correctAnswer1: [0]
//     },
//     {
//         question2: "Who was the Jets Quarterback when they won Super Bowl III?",
//         answers2: ["Chad Pennington", "Vinny Testeverde", "Joe Namath", "Ray Lucas"],
//         correctAnswer2: [2]
//     },
//     {
//         question3: "Who is the Jets all-time leading rusher?",
//         answers3: ["Thomas Jones", "Curtis Martin", "Leon Washington", "John Riggins"],
//         correctAnswer3: [1]
//     },
//     {
//         question4: "In what year was the franchise founded? (Hint: they were known as the Titans",
//         answers4: ["1946", "1959", "1966", "1970"],
//         correctAnswer4: [1]
//     },
//     {
//         question5: "Who is the Jets current Head Coach?",
//         answers5: ["Todd Bowles", "Rex Ryan", "Mike LaFleur", "Robert Saleh"],
//         correctAnswer5: [3]
//     }
// ]
