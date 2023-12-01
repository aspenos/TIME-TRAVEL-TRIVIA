Quiz Game (Time Travel Trivia)

My app is called Time Travel Trivia, a quiz game that challenges players knowledge of history. The game features three categories: Historical events, significant dates, and influential figures. Within each category are five questions. Each question has four potential answers. The game incorporates a scoring mechanism that challenges players to earn points within a 15 second time limit by answering the correct question. Visual art and music will be used throughout each interactive screen: The title, menu (where a category is chosen), during questions, and when a player answers correctly or incorrectly. Once a player completes all five questions in a category, a scorecard will be displayed with its own art and music attached. Additionally, players can choose to follow a link returning them to the menu. 

## Wire Frames

**Initial Landing View**

<img width="752" alt="Menu Screen" src="https://github.com/aspenos/TIME-TRAVEL-TRIVIA/assets/149289289/b28b209a-9c11-4869-bb9c-19747d67b844">

<img width="751" alt="Game screen" src="https://github.com/aspenos/TIME-TRAVEL-TRIVIA/assets/149289289/a0be1d0d-3ee7-441a-8da7-a6d1ed7a6d56">


**Results View**

<img width="750" alt="Results screen" src="https://github.com/aspenos/TIME-TRAVEL-TRIVIA/assets/149289289/c92fb1c5-8965-4774-be1c-6a44d5d7b460">


## User Stories

#### MVP Goals

- As a player, I want my game to recognize when an answer is correct or incorrect. 
- As a player, I would like to be informed when the game is over due to time.
- As a player, I would like to know whose turn it is so that I don't have to keep track.
- As a player, I would like to be informed with some indication when I mark a game box so that I know my selection worked.
- As a player who requires assistive technologies, I would like accessibility features so that I'm not left out of enjoying the game.
- As a player I would like to be able to restart the game after a win or loss.
- As a player, I want the UI to be engaging and out of the way so that I enjoy the experience of playing the game.

#### Stretch Goals

- As a player, I would like a victory animation when I win the game, so that I feel good about my victory!
- As a player, I would like to hear an audible sound when I click an answer, so I know my selection worked.
- As a player, I would like to play this game online so I can play with friends.
- As a player I would like to have an online leaderboard to show my score globally. 

#### Notionboard Template
Notionboard template for building projects (You can use this for any project)
https://www.notion.so/GA-Unit-3-Tunr-Lab-da2c82fafd4e4a7aa654676732db9ee3

#### Timeline - Daily Accountability
Example of a Timeline to keep organized and on task for hitting goals every single day you’re on the sprint for your project.

Create your own table using this markdown table generator website:
https://www.tablesgenerator.com/markdown_tables

 

Unique Javascript logic: 
•	Quiz logic
•	Event handling
•	Error handling
•	Timer functionality
•	Linking pages
•	Responsive design
•	Scoring mechanism
•	Menu navigation
•	Category navigation
•	Art and sound integration
•	UI interactions
•	Scoreboard display
Javascript concepts present:
Loops: 
-manage flow of certain game elements
	-for, while, etc
•	Question iteration: 
•	Category selection 
•	Time limit countdown
•	Scoreboard


Functions: 
•	Question handling
•	UI updates
•	Timer 
•	Checking answers
•	Game state transitions

Arrays & Objects:

	Objects
•	Questions
•	Categories
Arrays
•	Store collection of answers/player answers

DOM:

•	Update HTML to display user information.

Event Handling:

•	Event listeners to capture user interactions: button clicks.

Conditionals:

•	If
•	Else 
•	Else if

Example: 

If (userAnswer === correctAnswer {
	//update UI for correct answer
} else {
	//update UI for incorrect answer
}
	Error handling:
•	Manage unexpected user inputs. 
•	Better user experience

Init:
•	Initial game setup/configuration
o	Variables, resources, game environment preparation 

Render: 
•	Update UI to reflect current game state
•	Manipulates the DOM to update HTML elements
•	Displaying questions, scoreboard, etc




Pseudocode (rough draft):

// Initialize game variables
let currentCategory = null;
let questions = [];
let userAnswers = [];
let score = 0;
let currentQuestionIndex = 0;

// Function to initialize the game
function initGame() {
    displayMainMenu();
}

// Additional initialization steps if needed
function init() {
    // Perform any additional initialization tasks, such as loading resources
}

// Event listener for category selection
function onCategorySelected(selectedCategory) {
    currentCategory = selectedCategory;
    loadQuestionsForCategory(currentCategory);
}

// Function to load questions for the selected category
function loadQuestionsForCategory(category) {
    questions = loadQuestionsFromAPI(category);
    presentQuestion(questions[currentQuestionIndex]);
}

// ... (other functions related to game logic)

// Call the initialization function when the page loads
window.onload = function () {
    init();
    initGame();
};
