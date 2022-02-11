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
    document.getElementById("nextWordInput").style.display = "none";
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
            blankSpaces += "_ ";

        }
    }
    document.getElementById("blankSpaces").innerHTML = blankSpaces;
}
 
function nextLetterGuess() {
    nextLetter = document.getElementById("nextLetterInput").value;
    nextLetterV2 = nextLetter.split(" ");
    checkingCorrectAnswer.push(nextLetterV2);
    console.log(checkingCorrectAnswer);
    showAlreadyInputedLetters();
    checkIfCorrectGuess();
    deleteDuplicates();
    clearInputArea();
}

function showAlreadyInputedLetters() {
    if (potentialLetters.includes(nextLetter)) {
        const highlightedLetter = document.getElementById(nextLetter)
        highlightedLetter.classList.add("highlighted")
    }
    checkIfCorrectLetterGuess();
}

function deleteDuplicates() {
    checkingCorrectAnswerV2 = checkingCorrectAnswer.filter((c, index) => {
    return checkingCorrectAnswer.indexOf(c) === index;
});
console.log(checkingCorrectAnswerV2);
}

function checkIfCorrectGuess() {
  if (checkingCorrectAnswerV2 = nextWordArray) {
      
  }
  printTheCorrectLetter();
}

function clearInputArea() {
    //console.log("InnerText: " + "|"+document.getElementById("nextLetterInput").innerText+"|")
    document.getElementById("nextLetterInput").innerHTML = "";
}

function checkIfCorrectLetterGuess() {
    console.log(nextLetter);
    if (nextLetter = nextWordArray) {
        console.log("Correct Letter Guess");
        placeOfGuessedNumber = nextWordArray.indexOf(nextLetter);
        console.log(placeOfGuessedNumber);
    } else {
        console.log("incorrect");
    }
}

function printTheCorrectLetter() {
    placeOfGuessedNumber
}

