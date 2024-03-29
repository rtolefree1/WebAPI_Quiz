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
let formEl = document.querySelector("#form");
let submitButton = document.createElement("button");
let goBackButton = document.createElement("button");
let clearScoreButton = document.createElement("button");
let highScoresButton = document.createElement("button");

// Initializing variables and arrays
let quizGrade = 0;
var questionCount = 0;

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
  studGradeArray = [];
  studInitialArray = [];
  instructionsEl.style.display="none";
});




// Link to view all Scores
highScoresButton.textContent="View High Scores";
headContainLink.appendChild(highScoresButton);
highScoresButton.addEventListener("click", function(){
  // containerEl.style.display="block";
  // questionEl.style.display="flex";
  //   instructionsEl.style.display="flex";


    addStyle(questionEl.style.display, instructionsEl.style.display, containerEl.style.display, obj4_block='');
    clearInnerHTML(questionEl, quizEl, instructionsEl, obj4='', obj5='', obj6='');
    create_h2("High Scores");
    // questionEl.appendChild(s1);

    let gradePara = document.createElement("p");
    for(let i= 0; i<studGradeArray.length; i++){
      //debugger
      let b1 = document.createElement("br");
      let q1 = document.createElement("p");
      q1.textContent = `${studInitialArray[i]}-${studGradeArray[i]}` + `\n` ;
     
      instructionsEl.appendChild(q1);
    }


    goBackButton.textContent = "Go Back";
    quizEl.appendChild(goBackButton);
    clearScoreButton.textContent = "ClearScore";
    quizEl.appendChild(clearScoreButton);

});
//  submitButton.addEventListener("click", submitStudentNameGrade);

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
  
  //quizEl.appendChild(nextButton);

}



function checkAnswer(event){
    let output = event.target.textContent;
    console.log("output", output);
    console.log("array value", questions[questionCount].answer[0]);
    if(output === questions[questionCount].answer[0]){
        resultsEl.textContent='';
        resultsEl.append("Your answer is correct");
        console.log("Your answer is correct");
        quizGrade++;
        
        resultsEl.textContent='';
        questionCount++;
    
        if(questions.length === questionCount){
        Done();
        return;
       }
        displayQuestion();

    }else{
        resultsEl.textContent='';
        resultsEl.append("Your answer is NOT correct");
        console.log("Your answer is NOT correct");
        resultsEl.textContent='';
        questionCount++;
    
        if(questions.length === questionCount){
        Done();
        return;
       }
        displayQuestion();
    }
    
    console.log(event.target.textContent);
}

function Done(event){
    // debugger
    questionEl.style.display="flex";
    instructionsEl.style.display="flex";
    containerEl.style.display="block";
    // questionEl.innerHTML='';
    // resultsEl.innerHTML='';
    // questionEl.innerHTML='';
    // quizEl.innerHTML='';
    // instructionsEl.innerHTML = '';

    addStyle(questionEl.style.display, instructionsEl.style.display, containerEl.style.display, obj4_block='')
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
 console.log("student name3:",document.getElementById("studentName").value);
 studentNameValue = document.getElementById("studentName").value;
 containerEl.style.display="block";
   

    clearInnerHTML(questionEl, resultsEl, quizEl, instructionsEl, formEl, obj6='');

    create_h2("High Scores");
    // let s1 = document.createElement("h2");
    // s1.textContent= "High Scores";
   
    // questionEl.appendChild(s1);

    //studGradeArray.push(grade);
   // studInitialArray.push(studentNameValue)

    let gradePara = document.createElement("p");
    
    let studentInfo = {
      studentInitials : studentNameValue,
      studentGrade :  grade
    }

    studentObj.push(studentInfo);

    console.log(studentObj);
  
  // set new submission to local storage
  localStorage.setItem("studentInfo", JSON.stringify(studentObj));

    for(let i=0;i<studentObj.length; i++){
      let q1 = document.createElement("p");
      q1.textContent = `${studentObj[i].studentInitials}-${studentObj[i].studentGrade}` + `\n` ;
      
      instructionsEl.appendChild(q1);
    }

    goBackButton.textContent = "Go Back";
    quizEl.appendChild(goBackButton);

    clearScoreButton.textContent = "ClearScore";
    quizEl.appendChild(clearScoreButton);
   
}


goBackButton.addEventListener("click", function(){
  questionCount=0;
  questionEl.style.display="none";
  instructionsEl.style.display="none";
  grade=0;
  quizGrade = 0;
  for(var i = 0; i < studGradeArray.length;i++){
    console.log("student", i, "grade", studGradeArray[i])
  }

  displayQuestion();
  
});



var secondsLeft = 60;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    }

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

function addStyle(obj1_flex, obj2_flex, obj3_block, obj4_block)
{
  obj1_flex = "flex";
  obj2_flex = "flex";
  obj3_block = "block";
  obj4_block = "block";

}

