// list out the chocies
const choices = ["rock", "paper", "scissors"];
const buttons = Array.from(document.querySelectorAll("button"));
let userScore = 0;
let computerScore = 0;
let winngScore = 5;

// pick a random choice for the computer
function getComputerChoice() {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

function disableButtons(buttons) {
  buttons.forEach((button) => (button.disabled = true));
}

function playRound(playerChoice) {
  // set all variables and select the right divs
  let playerSelection = this.textContent.toLowerCase();
  let computerSelection = getComputerChoice();
  let playerHTML = document.getElementById("playerChoice");
  let computerHTML = document.getElementById("computerChoice");
  let resultHTML = document.getElementById("result");
  let playerScoreHTML = document.getElementById("playerScore");
  let computerScoreHTML = document.getElementById("computerScore");
  let gameOver = document.getElementById("gameOver");

  // set the player and computer choices
  playerHTML.textContent = "You selected: " + playerSelection;
  computerHTML.textContent = "The computer selected: " + computerSelection;

  // determine the result and increase the score
  if (playerSelection === "rock" && computerSelection === "scissors") {
    userScore++;
    resultHTML.textContent = "You win!";
    playerScoreHTML.textContent = "Your score: " + userScore;
    computerScoreHTML.textContent = "Computer score: " + computerScore;
    if (userScore == winngScore) {
      gameOver.textContent = "GAME OVER! YOU WIN!";
      disableButtons(buttons);
    }
    if (computerScore == winngScore) {
      gameOver.textContent = "GAME OVER! YOU LOSE!";
      disableButtons(buttons);
    }
    return "You win!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    resultHTML.textContent = "You lose!";
    playerScoreHTML.textContent = "Your score: " + userScore;
    computerScoreHTML.textContent = "Computer score: " + computerScore;
    if (userScore == winngScore) {
      gameOver.textContent = "GAME OVER! YOU WIN!";
      disableButtons(buttons);
    }
    if (computerScore == winngScore) {
      gameOver.textContent = "GAME OVER! YOU LOSE!";
      disableButtons(buttons);
    }
    return "You lose!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    userScore++;
    resultHTML.textContent = "You win!";
    playerScoreHTML.textContent = "Your score: " + userScore;
    computerScoreHTML.textContent = "Computer score: " + computerScore;
    if (userScore == winngScore) {
      gameOver.textContent = "GAME OVER! YOU WIN!";
      disableButtons(buttons);
    }
    if (computerScore == winngScore) {
      gameOver.textContent = "GAME OVER! YOU LOSE!";
      disableButtons(buttons);
    }
    return "You win!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    resultHTML.textContent = "You lose!";
    playerScoreHTML.textContent = "Your score: " + userScore;
    computerScoreHTML.textContent = "Computer score: " + computerScore;
    if (userScore == winngScore) {
      gameOver.textContent = "GAME OVER! YOU WIN!";
      disableButtons(buttons);
    }
    if (computerScore == winngScore) {
      gameOver.textContent = "GAME OVER! YOU LOSE!";
      disableButtons(buttons);
    }
    return "You lose!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    resultHTML.textContent = "You lose!";
    playerScoreHTML.textContent = "Your score: " + userScore;
    computerScoreHTML.textContent = "Computer score: " + computerScore;
    if (userScore == winngScore) {
      gameOver.textContent = "GAME OVER! YOU WIN!";
      disableButtons(buttons);
    }
    if (computerScore == winngScore) {
      gameOver.textContent = "GAME OVER! YOU LOSE!";
      disableButtons(buttons);
    }
    return "You lose!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    userScore++;
    resultHTML.textContent = "You win!";
    playerScoreHTML.textContent = "Your score: " + userScore;
    computerScoreHTML.textContent = "Computer score: " + computerScore;
    if (userScore == winngScore) {
      gameOver.textContent = "GAME OVER! YOU WIN!";
      disableButtons(buttons);
    }
    if (computerScore == winngScore) {
      gameOver.textContent = "GAME OVER! YOU LOSE!";
      disableButtons(buttons);
    }
    return "You win!";
  } else {
    resultHTML.textContent = "It's a tie!";
    playerScoreHTML.textContent = "Your score: " + userScore;
    computerScoreHTML.textContent = "Computer score: " + computerScore;
    return "It's a tie!";
  }
}

buttons.forEach((button) => button.addEventListener("click", playRound));
