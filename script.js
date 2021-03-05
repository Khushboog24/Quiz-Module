 var questions = [
    {
        title: "Which one of these is a JavaScript package manager?",
        options: {
            a: "Node.js",
            b: "TypeScript",
            c: "npm",
            d: "Jquery"
        },
        answer: "c"
    },
    {
        title: "Which type of JavaScript language is",
        options: {
            a: "Object-Oriented",
            b: "Object-Based",
            c: "npm",
            d: "Jquery"
        },
        answer: "b"
    },
    {
        title: "Which one of the following also known as Conditional Expression:",
        options: {
            a: "immediate if",
            b: "TypeScript",
            c: "If-then-else statement",
            d: "Switch statement"
        },
        answer: "a"
    },
    {
        title: "When interpreter encounters an empty statements, what it will do:",
        options: {
            a: "Shows a warning",
            b: "Prompts to complete the statement",
            c: "npm",
            d: "Ignores the statementsy"
        },
        answer: "d"
    },
    {
        title: "The function and var are known as:",
        options: {
            a: "Keywords",
            b: "Data types",
            c: "Declaration statements",
            d: "Jquery"
        },
        answer: "c"
    },
    {
        title: "Which one of the following is the correct way for calling the JavaScript code?",
        options: {
            a: "Function/Method",
            b: "TypeScript",
            c: "npm",
            d: "Jquery"
        },
        answer: "a;"
    },
    {
        title: "Which of the following type of a variable is volatile?",
        options: {
            a: "Mutable variable",
            b: "Dynamic variable",
            c: "Volatile variable",
            d: "Jquery"
        },
        answer: "a"
    },
    {
        title: "Which of the following option is used as hexadecimal literal beginning?",
        options: {
            a: "00",
            b: "0x",
            c: "Both 0x and 0X",
            d: "0X"
        },
        answer: "c"
    },
    {
        title: "In the JavaScript, which one of the following is not considered as an error:",
        options: {
            a: "Syntax error",
            b: "Missing of semicolons",
            c: "Division by zero",
            d: "Jquery"
        },
        answer: "c"
    },
    {
        title: "Which one of these is a JavaScript package manager?",
        options: {
            a: "toString()",
            b: "valueOf()",
            c: "npm",
            d: "toLocaleString()"
        },
        answer: "b"
    }
];


var quesNo=0;
var score=0;

var question = document.getElementById("ques");
var opt1 = document.getElementById("o1");
var opt2 = document.getElementById("o2");
var opt3 = document.getElementById("o3");
var opt4 = document.getElementById("o4");

var correct = document.getElementById("correct");
var inCorrect = document.getElementById("incorrect");
var submitButton = document.getElementById("submit");
var nextButton = document.getElementById("next");
var restartButton = document.getElementById("restart");

var quizDiv = document.getElementById("quiz");
var resultDiv = document.getElementById("result");

clear();
displayQues();
displayResult();
resultDiv.style.display = "none";

function clear(){
    correct.style.display="none";
    inCorrect.style.display="none";
    nextButton.style.display="none";
    submitButton.style.display="inline";
}

function displayQues() {
    question.innerHTML=questions[quesNo].title;
    opt1.innerHTML=questions[quesNo].options.a;
    opt2.innerHTML=questions[quesNo].options.b;
    opt3.innerHTML=questions[quesNo].options.c;
    opt4.innerHTML=questions[quesNo].options.d;
}

submitButton.addEventListener("click", function(){
    if(document.querySelector('input[name="option"]:checked') == null)
        alert("Select an option");
    else {
        var userVal = document.querySelector('input[name="option"]:checked').id;
        if(userVal == questions[quesNo].answer){
            score+=1;
            correct.style.display="inline-block";
        }
        else{
            incorrect.style.display="inline-block"; 
        }

        nextButton.style.display="inline";
        submitButton.style.display="none";
        disabled();

    }
});

nextButton.addEventListener("click", function(){
    clear();
    quesNo+=1;
    if(quesNo == 10){
        quizDiv.style.display="none";
        document.getElementById("navbar-title").innerHTML="Score : "+score;
        resultDiv.style.display="block";
    }
    else{
        document.querySelector('input[name="option"]:checked').checked=false;
        disabled();
        displayQues();
        //submitButton.style.display="inline";
    }
});

restartButton.addEventListener("click", function(){
    score=0;
    quesNo=0;
    clear();
    document.querySelector('input[name="option"]:checked').checked=false;
    disabled();
    displayQues();
    quizDiv.style.display="block";
    document.getElementById("navbar-title").innerHTML="Quiz";
    resultDiv.style.display="none";
});



function displayResult() {
    var resultList = document.getElementById("resultList");
    for(var i=0;i<10;i++){
        var ansList = document.createElement("li");
        ansList.innerHTML = questions[i].title+" - ";
        var ans=document.createElement("span");
        ans.className="badge badge-success";
        var cans = questions[i].answer;
        ans.innerHTML=questions[i].options[cans];
        ansList.appendChild(ans);
        resultList.appendChild(ansList);
        resultList.appendChild(document.createElement("br"));
    }
}

function disabled(){
    var c=document.getElementById("a").disabled;
    document.getElementById("a").disabled = !c;
    document.getElementById("b").disabled = !c;
    document.getElementById("c").disabled = !c;
    document.getElementById("d").disabled = !c;
}
