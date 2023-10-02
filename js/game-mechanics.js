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

// Play one round of rock paper scissors
// Return one of the three results
function playRound(playerChoice, computerChoice) {

  switch (playerChoice) {
    case 'rock':
      if (computerChoice === 'rock') {
        console.log('Tie!');
        return 'tie';
      } else if (computerChoice === 'paper') {
        console.log('You lose! Paper beats Rock :(');
        return 'lost';
      } else {
        console.log('You win! Rock beats Scissors :)');
        return 'won';
      }
    case 'paper':
      if (computerChoice === 'rock') {
        console.log('You win! Paper beats Rock :)');
        return 'won';
      } else if (computerChoice === 'paper') {
        console.log('Tie!');
        return 'tie';
      } else {
        console.log('You lose! Scissors beat Paper :(');
        return 'lost';
      }
    case 'scissors':
      if (computerChoice === 'rock') {
        console.log('You lose! Rock beats Scissors :(');
        return 'lost';
      } else if (computerChoice === 'paper') {
        console.log('You win! Scissors beat Paper :)');
        return 'won';
      } else {
        console.log('Tie!');
        return 'tie';
      }
  }
}

// Play an entire game of rock paper scissors
// First to five wins
function game() {

  let playerScore = 0;
  let computerScore = 0;
  let round = 1;
  const scoreToWin = 5;

  while (playerScore < scoreToWin && computerScore < scoreToWin) {
    console.log(`ROUND ${round}`);
    console.log('');
    let result = playRound(getPlayerChoice(), getComputerChoice());

    if (result === 'won') {
      playerScore++;
    } else if (result === 'lost') {
      computerScore++;
    }

    console.log('');
    console.log(`YOU: ${playerScore}`);
    console.log(`COMPUTER: ${computerScore}`);
    console.log('');
    round++;
  }

  if (playerScore === scoreToWin) {
    console.log('CONGRATULATIONS! You win the game!');
  } else if (computerScore === scoreToWin) {
    console.log('GAME OVER! Computer wins this time...');
  }
}

// Print starting message to the Console
console.log('ROCK PAPER SCISSORS. DEVTOOLS CONSOLE EDITION.');
console.log('');

// Call the game() function to play a game of rock paper scissors
game();