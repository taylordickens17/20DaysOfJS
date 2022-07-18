const wordEl = document.getElementById("word");
const wrongLettersEl = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-button");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");

const figureParts = document.querySelectorAll(".figure-part");

const words = ["application", "programming", "interface", "wizard"];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = ["w", "i", "z", "a", "r", "d"];
const wrongLetters = [];

// Show the hidden word
// Grabbing our selectedWord, splitting it into an array, mapping through it, check to see if that letter is in the correctedLetters array. If it is display the letter. If it's not, put an empty string. Then finally turning it back into a string with a join method.
function displayWord() {
  wordEl.innerHTML = `
        ${selectedWord
          .split("")
          .map(
            (letter) => `
                <span class="letter">
                    ${correctLetters.includes(letter) ? letter : ""}
                </span>
            `
          )
          .join("")}
    `;

  const innerWord = wordEl.innerText.replace(/\n/g, "");

  if (innerWord === selectedWord) {
    finalMessage.innerText = "Congratulations! You Won! 🤡";
    popup.style.display = "flex";
  }
}

displayWord();
