var questionEl = document.querySelector('.jQueryQuestions');
var instructionsEl = document.querySelector(".directions");
var buttonEl = document.querySelector("#buttonSubmit");
var buttonEl_2 = document.querySelector(".buttonClass");
var buttonEl_3 = document.querySelector(".buttonClass");
let newButton = document.createElement("button");
let containerEl = document.querySelector("#startContainer");
let resultsEl = document.querySelector("#results");
let nextButton = document.createElement("button");

// container for quiz questions
let quizEl = document.querySelector("#quizContainer");




var timer = 300;

// array of objects; the objects have a key:value pair, value is String and arrays
var questions = [
    {
        questionText: "Is jQuery a Javascript Library?",
        choices: ["True", "False"],
        answer: ["True"]
    },
    {
        questionText: "jQuery syntax to remove an element from page: $(object).remove()?",
        choices: ["True", "False"],
        answer: ["False"]
    }
]


var questionCount = 0;


function displayQuestion(){
  // clearing out the HTML question area, so new question can populate
  quizEl.innerHTML='';

  // creating paragraph element; storing 1 question into q1; add this q1 values to quizEl 
  let q1 = document.createElement("p");
  q1.textContent = questions[questionCount].questionText;
  quizEl.appendChild(q1);
  
  nextButton.textContent = "NextQuestion";

  for(let i = 0; i < questions[questionCount].choices.length; i++){
    let newButton = document.createElement("button");
    newButton.textContent = questions[questionCount].choices[i];
    quizEl.appendChild(newButton);
    var ans = "True";

    newButton.addEventListener("click", checkAnswer);
  }
  quizEl.appendChild(nextButton);

}



function checkAnswer(event){
    let output = event.target.textContent;
    console.log("output", output);
    console.log("array value", questions[questionCount].answer[0]);
    if(output === questions[questionCount].answer[0]){
        resultsEl.textContent='';
        resultsEl.append("Your answer is correct");
        console.log("Your answer is correct");
        
    }else{
        resultsEl.textContent='';
        resultsEl.append("Your answer is NOT correct");
        console.log("Your answer is NOT correct");
    }
    
    console.log(event.target.textContent);
}


nextButton.addEventListener("click", function(){
    resultsEl.textContent='';
    questionCount++;
    displayQuestion();
    
});

buttonEl.addEventListener("click", function(){
    containerEl.style.display = "none";
    displayQuestion();   

});

