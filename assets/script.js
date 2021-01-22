//Assignment Code
var startBtn = document.querySelector("#startButton");
var timerEl = document.getElementById("countdown");
var optionA = document.getElementById("optionA");
var optionB = document.getElementById("optionB");
var optionC = document.getElementById("optionC");
var optionD = document.getElementById("optionD");
var questionText = document.getElementById("quiz-question");
var questionBank = 
[
"1.) What is the correct JavaScript syntax to write Hello World?", 
"2.) Inside which HTML element do we put the JavaScript?",
"3.) What is the correct syntax for referring to an external script called 'abc.js'?",
"4.) Which of the following is not JavaScript Data Types?",
"5.) Which company developed JavaScript?", 
"6.) Which of the following is not Javascript frameworks or libraries?",
"7.) Among the following, which one is a ternary operator in JavaScript?",
"8.) Which of them is not the looping structures in JavaScript?",
"9.) Which of the following function of Array object applies a function simultaneously against two values of the array (from right-to-left) as to reduce it to a single value?",
"10.) In JavaScript, Arrays are data type. State True or False"];

var answerA = ["System.out.println ('Hello World')", "<js>", "<script href=' abc.js'>", "Undefined", "Netscape", "Polymer", "#", "for", "pop()", "True"];
var answerB = ["println ('Hello World')", "<scripting>", "<script name=' abc.js'>", "Number", "Bell Labs", "Meteor", "::", "while", "reduce()", "Maybe"];
var answerC = ["document.write('Hello World')", "<script>", "<script src=' abc.js'>", "Boolean", "Sun Microsystems", "Cassandra", "&:", "forwhich", "push()", "I have no idea"];
var answerD = ["response.write('Hello World') ", "<javascript>", "None of the above", "Float", "IBM", "JQuery", "?:", "dowhile", "reduceRight()", "False"];
var answersArray = ["document.write('Hello World')", "<script>", "<script src=' abc.js'>", "Float", "Netscape", "Cassandra", "?:", "while", "reduceRight()", "False"];
var userScore = 0;
var timeLeft = 30;




startBtn.addEventListener("click",initiateQuiz);

//Quiz Initiator Function
//This function sets a timer when quiz is initiated and displays the content of the question and answers 
//to the appropriate buttons.
function initiateQuiz() {
       
    var timeInterval = setInterval(function() {
      
    if(timeLeft !== 0){
        --timeLeft;
        timerEl.textContent = timeLeft + " :seconds remaining";
        
    }
    else{
        timerEl.textContent = "Time's up!";
        
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
//Question One Function
//This takes the user through the first question and calls the function for the subsequent
//function thereafter.
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
            userScore--;
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
            userScore--;
        }
        questionThree();
    }
    
    optionA.addEventListener("click", userAlert);
    optionB.addEventListener("click", userAlert);
    optionC.addEventListener("click", userAlert);
    optionD.addEventListener("click", userAlert);

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
            userScore--;
        }
        questionFour();
    }
    

    optionA.addEventListener("click", userAlert);
    optionB.addEventListener("click", userAlert);
    optionC.addEventListener("click", userAlert);
    optionD.addEventListener("click", userAlert);

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
            userScore--;
        }
        questionFive();
    }
    

    optionA.addEventListener("click", userAlert);
    optionB.addEventListener("click", userAlert);
    optionC.addEventListener("click", userAlert);
    optionD.addEventListener("click", userAlert);

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
            userScore--;
        }
        questionSix();
    }
    

    optionA.addEventListener("click", userAlert);
    optionB.addEventListener("click", userAlert);
    optionC.addEventListener("click", userAlert);
    optionD.addEventListener("click", userAlert);

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
            userScore--;
        }
        questionSeven();
    }
    

    optionA.addEventListener("click", userAlert);
    optionB.addEventListener("click", userAlert);
    optionC.addEventListener("click", userAlert);
    optionD.addEventListener("click", userAlert);

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
            userScore--;
        }
        questionEight();
    }
    

    optionA.addEventListener("click", userAlert);
    optionB.addEventListener("click", userAlert);
    optionC.addEventListener("click", userAlert);
    optionD.addEventListener("click", userAlert);

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
            userScore--;
        }
        questionNine();
    }
    

    optionA.addEventListener("click", userAlert);
    optionB.addEventListener("click", userAlert);
    optionC.addEventListener("click", userAlert);
    optionD.addEventListener("click", userAlert);

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
            userScore--;
        }
        questionTen();
    }
    

    optionA.addEventListener("click", userAlert);
    optionB.addEventListener("click", userAlert);
    optionC.addEventListener("click", userAlert);
    optionD.addEventListener("click", userAlert);

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
            userScore--;
        }
        scoreCheck();
    }
    

    optionA.addEventListener("click", userAlert);
    optionB.addEventListener("click", userAlert);
    optionC.addEventListener("click", userAlert);
    optionD.addEventListener("click", userAlert);

}

function scoreCheck(){
    console.log(userScore);

}