// Get random computer choice for the game
// Print result to the console
function getComputerChoice() {

  const choices = ['rock', 'paper', 'scissors'];
  let arrayIndex = getArrayIndex();
  return choices[arrayIndex];
}

// Generate array index for the getComputerChoice() function
function getArrayIndex() {

  let randomNumber = Math.random() * 100;
  let arrayIndex;

  if (randomNumber < 33) {
    arrayIndex = 0;
  } else if (randomNumber > 66) {
    arrayIndex = 1;
  } else {
    arrayIndex = 2;
  }
  return arrayIndex;
}

// Get proper input from player
function getPlayerChoice() {

  let playerChoice;

  do {
    playerChoice = prompt('Rock, paper, or scissors?').toLowerCase();
  } while (playerChoice != 'rock' && playerChoice != 'paper' && playerChoice != 'scissors');

  return playerChoice;
}

getComputerChoice();
getPlayerChoice();
