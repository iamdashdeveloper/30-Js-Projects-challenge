const hangmanImage = document.querySelector(".hangman-box img");
const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = document.querySelector(".play-again");


let currentWord, correctLetters,  wrongGuessCount;
const maxGuesses = 6;

const resetGame = () => {
    //Reseting all game variables and ui elements
    correctLetters = [];
    wrongGuessCount = 0;
    hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    gameModal.classList.remove("show");


}
const getRandomWord = () => {
    //selecting a random word from the word list
    const {word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word;
    document.querySelector(".hint-text b").innerHTML = hint;
    resetGame();
    
}
const gameOver = (isVictory) =>{
    // After 300ms of game complete.. show modal with relevant details
    setTimeout(()=>{
        const modalText = isVictory ? `You found the words:` : `The correct word was:`;
        gameModal.querySelector("img").src = `images/${isVictory ? 'victory': 'lost'}.gif`;
        gameModal.querySelector("h4").innerText = `${isVictory ? 'Congrats': 'Game Over!'}`;
        gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;


        gameModal.classList.add("show");
    }, 300);
}
const initGame = (button, clickedLetter) => {
    //checking if clicked letter exists on the current word
    if(currentWord.includes(clickedLetter)){
        [...currentWord].forEach((letter, index) =>{
            if(letter === clickedLetter) {
                correctLetters.push(letter);
                //showing all the correct letters on the word display
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        });

    }else{
        //if clicked letter does not match to the current word, update the wrong guess count and hangman image
        wrongGuessCount++;
        hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;
    }
    button.disabled = true;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    // calling gameOver if any of these conditions meets
    if(wrongGuessCount === maxGuesses) return gameOver(false);
    if(correctLetters.length === currentWord.length) return gameOver(true);

}
// creating keyoard buttons
for (let i = 97; i <= 122; i++){
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)));
}

getRandomWord()
playAgainBtn.addEventListener("click", getRandomWord)