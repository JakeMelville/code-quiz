var hsScore = document.getElementById("postQuizScore");
var hsInit = document.getElementById("postQuizInitials");

hsInit.textContent = "Initials: " + localStorage.getItem("Initials: ")
hsScore.textContent = "Score: " + localStorage.getItem("Score: ")