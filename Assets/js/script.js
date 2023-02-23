// query selectors for my classes and id's
let questionEl = document.querySelector('.jQueryQuestions');
let instructionsEl = document.querySelector(".directions");
let buttonEl = document.querySelector("#buttonSubmit");
let containerEl = document.querySelector("#startContainer");
let resultsEl = document.querySelector("#results");
let quizComp = document.querySelector("#quizComplete");
let initButCont = document.querySelector("#intialButtonContainer");
let headContainLink = document.querySelector("#headLink");

// creating buttons
let newButton = document.createElement("button");
let nextButton = document.createElement("button");
let doneButton = document.createElement("button");

// container for quiz questions
let grade=0;
let studentNameValue = "";
let quizEl = document.querySelector("#quizContainer");
let timerEl = document.querySelector("#timer");
let timeEl = document.querySelector("#time");
let formEl = document.querySelector("#form");
let submitButton = document.createElement("button");
let goBackButton = document.createElement("button");
let clearScoreButton = document.createElement("button");
let highScoresButton = document.createElement("button");

// Initializing variables and arrays
let quizGrade = 0;
var questionCount = 0;
var sixtySeconds = 15;
var secondsLeft = sixtySeconds;
let OnDonePage = false;

if(secondsLeft === 0){
  Done();
}

// create object that local storage info or empty array
let studentObj = JSON.parse(localStorage.getItem("studentInfo")) || [];

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
    },
    {
        questionText: "Which is NOT the way to declare a variable in JavaScript?",
        choices: ["var", "int", "let", "const"],
        answer: ["int"]
    },
    {
        questionText: "What is NOT a data type in JavaScript?",
        choices: ["Number", "String", "Boolean", "Object", "Blue"],
        answer: ["Blue"]
    }

]

// button to start the quiz
clearScoreButton.addEventListener("click", function(){

  localStorage.clear();
  instructionsEl.style.display="none";
});




// Link to view all Scores
highScoresButton.textContent="View High Scores";
headContainLink.appendChild(highScoresButton);
highScoresButton.addEventListener("click", function(){
  containerEl.style.display="block";
 questionEl.style.display="flex";
   instructionsEl.style.display="flex";
  buttonEl.style.display="none";
 
    clearInnerHTML(questionEl, quizEl, instructionsEl, obj4='', obj5='', obj6='');
    create_h2("High Scores");
    

    let gradePara = document.createElement("p");

    printStudentInfo(studentObj);
    
  


    goBackButton.textContent = "Go Back";
    quizEl.appendChild(goBackButton);
    clearScoreButton.textContent = "ClearScore";
    quizEl.appendChild(clearScoreButton);

});

function displayFirstPage()
{
    timeEl.textContent = "Time";
    questionEl.textContent = "Coding Quiz Challenge";
    instructionsEl.textContent = "Please choose the correct answer." + "\n"
                                + "You have 60 seconds to complete." + "\n"
                                + "Click on Start Quiz Button!";

    buttonEl.textContent = "Start Quiz";

}


// Displaying one question at a time
function displayQuestion(){
  
  // clearing out the HTML question area, so new question can populate
  quizEl.innerHTML='';
  console.log("question count",questionCount);
  console.log("number of questions", questions.length)

  // creating paragraph element; storing 1 question into q1; add this q1 values to quizEl 
  let q1 = document.createElement("p");
  q1.textContent = questions[questionCount].questionText;
  quizEl.appendChild(q1);
  
  nextButton.textContent = "NextQuestion";

  // for loop to create button associated with choices
  for(let i = 0; i < questions[questionCount].choices.length; i++){

    let newButton = document.createElement("button");
    newButton.textContent = questions[questionCount].choices[i];
    quizEl.appendChild(newButton);
    //var ans = "True";

    newButton.addEventListener("click", checkAnswer);

  }
  


}



function checkAnswer(event){
    let output = event.target.textContent;
    console.log("output", output);
    console.log("array value", questions[questionCount].answer[0]);
    if(output === questions[questionCount].answer[0]){
        resultsEl.textContent='';
        resultsEl.append("Your answer is correct");
        
        quizGrade++;
        
        resultsEl.textContent='';
        questionCount++;
    
        if(questions.length === questionCount){
          //secondsLeft=0;
          Done();
        return;
       }
        displayQuestion();

    }else{
        resultsEl.textContent='';
        resultsEl.append("Your answer is NOT correct");
        
        resultsEl.textContent='';
        questionCount++;
        secondsLeft = secondsLeft -5;
    
        if(questions.length === questionCount){
       // secondsLeft = 0;
          Done();
        return;
       }
        displayQuestion();
    }
    
    console.log(event.target.textContent);
}

