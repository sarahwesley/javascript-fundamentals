// DOM elements
var startButtonEl = document.querySelector('#start');
var questionEl = document.querySelector('#questions');
var answerEl = document.querySelector('#answers');
var startPageEl =  document.querySelector('#quizpage');
var scorePageEl = document.querySelector('#score');
var questionConEl = document.querySelector('#questionsContainer');
var correctEl = document.querySelector('#prompt');
var countdownEl = document.querySelector('#countdown');
var scoreAreaEl = document.querySelector('#scoreArea');
var inNameEl = document.querySelector('#inName');
var buttonDivEl = document.querySelector('#saveBtn');
var highScoreEl = document.querySelector('#highScores');

var timer = 75;
var runningTimer;
var score = 0;
var questionIndex = 0;

// questions index
var questions = [
    {question:"The condition in an if/else statement is enclosed with ____.",
    answers: [
        {text: "paranthesis", correct:true },
        {text: "curly brackets", correct:false},
        {text: "quotes", correct:false },
        {text: "square brackets", correct:false }
    ]
    },
    {question:"String values must be enclosed within _____ when being assigned to variables.",
    answers: [
        {text: "commas", correct:false },
        {text: "culry brackets", correct:false},
        {text: "quotes", correct:false },
        {text: "parenthsis", correct:true }
    ]
    },
    {question:"Commonly used data types DO not include:",
    answers: [
        {text: "strings", correct:false },
        {text: "booleans", correct:false},
        {text: "alerts", correct:true },
        {text: "numbers", correct:false }
    ]
    },
    {question:"Array's in JavaScript can be used to store _____.",
    answers: [
        {text: "numbers and strings", correct:false },
        {text: "other array's", correct:false},
        {text: "booleans", correct:false },
        {text: "all of the above", correct:true }
    ]
    },
    {question:"A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
        {text: "JavaScript", correct:false },
        {text: "console.log", correct:true},
        {text: "terminal/bash", correct:false },
        {text: "foor loops", correct:false }
    ]
    }
];
