// Get random computer choice for the game
// Print result to the console
function getComputerChoice() {

  const choices = ['Rock', 'Paper', 'Scissors'];
  let arrayIndex = getArrayIndex();
  console.log(choices[arrayIndex]);
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

getComputerChoice();