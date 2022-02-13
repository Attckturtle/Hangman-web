const gridContainer = document.getElementById("grid-container")
let nextWord;
let nextWordArray = [];
let numberOfLettersV1;
let numberOfLettersV2;
let nextLetter;
let potentialLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let guessedLetters = [];
let alphabet= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let correctAnswer = [];
let checkingCorrectAnswer = [];
let nextLetterV2;
let checkingCorrectAnswerV2 = [];
let placeOfGuessedNumber;
let blankSpacesArray;
let placeOfGuessedNumberV2;
let placeOfGuessedNumberV3;
let FirstBlankSpace
let firstLetterOfArray;
let nextWordArrayLetter;

//essentials
// step 1: go to a corner in a room (any room)
// step 2: cry until you no longer want to code
// step 3: happiness

for (let i = 0; i < 26; i++) {
    const gridItem = document.createElement("p");
    gridItem.classList.add("grid-item");
    gridItem.setAttribute("id", alphabet[i]);
    gridItem.innerText = alphabet[i];
    gridContainer.appendChild(gridItem);
}

function setNextWordToString() {
    nextWord = document.getElementById("nextWordInput").value;
    alert("New game started");
    nextWordArray = nextWord.split("");
    console.log(nextWordArray);
    console.log(nextWordArray);
    document.getElementById("nextWordInput").style.display = "none";
    document.getElementById("nextWordInputButton").style.display = "none";
    checkingCorrectAnswer.push(nextLetter);
    console.log(checkingCorrectAnswer);
    setTheBlankSpaces();
}

 function setTheBlankSpaces() {
    numberOfLettersV1 = nextWordArray.length;
    console.log(numberOfLettersV1);
    numberOfLettersV2 = parseInt(numberOfLettersV1);
    console.log(numberOfLettersV2);
    let blankSpaces = "";
    for (let i=0; i < numberOfLettersV2; i++) {
        if (nextWord[i] === " ") {
            blankSpaces += " space ";
        } else {
            blankSpaces += "_";

        }
    }
    blankSpacesArray = blankSpaces.split("");
    nextWordArrayLetter = nextWordArray;
    firstLetterOfArray = nextWordArrayLetter.splice(0,1);
    nextWordArray.splice(0, 0, firstLetterOfArray);
    blankSpacesArray.splice(0, 1);
    blankSpacesArray.splice(0, 0, firstLetterOfArray);
    console.log("log blank spaces");
    console.log(blankSpacesArray);
    document.getElementById("blankSpaces").innerHTML = blankSpacesArray;
}
 
function nextLetterGuess() {
    nextLetter = document.getElementById("nextLetterInput").value;
    checkingCorrectAnswer.splice(0, 1);
    console.log(checkingCorrectAnswer + "checking correct answer");
    showAlreadyInputedLetters();
}

function showAlreadyInputedLetters() {
    if (potentialLetters.includes(nextLetter)) {
        const highlightedLetter = document.getElementById(nextLetter)
        highlightedLetter.classList.add("highlighted")
    }
    clearInputArea();
}

function clearInputArea() {
    console.log("clearing letter input");
    document.getElementById("nextLetterInput").value = "";
    checkIfCorrectGuess();
}

function checkIfCorrectGuess() {
    placeOfGuessedWord = nextWordArray.indexOf(nextLetter);
    console.log(nextWordArray.indexOf(nextLetter));
    //todo: fix if statement not running correctly
    if (placeOfGuessedNumber >= 0) {
        console.log("correct");
        console.log(placeOfGuessedWord);
        console.log(nextWordArray);
        console.log(blankSpacesArray);
        changeTheBlankSpaces();
        checkIfCorrectWordGuess();
    }
}

function changeTheBlankSpaces() {
    //todo: fix blank spaces not changing
    blankSpacesArray.splice(placeOfGuessedWord, 1, nextLetter);
    console.log(blankSpacesArray);
    document.getElementById("blankSpaces").innerHTML = blankSpacesArray;
}

function checkIfCorrectWordGuess() {

    if (nextWordArray === checkingCorrectAnswer) {
        alert("You win");
    }
}