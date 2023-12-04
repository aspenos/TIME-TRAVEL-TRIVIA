//game initialization variables

let currentCategory = "General History"; //set default category as null if cat > 1
let questions = []; 
//array storing questions
let userAnswers = [];
//array storing user answers
let score = 0;
//inialized at 0 because player score starts at 0
let currentQuestionIndex = 0;
let timer;


const generalHistoryQuestions = [
    {
        text: "Which Greek god/goddess was the Parthenon dedicated to?",
        possibleAnswers: ["Aphrodite", "Athena", "Zeus", "Poseidon"],
        correctAnswer: "Athena",
        //TODO: remove timer if not working here
        time: 15,
       
    },
    {
        text: "What is considered the largest empire in history?",
        possibleAnswers: ["Roman Empire", "British Empire", "Mongol Empire", "Ottoman Empire"],
        correctAnswer: "Mongol Empire",
        time: 15,
        
    },
    {
        text: "What year did prohibition start in the United States?",
        possibleAnswers: ["1930", "1925", "1945", "1920"],
        correctAnswer: "1920",
        time = 15,
        
    },
    {
        text: "Which country was the first to use paper currency?",
        possibleAnswers: ["China", "Switzerland", "Greece", "France"],
        correctAnswer: "China",
        time = 15,
        
    }
    {
        text: "In what year was the Apple iPod released?",
        possibleAnswers: ["2003", "2001", "2005", "2007"],
        correctAnswer: "2001",
        time = 15,
        
    }
];

document.addEventListener('DOMContentLoaded', function () {
    renderMainMenu();
});

//render main menu functions
function renderMainMenu() {
    const container = document.getElementById("game-container");
    container.innerHTML = `
    <h1>Time Travel Trivia</h1>
    <button onclick="start()">General History</button>
`;

const startButton = document.getElementById("startButton");
startButton.addEventListener('click', start);
}
//function to start game
function start() {
    questions = generalHistoryQuestions;
    presentQuestion();
}

//function to load questions for selected category
function loadQuestionsForCategory(category) {
    questions = generalHistoryQuestions;
    presentQuestion(questions[currentQuestionIndex]);
}

//function to present a question
function presentQuestion() {
    const container = document.getElementById("game-container");
    const question = questions[currentQuestionIndex];
    const options = question.options.map(option => `<li><button class="answerButton">${option}</button></li>`).join("");

    container.innerHTML = `
    <h2>${question.text}</h2>
    <ul>${options}</ul>
    <p id="timer">Time Remaining: ${question.time}s</p>
    <p id="result"></p>
`;

    const answerButtons = document.querySelectorAll('.answerButton');
    answerButtons.forEach(button => {
        button.addEventListener('click', function () {
            answerSelected(button.innerText);
        });
    });

    startTimer(question.time);
}

//function to start the timer
function startTimer(seconds) {
    let timeRemaining = seconds;
    timer = setInterval(() => {
        document.getElementById("timer"). innerText = `Time Remaining: ${timeRemaining}s`;
        if (timeRemaining === 0) {
            clearInterval(timer);
            handleTimeUp();
        } else {
            timeRemaining--;
    }
    }, 1000);
}

//Function to update timer in UI

function updateTimerUI() {

}

//Function to add event listener for answer selection 
function onAnswerSelected(selectedAnswer) {
    stopTimer();
    checkAnswer(selectedAnswer);
    moveToNextQuestionOrEnd();
}

//Function to stop timer
function stopTimer() {
    clearInterval(timer);
}

//Function to check the selected answer
function answerSelected(selectedAnswer) {
    stopTimer();
    const correctAnswer = questions[currentQuestionIndex].answer;
    const resultElement = document.getElementById("result");

    if (!timeExpired) {
        if (selectedAnswer === correctAnswer) {
        score++;
        resultElement.innerText = "Correct!";
        } else {
        resultElement.innerText = "Incorrect!";
        }
    } else {
        resultElement.innerText = "Time's up!"
    }

    moveToNextQuestionOrEnd();

}

//Function to start next question
function moveToNextQuestionOrEnd() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        presentQuestion();
    } else {
        displayResults();
    }
}

//time expired function
function handleTimeUp() {
    const resultElement = document.getElementById("result");
    resultElement.innerText = "Time's up!";
    moveToNextQuestionOrEnd();

//Function to display results screen
//TODO: ADD RESET BUTTON TO RESULTS SCREEN
function displayResults() {
    const container = document.getElementById("game-container");
    const resultMessage = score === questions.length ? "You win! Congratulations" : "Game over! You lost!";

    container.innerHTML = `<h2>${resultMessage} Your Score: ${score}</h2>
    <button id="returnButton">Return to Menu</button>
    <button id="resetButton">Restart Game</button>
`;


const returnButton = document.getElementById("returnButton");
returnButton.addEventListener("click", renderMainMenu);
}

//TODO: ADD AUDIO

//Initial setup

window.onload = function() {
    init();
};
