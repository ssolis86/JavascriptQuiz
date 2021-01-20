//Assignment Code
var startBtn = document.querySelector("#startButton");
var timerEl = document.getElementById("countdown");
var optionA = document.getElementById("optionA");
var optionB = document.getElementById("optionB");
var optionC = document.getElementById("optionC");
var optionD = document.getElementById("optionD");
var questionText = document.getElementById("quiz-question");
var questionBank = ["2 + 2 ", "I ate "];
var answerA = ["3 ", "answer"];
var answerB = ["4 ", "blach"];
var answerC = ["2 ", "answer"];
var answerD = ["1 ", "answer"];
var answersArray = ["4 ", "blah"];
var userScore = 0;
var timeLeft = 10;

startBtn.addEventListener("click",initiateQuiz);


function initiateQuiz() {
   
    
    var timeInterval = setInterval(function() {
      
    if(timeLeft !== 0){
        --timeLeft;
        timerEl.textContent = timeLeft + " :seconds remaining";
    }
    
    }, 1000);

    questionText.style.display = "block";
    optionA.style.display = "block";
    optionB.style.display = "block";
    optionC.style.display = "block";
    optionD.style.display = "block";
    startBtn.style.display = "none";

    questionOne();    
}

function questionOne() {

    questionText.textContent = questionBank[0];
    optionA.textContent = answerA[0];
    optionB.textContent = answerB[0];
    optionC.textContent = answerC[0];
    optionD.textContent = answerD[0];
    
    function userAlert(event) {
        
        if (answersArray[0] === event.target.textContent) {
            document.getElementById("indicator-div").textContent = "Your're Right";
            userScore++;
        }
        else {
            document.getElementById("indicator-div").textContent = "Your're Wrong";
            timeLeft = timeLeft-5;
        }
        questionTwo();
    }
    

    optionA.addEventListener("click", userAlert);
    optionB.addEventListener("click", userAlert);
    optionC.addEventListener("click", userAlert);
    optionD.addEventListener("click", userAlert);


}



function questionTwo() {

    questionText.textContent = questionBank[1];
    optionA.textContent = answerA[1];
    optionB.textContent = answerB[1];
    optionC.textContent = answerC[1];
    optionD.textContent = answerD[1];

    optionD.addEventListener("click", questionTwo);

}
