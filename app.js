//initialization variables
let currentCategory = "General History";
let questions = [];
let score = 0;
let currentQuestionIndex = 0;
let timer;

const winSound = new Audio("assets/mobile-game-positive-notification-epic-stock-media-1-00-01.mp3");
const loseSound = new Audio("assets/buzzer-buzzing-single-fascinatedsound-2-00-01.mp3");

function init() {
    
}

const generalHistoryQuestions = [
    {
        text: "Which Greek god/goddess was the Parthenon dedicated to?",
        options: ["Aphrodite", "Athena", "Zeus", "Poseidon"],
        answer: "Athena",
        time: 3
       
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
        
    },
    {
        text: "What do the stripes on the American flag represent?",
        options: ["The 50 states", "The 13 original colonies", "7 wonders of the world", "The Mayflower Compact Signatories"],
        answer: "The 13 original colonies",
        time: 15
    }, 
    {
        text: "Who was the president during the Cuban Missile Crisis?",
        options: ["Dwight D. Eisenhower", "Lyndon B. Johnson", "Richard Nixon", "John F. Kennedy"],
        answer: "John F. Kennedy",
        time: 15
    },
    {
        text: "The Louisiana Purchase added territory that would become 14 new states. How much larger did the United States become because of this treaty?",
        options: ["75 percent", "100 percent", "25 percent", "50 percent"],
        answer: "50 percent",
        time: 15
    },
    {
        text: "What year did the Russian Revolution begin?",
        options: ["1917", "1945", "1910", "1895"],
        answer: "1917",
        time: 15
    },
    {
        text: "Who was the first person to orbit the Earth?",
        options: ["Neil Armstrong", "John Glenn", "Yuri Gagarin", "Valentina Tereshkova"],
        answer: "Yuri Gagarin",
        time: 15
    },
    {
        text: "Which event triggered WW1?",
        options: ["Assassination of Francis Ferdinand", "Germany's invasion of Poland", "Sinking of the Lusitania", "WW1 never happened"],
        answer: "Assassination of Francis Ferdinand",
        time: 15 
    },
    {
        text: "Which of the following was NOT invented in China?",
        options:["Concrete", "Gunpowder", "Paper money", "Silk"],
        answer: "Concrete",
        time: 15
    },
    {
        text: "In which Texan city was JFK assassinated?",
        options: ["Houston", "Austin", "San Antonio", "Dallas"],
        answer: "Dallas",
        time: 15
    },
    {
        text: "When did the Berlin Wall fall?",
        options: ["1990", "1967", "1995", "1989"],
        answer: "1989",
        time: 15
    },
    {
        text: "Who created the National Fascist Party in Italy?",
        options: ["Francisco Franco", "Jozef Tiso", "Benito Mussolini", "Leonardo DiCaprio"],
        answer: "Benito Mussolini",
        time: 15
    },
    {
        text: "Which country did the US purchase Louisiana from?",
        options: ["Spain", "France", "Portugal", "The Netherlands"],
        answer: "France",
        time: 15
    },
    {
        text: "Which is the oldest dynasty still ruling?",
        options: ["House of Saud (Saudi Arabia)", "Imperial House of Japan (Japan)", "House of Savoy (Italy)", "House of Liechtenstein (Liechtenstein)"],
        answer: "Imperial House of Japan (Japan)",
        time: 15
    },
    {
        text: "Aztec civilization originated from which country?",
        options: ["Mexico", "Colombia", "Guatemala", "Costa Rica"],
        answer: "Mexico",
        time: 15
    },
    {
        text: "Where is the ancient city of Babylon located?",
        options: ["Turkey", "Syria", "Iraq", "Greece"],
        answer: "Iraq",
        time: 15
    },
    {
        text: "What year was the moon landing?",
        options: ["1969", "1967", "1965", "1970"],
        answer: "1969",
        time: 15
    },
    {
        text: "During which event was Korea separated into two nations?",
        options: ["Korean War", "World War II", "World War I", "October Revolution"],
        answer: "World War II",
        time: 15
    },
    {
        text: "In which ocean did the Titanic Sink?",
        options: ["Pacific Ocean", "Indian Ocean", "Artic Ocean", "Atlantic Ocean"],
        answer: "Atlantic Ocean",
        time: 15
    },
    {
        text: "Who is the only U.S. president to serve more than two terms?",
        options: ["James Monroe", "Franklin D. Roosevelet", "Abrahama Lincoln", "George Washington"],
        answer: "Franklin D. Roosevelet",
        time: 15
    },
    {
        text: "In 1904, the area known as Time's Square was renamed. What was it called before?",
        options: ["Central Square", "Todos Santos", "Long Acre Square", "Union Colony"],
        answer: "Long Acre Square",
        time: 15
    }, 
    {
        text: "What year was Henry Ford's Model T introduced?",
        options: ["1900", "1908", "1920", "1929"],
        answer: "1908",
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
            console.log(this)
            console.log(button.innerText)
            this.style.backgroundColor='green'
            answerSelected(this, button.innerText);
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

function answerSelected(buttonElement, selectedAnswer) {
    stopTimer();
    const correctAnswer = questions[currentQuestionIndex].answer;
    const resultElement = document.getElementById("result");
    const isTimeExpired = parseInt(document.getElementById("timer").innerText.split(":")[1]) === 0;
    if (!isTimeExpired) {
        if (selectedAnswer === correctAnswer) {
            score++;
            buttonElement.style.backgroundColor = "green"; // Change the button's style
            resultElement.innerText = "Correct!";
            winSound.play();
            // Delay moving to the next question
            setTimeout(() => {
                moveToNextQuestionOrEnd();
            }, 5000); // Delay of 1 second (1000 milliseconds)
        } else {

            resultElement.innerText = "Incorrect!";
            buttonElement.style.backgroundColor = "red"; 
            loseSound.play();
            setTimeout(() => {
                moveToNextQuestionOrEnd();
            }, 5000);

        }
    } else {
        if (seconds === 0) {
            resultElement.innerText = "Time is up!";
        loseSound.play();
        setTimeout(() => {
            console.log("timeout started");
            moveToNextQuestionOrEnd();
        }, 5000);
        }
        
}}

function moveToNextQuestionOrEnd() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        presentQuestion();
        console.log(questions);
    } else {
        displayResults();
        console.log(questions);
    }
}

function handleTimeUp() {
    const resultElement = document.getElementById("result");
    resultElement.innerText = "Time is up!";
    setTimeout(() => {
    moveToNextQuestionOrEnd();
}, 5000);
}

function displayResults() {
    const container = document.getElementById("game-container");
    const resultMessage = score === questions.length ? "Thanks for playing!" : "Thanks for playing!";
    
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