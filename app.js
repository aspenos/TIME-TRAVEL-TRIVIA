//initialization variables
let currentCategory = "General History";
let questions = [];
let score = 0;
let currentQuestionIndex = 0;
let timer;

function init() {
    
}

const generalHistoryQuestions = [
    {
        text: "Which Greek god/goddess was the Parthenon dedicated to?",
        options: ["Aphrodite", "Athena", "Zeus", "Poseidon"],
        answer: "Athena",
        time: 15
       
    },
    {
        text: "What is considered the largest empire in history?",
        options: ["Roman Empire", "British Empire", "Mongol Empire", "Ottoman Empire"],
        answer: "Mongol Empire",
        time: 15
        
    },
    {
        text: "What year did prohibition start in the United States?",
        options: ["1930", "1925", "1945", "1920"],
        answer: "1920",
        time: 15
        
    },
    {
        text: "Which country was the first to use paper currency?",
        options: ["China", "Switzerland", "Greece", "France"],
        answer: "China",
        time: 15
        
    },
    {
        text: "In what year was the Apple iPod released?",
        options: ["2003", "2001", "2005", "2007"],
        answer: "2001",
        time: 15
        
    }
];


document.addEventListener('DOMContentLoaded', function () {
    renderMainMenu();
});

function renderMainMenu() {
    const container = document.getElementById("game-container");
    container.innerHTML = `
        <h1>Time Travel Trivia</h1>
        <button id="startButton">General History</button>
    `;

    const startButton = document.getElementById("startButton");
    startButton.addEventListener('click', start);
}

function start() {
    // questions = []
    questions = generalHistoryQuestions;
    console.log(questions)
    currentQuestionIndex = 0;
    console.log(currentQuestionIndex)
    presentQuestion();
}

function presentQuestion() {
    const container = document.getElementById("game-container");
    console.log(questions)
    const question = questions[currentQuestionIndex];
    console.log(question)
    const options = question.options.map(option => `<li><button class="answerButton">${option}</button></li>`).join("");
    console.log(options)
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

function startTimer(seconds) {
    let timeRemaining = seconds;
    timer = setInterval(() => {
        document.getElementById("timer").innerText = `Time Remaining: ${timeRemaining}s`;
        if (timeRemaining === 0) {
            clearInterval(timer);
            handleTimeUp();
        } else {
            timeRemaining--;
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function answerSelected(selectedAnswer) {
    stopTimer();
    const correctAnswer = questions[currentQuestionIndex].answer;
    const resultElement = document.getElementById("result");

    const timeRemaining = document.getElementById("timer").innerText;
    const isTimeExpired = parseInt(timeRemaining.split(":")[1]) === 0;

    if (!isTimeExpired) {
        if (selectedAnswer === correctAnswer) {
            score++;
            resultElement.innerText = "Correct!";
        } else {
            resultElement.innerText = "Incorrect!";
        }
    } else {
        resultElement.innerText = "Time's up!";
    }

    moveToNextQuestionOrEnd();
}

function moveToNextQuestionOrEnd() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        presentQuestion();
    } else {
        displayResults();
    }
}

function handleTimeUp() {
    const resultElement = document.getElementById("result");
    resultElement.innerText = "Time's up! Incorrect!";
    moveToNextQuestionOrEnd();
}

function displayResults() {
    const container = document.getElementById("game-container");
    const resultMessage = score === questions.length ? "Congratulations! You won!" : "Game Over! You lost!";
    
    container.innerHTML = `
        <h2>${resultMessage} Your Score: ${score}</h2>
        <button id="returnButton">Return to Menu</button>
        <button id="resetButton">Restart Game</button>
    `;

    const returnButton = document.getElementById("returnButton");
    returnButton.addEventListener('click', renderMainMenu);

    const resetButton = document.getElementById("resetButton");
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    score = 0;
    currentQuestionIndex = 0;
    init();
}