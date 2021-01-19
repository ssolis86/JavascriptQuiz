//Assignment Code
var startBtn = document.querySelector("#startButton");
var timerEl = document.getElementById("countdown");
var optionA = document.getElementById("optionA");
var optionB = document.getElementById("optionB");
var optionC = document.getElementById("optionC");
var optionD = document.getElementById("optionD");
var questionText = document.getElementById("quiz-question");


startBtn.addEventListener("click",initiateQuiz);


function initiateQuiz() {
   
    var timeLeft = 10;
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
    
}

function nextQuestion(){
    

}

function answer(){

}