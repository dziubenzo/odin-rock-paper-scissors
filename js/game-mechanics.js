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

// // Play an entire game of rock paper scissors
// // First to five wins
// function game() {

//   let playerScore = 0;
//   let computerScore = 0;
//   let round = 1;
//   const scoreToWin = 5;

//   while (playerScore < scoreToWin && computerScore < scoreToWin) {
//     console.log(`ROUND ${round}`);
//     console.log('');
//     let result = playRound(getPlayerChoice(), getComputerChoice());

//     if (result === 'won') {
//       playerScore++;
//     } else if (result === 'lost') {
//       computerScore++;
//     }

//     console.log('');
//     console.log(`YOU: ${playerScore}`);
//     console.log(`COMPUTER: ${computerScore}`);
//     console.log('');
//     round++;
//   }

//   if (playerScore === scoreToWin) {
//     console.log('CONGRATULATIONS! You win the game!');
//   } else if (computerScore === scoreToWin) {
//     console.log('GAME OVER! Computer wins this time...');
//   }
// }

// UI implementation

let playerScore = 0;
let computerScore = 0;
let round = 1;
const scoreToWin = 5;

const parent = document.querySelector('.results');

let roundPara = document.createElement('p');
roundPara.classList.add('round');

let playerWeaponPara = document.createElement('p');
playerWeaponPara.classList.add('player-weapon');

let computerWeaponPara = document.createElement('p');
computerWeaponPara.classList.add('computer-weapon');

let resultPara = document.createElement('p');
resultPara.classList.add('result-round');

let playerScorePara = document.createElement('p');
playerScorePara.classList.add('player-score');

let computerScorePara = document.createElement('p');
computerScorePara.classList.add('computer-score');

const buttonsDiv = document.querySelector('.buttons');

// Add result-related HTML elements to the DOM once a button is clicked
buttonsDiv.addEventListener('click', showParas, { once: true });

function showParas() {
  parent.appendChild(roundPara);
}
