//Assignment Code
var generateBtn = document.querySelector("#button");
var timerEl = document.getElementById("countdown");




function initiateQuiz() {
   
    var timeLeft = 3;
    var timeInterval = setInterval(function() {
      
    if(timeLeft !== 0){
        --timeLeft;
        timerEl.textContent = timeLeft + " seconds remaining";
    }
    
    }, 1000);

    
    var questionOne = document.createElement("p");
    var buttonOptions = document.createElement("p");
    var optionA = document.createElement("BUTTON");
    var optionB = document.createElement("BUTTON");
    var optionC = document.createElement("BUTTON");
    var optionD = document.createElement("BUTTON");

    questionOne.textContent = "This is questions one.";
    
    optionA.innerHTML = "A: ";
    optionB.innerHTML = "B: ";
    optionC.innerHTML = "C: ";
    optionD.innerHTML = "D: ";
    
    buttonOptions.appendChild(optionA);
    buttonOptions.appendChild(optionB);
    buttonOptions.appendChild(optionC);
    buttonOptions.appendChild(optionD);

    document.getElementById("buttonS").replaceWith(buttonOptions);
    document.getElementById("codingQuiz").replaceWith(questionOne);
    





  }

generateBtn.addEventListener("click",initiateQuiz);