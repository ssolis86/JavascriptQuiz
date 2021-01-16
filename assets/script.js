//Assignment Code
var generateBtn = document.querySelector("#button");
var timerEl = document.getElementById("countdown");

function startQuiz(){
   

}

function nextPage() {
    var password = startQuiz();

    var timeLeft = 3;
    var timeInterval = setInterval(function() {
      
    if(timeLeft !== 0){
        --timeLeft;
        timerEl.textContent = timeLeft + " seconds remaining";
    }

    }, 1000);
  }

generateBtn.addEventListener("click",nextPage);
