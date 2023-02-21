var questionEl = document.querySelector('.jQueryQuestions');
var instructionsEl = document.querySelector(".directions");
var buttonEl = document.querySelector("#buttonSubmit");
var buttonEl_2 = document.querySelector(".buttonClass");
var buttonEl_3 = document.querySelector(".buttonClass");
let newButton = document.createElement("button");
let containerEl = document.querySelector("#startContainer");
let quizEl = document.querySelector("#quizContainer");




var timer = 300;

var questions = [
    {
        questionText: "Is jQuery a Javascript Library?",
        choices: ["True", "False"],
        answer: ["True"]
    }
]
var questionCount = 0;
function displayQuestion(){
  quizEl.innerHTML='';
  let q1 = document.createElement("p");
  q1.textContent = questions[questionCount].questionText;
  quizEl.appendChild(q1);
 
  for(let i = 0; i < questions[questionCount].choices.length; i++){
    let newButton = document.createElement("button");
    newButton.textContent = questions[questionCount].choices[i];
    quizEl.appendChild(newButton);

    newButton.addEventListener("click", checkAnswer);
  }

}

function checkAnswer(event){
    console.log(event.target.textContent);
}

buttonEl.addEventListener("click", function(){
    containerEl.style.display = "none";
    displayQuestion();
    // questionEl.textContent = "Is jQuery apart of JavaScript Library?";
    // instructionsEl.textContent = null;
    // buttonEl.textContent="True";
    // console.log(buttonEl.textContent);


    // buttonEl_2.textContent="False";
    // document.body.appendChild(buttonEl_2);
    // let newButton = document.createElement("button");
    // newButton.textContent="True"; 
    // document.body.children[2].appendChild(newButton);  
    

});

// newButton.addEventListener("click", function(){
//     // newButton.textContent="True";
//     console.log("True");
// });