function Done(event){
    // debugger
    OnDonePage = true;
   questionEl.style.display="flex";
   instructionsEl.style.display="flex";
   containerEl.style.display="block";
   //secondsLeft =0;
   //setTime().secondsLeft = 0;
    clearInnerHTML(questionEl, resultsEl, questionEl, quizEl, instructionsEl, obj6='');

  
    create_h2("Your quiz is COMPLETE!");

    let f2 = document.createElement("p");
    grade =  Math.floor(100*(quizGrade/questions.length));
    f2.textContent = ("Your final score is: "+ grade);
    instructionsEl.appendChild(f2);

    let f3 = document.createElement("label");
    let f4 = document.createElement("input");
    let f5 = document.createElement("input");

    f4.type = "text";
    f4.id="studentName";
    f5.type = "submit";
    f5.id="studentGrade";
    f5.value = "Submit";
    f3.textContent = "Enter your credentials:";

    formEl.appendChild(f3);
    formEl.appendChild(f4);
    
    
    submitButton.textContent="Submit Grade"
    formEl.appendChild(submitButton);

    console.log(grade);
  
    
    console.log("student name2:",document.getElementById("studentName").value);


    submitButton.addEventListener("click", submitStudentNameGrade);
}


buttonEl.addEventListener("click", function(){
   containerEl.style.display = "none";
    initButCont.style.display = "none";
    displayQuestion();  
    setTime();  
});




function submitStudentNameGrade(event){
 
    studentNameValue = document.getElementById("studentName").value;
   
    addStyle(obj1_flex='', obj2_flex='', containerEl.style.display, obj4_block='')
    clearInnerHTML(questionEl, resultsEl, quizEl, instructionsEl, formEl, obj6='');

    create_h2("High Scores");

    let gradePara = document.createElement("p");
    
    let studentInfo = {
      studentInitials : studentNameValue,
      studentGrade :  grade
    }

    studentObj.push(studentInfo);

    console.log(studentObj);
  
  // set new submission to local storage
  localStorage.setItem("studentInfo", JSON.stringify(studentObj));

 

    printStudentInfo(studentObj);

    goBackButton.textContent = "Go Back";
    quizEl.appendChild(goBackButton);

    clearScoreButton.textContent = "ClearScore";
    quizEl.appendChild(clearScoreButton);
   
}




goBackButton.addEventListener("click", function(){
  questionCount=0;
 instructionsEl.style.display="flex";
 initButCont.style.display="flex";
  quizEl.innerHTML="";
  grade=0;
  quizGrade = 0;
  secondsLeft = sixtySeconds;
  OnDonePage = false;
  displayFirstPage();

  
});





function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = secondsLeft;

    if(secondsLeft === 0 && OnDonePage === false) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      //secondsLeft = 60;
      //clearTimeout();
      Done();
    }else if (secondsLeft === 0 && OnDonePage === true) {
      clearInterval(timerInterval);
     } //else {
      
    // }
    

  }, 1000);
}

// creation of h2 element
function create_h2(h2_textContent){
  let f1 = document.createElement("h2");
  f1.textContent = h2_textContent;
  questionEl.appendChild(f1);
  
}

function clearInnerHTML(obj1, obj2, obj3, obj4, obj5, obj6)
{
  
  obj1.innerHTML = '';
  obj2.innerHTML = '';
  obj3.innerHTML = '';
  obj4.innerHTML = '';
  obj5.innerHTML = '';
  obj6.innerHTML = '';
}

function addStyle(obj1_flex, obj2_flex, obj3_block, obj4_block, obj5_none, obj6_none)
{
  obj1_flex = "flex";
  obj2_flex = "flex";
  obj3_block = "block";
  obj4_block = "block";
  obj5_none = "none";
  obj6_none = "none";

}

function addStyleNone(obj1_none, obj2_none)
{
  obj1_none = "none";
  obj2_none = "none";

}

function printStudentInfo(sObj)
{
    for(let i=0;i<sObj.length; i++){
        let q1 = document.createElement("p");
        q1.textContent = `${sObj[i].studentInitials}-${sObj[i].studentGrade}` + `\n` ;
        
        instructionsEl.appendChild(q1);
      }

}

displayFirstPage()
