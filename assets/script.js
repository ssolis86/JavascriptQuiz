//Assignment Code
var startBtn = document.querySelector("#startButton");
var timerEl = document.getElementById("countdown");
var optionA = document.getElementById("optionA");
var optionB = document.getElementById("optionB");
var optionC = document.getElementById("optionC");
var optionD = document.getElementById("optionD");
var questionText = document.getElementById("quiz-question");
var questionBank = 
["1.) What is the correct JavaScript syntax to write Hello World?", 
"2.) Inside which HTML element do we put the JavaScript?",
""];
var answerA = ["System.out.println ('Hello World')", "<js>"];
var answerB = ["println ('Hello World')", "<scripting>"];
var answerC = ["document.write('Hello World')", "<script>"];
var answerD = ["response.write('Hello World') ", "<javascript>"];
var answersArray = ["4 ", "blah"];
var userScore = 0;
var timeLeft = 30;

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
    
    function userAlert(event) {
        
        if (answersArray[1] === event.target.textContent) {
            document.getElementById("indicator-div").textContent = "Your're Right";
            userScore++;
        }
        else {
            document.getElementById("indicator-div").textContent = "Your're Wrong";
            timeLeft = timeLeft-5;
        }
        questionThree();
    }
    

    optionA.addEventListener("click", questionTwo);
    optionB.addEventListener("click", questionTwo);
    optionC.addEventListener("click", questionTwo);
    optionD.addEventListener("click", questionTwo);

}

function questionThree() {

    questionText.textContent = questionBank[2];
    optionA.textContent = answerA[2];
    optionB.textContent = answerB[2];
    optionC.textContent = answerC[2];
    optionD.textContent = answerD[2];
    
    function userAlert(event) {
        
        if (answersArray[2] === event.target.textContent) {
            document.getElementById("indicator-div").textContent = "Your're Right";
            userScore++;
        }
        else {
            document.getElementById("indicator-div").textContent = "Your're Wrong";
            timeLeft = timeLeft-5;
        }
        questionFour();
    }
    

    optionA.addEventListener("click", questionThree);
    optionB.addEventListener("click", questionThree);
    optionC.addEventListener("click", questionThree);
    optionD.addEventListener("click", questionThree);

}

function questionFour() {

    questionText.textContent = questionBank[3];
    optionA.textContent = answerA[3];
    optionB.textContent = answerB[3];
    optionC.textContent = answerC[3];
    optionD.textContent = answerD[3];
    
    function userAlert(event) {
        
        if (answersArray[3] === event.target.textContent) {
            document.getElementById("indicator-div").textContent = "Your're Right";
            userScore++;
        }
        else {
            document.getElementById("indicator-div").textContent = "Your're Wrong";
            timeLeft = timeLeft-5;
        }
        questionFive();
    }
    

    optionA.addEventListener("click", questionFour);
    optionB.addEventListener("click", questionFour);
    optionC.addEventListener("click", questionFour);
    optionD.addEventListener("click", questionFour);

}

function questionFive() {

    questionText.textContent = questionBank[4];
    optionA.textContent = answerA[4];
    optionB.textContent = answerB[4];
    optionC.textContent = answerC[4];
    optionD.textContent = answerD[4];
    
    function userAlert(event) {
        
        if (answersArray[4] === event.target.textContent) {
            document.getElementById("indicator-div").textContent = "Your're Right";
            userScore++;
        }
        else {
            document.getElementById("indicator-div").textContent = "Your're Wrong";
            timeLeft = timeLeft-5;
        }
        questionSix();
    }
    

    optionA.addEventListener("click", questionFive);
    optionB.addEventListener("click", questionFive);
    optionC.addEventListener("click", questionFive);
    optionD.addEventListener("click", questionFive);

}

function questionSix() {

    questionText.textContent = questionBank[5];
    optionA.textContent = answerA[5];
    optionB.textContent = answerB[5];
    optionC.textContent = answerC[5];
    optionD.textContent = answerD[5];
    
    function userAlert(event) {
        
        if (answersArray[5] === event.target.textContent) {
            document.getElementById("indicator-div").textContent = "Your're Right";
            userScore++;
        }
        else {
            document.getElementById("indicator-div").textContent = "Your're Wrong";
            timeLeft = timeLeft-5;
        }
        questionSeven();
    }
    

    optionA.addEventListener("click", questionSix);
    optionB.addEventListener("click", questionSix);
    optionC.addEventListener("click", questionSix);
    optionD.addEventListener("click", questionSix);

}

function questionSeven() {

    questionText.textContent = questionBank[6];
    optionA.textContent = answerA[6];
    optionB.textContent = answerB[6];
    optionC.textContent = answerC[6];
    optionD.textContent = answerD[6];
    
    function userAlert(event) {
        
        if (answersArray[6] === event.target.textContent) {
            document.getElementById("indicator-div").textContent = "Your're Right";
            userScore++;
        }
        else {
            document.getElementById("indicator-div").textContent = "Your're Wrong";
            timeLeft = timeLeft-5;
        }
        questionEight();
    }
    

    optionA.addEventListener("click", questionSeven);
    optionB.addEventListener("click", questionSeven);
    optionC.addEventListener("click", questionSeven);
    optionD.addEventListener("click", questionSeven);

}

function questionEight() {

    questionText.textContent = questionBank[7];
    optionA.textContent = answerA[7];
    optionB.textContent = answerB[7];
    optionC.textContent = answerC[7];
    optionD.textContent = answerD[7];
    
    function userAlert(event) {
        
        if (answersArray[7] === event.target.textContent) {
            document.getElementById("indicator-div").textContent = "Your're Right";
            userScore++;
        }
        else {
            document.getElementById("indicator-div").textContent = "Your're Wrong";
            timeLeft = timeLeft-5;
        }
        questionNine();
    }
    

    optionA.addEventListener("click", questionEight);
    optionB.addEventListener("click", questionEight);
    optionC.addEventListener("click", questionEight);
    optionD.addEventListener("click", questionEight);

}

function questionNine() {

    questionText.textContent = questionBank[8];
    optionA.textContent = answerA[8];
    optionB.textContent = answerB[8];
    optionC.textContent = answerC[8];
    optionD.textContent = answerD[8];
    
    function userAlert(event) {
        
        if (answersArray[8] === event.target.textContent) {
            document.getElementById("indicator-div").textContent = "Your're Right";
            userScore++;
        }
        else {
            document.getElementById("indicator-div").textContent = "Your're Wrong";
            timeLeft = timeLeft-5;
        }
        questionTen();
    }
    

    optionA.addEventListener("click", questionNine);
    optionB.addEventListener("click", questionNine);
    optionC.addEventListener("click", questionNine);
    optionD.addEventListener("click", questionNine);

}

function questionTen() {

    questionText.textContent = questionBank[9];
    optionA.textContent = answerA[9];
    optionB.textContent = answerB[9];
    optionC.textContent = answerC[9];
    optionD.textContent = answerD[9];
    
    function userAlert(event) {
        
        if (answersArray[9] === event.target.textContent) {
            document.getElementById("indicator-div").textContent = "Your're Right";
            userScore++;
        }
        else {
            document.getElementById("indicator-div").textContent = "Your're Wrong";
            timeLeft = timeLeft-5;
        }
        userAnswerCheck();
    }
    

    optionA.addEventListener("click", questionTen);
    optionB.addEventListener("click", questionTen);
    optionC.addEventListener("click", questionTen);
    optionD.addEventListener("click", questionTen);

}

function userAnswerCheck(){

}