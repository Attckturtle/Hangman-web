const gridContainer = document.getElementById("grid-container");
let nextWord;
let nextWordArray = [];
let numberOfLettersV1;
let numberOfLettersV2;
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
let correctAnswer = [];
let checkingCorrectAnswer = [];
let nextLetterV2;
let checkingCorrectAnswerV2 = [];
let placeOfGuessedWord;
let blankSpacesArray;
let placeOfGuessedNumberV2;
let placeOfGuessedNumberV3;
let FirstBlankSpace;
let firstLetterOfArray;
let nextWordArrayLetter;
let numberOfGuesses = 0;

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
  document.getElementById("nextWordInputButton").style.display = "none";
  setTheBlankSpaces();
}

function setTheBlankSpaces() {
  numberOfLettersV1 = nextWordArray.length;
  console.log(numberOfLettersV1);
  numberOfLettersV2 = parseInt(numberOfLettersV1);
  console.log(numberOfLettersV2);
  let blankSpaces = "";
  for (let i = 0; i < numberOfLettersV2; i++) {
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
  console.log("log blank spaces");
  console.log(blankSpacesArray);
  document.getElementById("blankSpaces").innerHTML = blankSpacesArray;
}

function nextLetterGuess() {
  nextLetter = document.getElementById("nextLetterInput").value;
  console.log(checkingCorrectAnswer + "checking correct answer");
  //if (placeOfGuessedWord >= 0) {
  checkingCorrectAnswer.splice(0, 0, nextLetter);
  console.log("checking correct answer" + checkingCorrectAnswer);
  //}
  showAlreadyInputedLetters();
}

function showAlreadyInputedLetters() {
  if (potentialLetters.includes(nextLetter)) {
    const highlightedLetter = document.getElementById(nextLetter);
    highlightedLetter.classList.add("highlighted");
  }
  checkingCorrectAnswer.splice();
  clearInputArea();
}

function clearInputArea() {
  console.log("clearing letter input");
  document.getElementById("nextLetterInput").value = "";
  checkIfCorrectGuess();
}

function checkIfCorrectGuess() {
  placeOfGuessedWord = nextWordArray.indexOf(nextLetter);
  placeOfGuessedNumberV2 = parseInt(placeOfGuessedWord);
  console.log(nextWordArray.indexOf(nextLetter));
  console.log("if statement log");
  console.log(placeOfGuessedWord);
  if (placeOfGuessedWord >= 0) {
    console.log("correct");
    console.log(placeOfGuessedWord);
    console.log(nextWordArray);
    console.log(blankSpacesArray);
    changeTheBlankSpaces();
    checkIfCorrectWordGuess();
  } else {
    numberOfGuesses++;
    console.log(numberOfGuesses);
    showHangmanBodyParts();
  }
}

function showHangmanBodyParts() {
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
  }
}

function changeTheBlankSpaces() {
  blankSpacesArray.splice(placeOfGuessedWord, 1, nextLetter);
  console.log(blankSpacesArray);
  document.getElementById("blankSpaces").innerHTML = blankSpacesArray;
}

function checkIfCorrectWordGuess() {
  console.log(checkingCorrectAnswer);
  console.log(nextWordArray);
  //todo: fix issue with array equality measuring
  if (
    Array.isArray(checkingCorrectAnswer) &&
    Array.isArray(nextWordArray) &&
    checkingCorrectAnswer.length === nextWordArray.length &&
    checkingCorrectAnswer.every((val, index) => val === nextWordArray[index])
  ) {
    setTimeout(() => {
      window.location.reload();
      alert("You Win");
    }, 2000);
  }
}
