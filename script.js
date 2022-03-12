const gridContainer = document.getElementById("grid-container");
let nextWord;
let nextWordArray = [];
let numberOfLetters;
let nextLetter;
let potentialLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let guessedLetters = [];
let alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let testAlphabet = [
  "b",
  "a",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let correctAnswer = [];
let checkingCorrectAnswer = [];
let placeOfGuessedWord;
let blankSpacesArray;
let FirstBlankSpace;
let firstLetterOfArray;
let nextWordArrayLetter;
let numberOfGuesses = 0;

//essentials
// step 1: go to a corner in a room (any room)
// step 2: cry until you no longer want to code
// step 3: happiness

//toggles lightmode and darkmode css files
function toggleTheme() {
  let theme = document.getElementsByTagName("link")[0];
  if (theme.getAttribute("href") == "lightmode.css") {
    theme.setAttribute("href", "darkmode.css");
  } else {
    theme.setAttribute("href", "lightmode.css");
  }
}

//generates the alphabet table
for (let i = 0; i < 26; i++) {
  const gridItem = document.createElement("p");
  gridItem.classList.add("grid-item");
  gridItem.setAttribute("id", alphabet[i]);
  gridItem.innerText = alphabet[i];
  gridContainer.appendChild(gridItem);
}

function setNextWordToString() {
  //saves input to nextWord
  nextWord = document.getElementById("nextWordInput").value;
  alert("New game started");
  nextWordArray = nextWord.split("");
  //clears input box
  document.getElementById("nextWordInput").style.display = "none";
  document.getElementById("nextWordInputButton").style.display = "none";
  setTheBlankSpaces();
}

function setTheBlankSpaces() {
  //prints blank spaces equal to the number of letters in the input
  numberOfLetters = nextWordArray.length;
  numberOfLetters = parseInt(numberOfLetters);
  let blankSpaces = "";
  for (let i = 0; i < numberOfLetters; i++) {
    if (nextWord[i] === " ") {
      blankSpaces += " space ";
    } else {
      blankSpaces += "_";
    }
  }
  blankSpacesArray = blankSpaces.split("");
  nextWordArrayLetter = nextWordArray;
  firstLetterOfArray = nextWordArrayLetter.splice(0, 1);
  nextWordArray.splice(0, 0, firstLetterOfArray);
  blankSpacesArray.splice(0, 1);
  blankSpacesArray.splice(0, 0, firstLetterOfArray);
  document.getElementById("blankSpaces").innerHTML = blankSpacesArray;
}

function nextLetterGuess() {
  nextLetter = document.getElementById("nextLetterInput").value;
  showAlreadyInputedLetters();
}

function showAlreadyInputedLetters() {
  if (potentialLetters.includes(nextLetter)) {
    const highlightedLetter = document.getElementById(nextLetter);
    highlightedLetter.classList.add("highlighted");
  }
  clearInputArea();
}

function getUnique(array) {
  let uniqueArray = [];
  for (i = 0; i < array.length; i++) {
    if (uniqueArray.indexOf(array[i]) === -1) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
}

function clearInputArea() {
  document.getElementById("nextLetterInput").value = "";
  checkIfCorrectGuess();
}

function checkIfCorrectGuess() {
  placeOfGuessedWord = nextWordArray.indexOf(nextLetter);
  placeOfGuessedWord = parseInt(placeOfGuessedWord);
  checkingCorrectAnswer = getUnique(checkingCorrectAnswer);
  if (placeOfGuessedWord >= 0) {
    checkingCorrectAnswer.splice(0, 0, nextLetter);
    changeTheBlankSpaces();
    checkIfCorrectWordGuess();
  } else {
    numberOfGuesses++;
    showHangmanBodyParts();
  }
}

function showHangmanBodyParts() {
  //draws the hangman body parts
  switch (numberOfGuesses) {
    case 1:
      document.getElementById("hangmanHead").classList.remove("incorrectGuess");
      break;
    case 2:
      document.getElementById("hangmanBody").classList.remove("incorrectGuess");
      break;
    case 3:
      document
        .getElementById("hangmanLeftHand")
        .classList.remove("incorrectGuess");
      break;
    case 4:
      document
        .getElementById("hangmanRightHand")
        .classList.remove("incorrectGuess");
      break;
    case 5:
      document
        .getElementById("hangmanLeftLeg")
        .classList.remove("incorrectGuess");
      break;
    case 6:
      document
        .getElementById("hangmanRightLeg")
        .classList.remove("incorrectGuess");
      alert("You lose");
      setTimeout(() => {
        window.location.reload();
        alert("Input next");
      }, 2000);
      break;
    default:
      alert("enter a letter");
      break;
  }
}

function changeTheBlankSpaces() {
  blankSpacesArray.splice(placeOfGuessedWord, 1, nextLetter);
  document.getElementById("blankSpaces").innerHTML = blankSpacesArray;
}

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

function checkIfCorrectWordGuess() {
  if (arrayEquals(nextWordArray, blankSpacesArray)) {
    setTimeout(() => {
      alert("You Win");
      window.location.reload();
    }, 2000);
  }
}