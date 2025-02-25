// Curated list of words to guess
const wordArr = ["APPLE", "PEAR", "BANANA", "WATERMELON", "ORANGE", "KIWI",
                "BLUEBERRY", "GRAPE", "PAPAYA", "LEMON", "CRANBERRY", "HONEYDEW",
                "MANGO", "RAMBUTAN", "STRAWBERRY", "JACKFRUIT", "DURIAN", "PINEAPPLE",
                "MANGOSTEEN", "RAMBUTAN"];

// Global Variables
let masterWord = "";
let guessedLetters = [];
let wrongGuesses = 0;
let currWordStatus = null;

// Keyboards
const firstRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const scndRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const thirdRow = ["Z", "X", "C", "V", "B", "N", "M"];

// Functions

// Generates a random word from the array of words.
const generateWord = () => {
    const len = wordArr.length;
    masterWord = wordArr[Math.floor(Math.random() * len)];
}

// Creates the keyboard interface.
const createButtons = () => {
    let firstRowKeyboard = firstRow.map(item => 
        `<button
            class="btn btn-primary"
            id="` + item + `"
            onclick="userGuess('` + item + `')">
        ` + item + `
        </button>`
    ).join(" ");

    let scndRowKeyboard = scndRow.map(item => 
        `<button
            class="btn btn-primary"
            id="` + item + `"
            onclick="userGuess('` + item + `')">
        ` + item + `
        </button>`
    ).join(" ");

    let thirdRowKeyboard = thirdRow.map(item => 
        `<button
            class="btn btn-primary"
            id="` + item + `"
            onclick="userGuess('` + item + `')">
        ` + item + `
        </button>`
    ).join(" ");

    document.getElementById("keyboardRow1").innerHTML = firstRowKeyboard;
    document.getElementById("keyboardRow2").innerHTML = scndRowKeyboard;
    document.getElementById("keyboardRow3").innerHTML = thirdRowKeyboard;
}

// Event listener for keypress
document.addEventListener("keypress", (event) => {
    // Check if the pressed key is a letter
    if (/^[a-zA-Z]$/.test(event.key)) {
        // Convert the pressed key to uppercase and call userGuess function
        document.getElementById(event.key.toUpperCase()).click();
    }
});

// Updates the current word status.
const updateWordStatus = () => {
    currWordStatus = masterWord.split("").map(char => 
        guessedLetters.includes(char)
            ? char
            : " _ ").join("");
    document.getElementById("wordStatus").innerHTML = currWordStatus;
}

// Main function when user clicks and guesses a letter.
const userGuess = (letter) => {
    guessedLetters.push(letter);
    // Disable the button upon selection
    document.getElementById(letter).setAttribute("disabled", true);
    
    if (masterWord.indexOf(letter) >= 0) {
        updateWordStatus();
        if (currWordStatus == masterWord) {
            document.getElementById("keyboardRow1").innerHTML = 'Congratulations, You Won!';
            document.getElementById("keyboardRow2").innerHTML = 'Press Restart Game to play again!';
            document.getElementById("keyboardRow3").innerHTML = '';
        }
    } else {
        wrongGuesses++;
        if (wrongGuesses == 6) {
            document.getElementById("keyboardRow1").innerHTML = 'Sorry, You Lost!';
            document.getElementById("keyboardRow2").innerHTML = 'Correct answer was: ' + masterWord;
            document.getElementById("keyboardRow3").innerHTML = 'Press Restart Game to play again!';
        }
        document.getElementById("wrongGuess").innerHTML = wrongGuesses;
        document.getElementById("pic").src = "./images/animations (Light mode)/L"
            + wrongGuesses + ".gif";
    }
}

// Restarts the game.
const restart = () => {
    wrongGuesses = 0;
    document.getElementById("wrongGuess").innerHTML = wrongGuesses;
    guessedLetters = [];
    document.getElementById("pic").src = "./images/animations (Light mode)/L0.png";
    generateWord();
    createButtons();
    updateWordStatus();
}

// Ensure that the event listener is added after the document has loaded
document.addEventListener("DOMContentLoaded", () => {
    // Run your existing script here
    generateWord();
    createButtons();
    updateWordStatus();
});
