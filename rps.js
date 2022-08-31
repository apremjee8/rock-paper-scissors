// list out the chocies
const choices = ["rock", "paper", "scissors"];

// pick a random choice for the computer
function getComputerChoice() {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win!";
  } else {
    return "It's a tie!";
  }
}

function game() {
  let userScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("What is your choice?");
    let computerSelection = getComputerChoice();
    console.log(playerSelection);
    console.log(computerSelection);
    let outcome = playRound(playerSelection, computerSelection);
    if (outcome === "You win!") {
      userScore++;
    } else if (outcome === "You lose!") {
      computerScore++;
    } else {
    }
    console.log(`Score is You: ${userScore} Computer: ${computerScore}`);
  }
}

console.log(game());
