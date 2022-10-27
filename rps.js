// list out the chocies
const choices = ["rock", "paper", "scissors"];
const buttons = Array.from(document.querySelectorAll("button"));
let userScore = 0;
let computerScore = 0;
// pick a random choice for the computer
function getComputerChoice() {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

function playRound(playerSelection, computerSelection) {
  // set all variables and select the right divs
  // const playerChoice = this.textContent.toLowerCase();
  // let computerSelection = getComputerChoice();
  playerHTML = document.getElementById("playerChoice");
  computerHTML = document.getElementById("computerChoice");
  resultHTML = document.getElementById("result");
  // reset divs for playerChoice, computerChoice, and result for each round played
  playerHTML.textContent = "";
  computerHTML.textContent = "";
  resultHTML.textContent = "";

  // set the player and computer choices
  playerHTML.textContent = "You selected: " + playerSelection;
  computerHTML.textContent = "The computer selected: " + computerSelection;

  // determine the result
  if (playerSelection === "rock" && computerSelection === "scissors") {
    resultHTML.textContent = "You win!";
    return "You win!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    resultHTML.textContent = "You lose!";
    return "You lose!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    resultHTML.textContent = "You win!";
    return "You win!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    resultHTML.textContent = "You lose!";
    return "You lose!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    resultHTML.textContent = "You lose!";
    return "You lose!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    resultHTML.textContent = "You win!";
    return "You win!";
  } else {
    resultHTML.textContent = "It's a tie!";
    return "It's a tie!";
  }
}

function game(playerChoice, computerChoice) {
  let playerSelection = this.textContent.toLowerCase();
  console.log(playerSelection);
  let computerSelection = getComputerChoice();
  let outcome = playRound(playerSelection, computerSelection);
  if (outcome === "You win!") {
    userScore++;
  } else if (outcome === "You lose!") {
    computerScore++;
  } else {
  }
  console.log(`Score is You: ${userScore} Computer: ${computerScore}`);
}

buttons.forEach((button) => button.addEventListener("click", game));
