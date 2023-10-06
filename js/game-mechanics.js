// UI implementation

let playerScore = 0;
let computerScore = 0;
let round = 0;
const scoreToWin = 5;

const parent = document.querySelector('.results');

let roundPara = document.createElement('p');
roundPara.classList.add('round');

let weaponsPara = document.createElement('p');
weaponsPara.classList.add('weapons');

let resultPara = document.createElement('p');
resultPara.classList.add('result-round');

let playerScorePara = document.createElement('p');
playerScorePara.classList.add('player-score');

let computerScorePara = document.createElement('p');
computerScorePara.classList.add('computer-score');

const buttonsDiv = document.querySelector('.buttons');

buttonsDiv.addEventListener('click', showParas);

buttonsDiv.addEventListener('click', playGame);

// FUNCTIONS

// Get random computer choice for the game
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
        return 'tie';
      } else if (computerChoice === 'paper') {
        return 'lost';
      } else {
        return 'won';
      }
    case 'paper':
      if (computerChoice === 'rock') {
        return 'won';
      } else if (computerChoice === 'paper') {
        return 'tie';
      } else {
        return 'lost';
      }
    case 'scissors':
      if (computerChoice === 'rock') {
        return 'lost';
      } else if (computerChoice === 'paper') {
        return 'won';
      } else {
        return 'tie';
      }
  }
}

// Add result-related HTML elements to the DOM once a button is clicked
function showParas(event) {
  // Make sure only one of the buttons triggers the event
  if (event.target === buttonsDiv) {
    return;
  }
  parent.appendChild(roundPara);
  parent.appendChild(weaponsPara);
  parent.appendChild(resultPara);
  parent.appendChild(playerScorePara);
  parent.appendChild(computerScorePara);

  // Remove respective event listener
  buttonsDiv.removeEventListener('click', showParas);
}

// Play the game and update scores once a button is clicked
function playGame(event) {
  // Make sure only one of the buttons triggers the event
  if (event.target === buttonsDiv) {
    return;
  }

  // Get result and respective emoji
  let computerChoice = getComputerChoice();
  let result = playRound(event.target.value, computerChoice);
  let playerEmoji = convertToEmoji(event.target.value);
  let computerEmoji = convertToEmoji(computerChoice);

  // Update text in all paragraphs
  // Update variables
  round++;
  roundPara.textContent = `ROUND ${round}`;

  weaponsPara.textContent = `${playerEmoji} versus ${computerEmoji}`;

  if (result === 'won') {
    resultPara.textContent = 'YOU WIN!';
    playerScore++;
  } else if (result === 'tie') {
    resultPara.textContent = 'TIE!';
  } else {
    resultPara.textContent = 'YOU LOSE!';
    computerScore++;
  }

  playerScorePara.textContent = `YOU: ${playerScore}`;
  computerScorePara.textContent = `COMPUTER: ${computerScore}`;

  // Game over behaviour
  if (playerScore === scoreToWin || computerScore === scoreToWin) {
    resultPara.classList.replace('result-round', 'game-over');
    // Move para to the end
    parent.appendChild(resultPara);

    if (playerScore === scoreToWin) {
      resultPara.textContent = 'GAME OVER! YOU WIN!';
    } else {
      resultPara.textContent = 'GAME OVER! YOU LOSE...';
    }

    // Remove respective event listener
    buttonsDiv.removeEventListener('click', playGame);
  }
}

// Convert weapon to emoji (helper function)
function convertToEmoji(weapon) {
  if (weapon === 'rock') {
    return '🪨';
  } else if (weapon === 'paper') {
    return '📜';
  } else {
    return '✂️';
  }
}
