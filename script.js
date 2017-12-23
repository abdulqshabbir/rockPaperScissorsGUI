const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

let gamePaused = false;

rockButton.addEventListener('click', function(e) {
  if(gamePaused === false) {
    const playerChoice = e.target.innerHTML;
    playOneRound(playerChoice);
  }
});

paperButton.addEventListener('click', function(e) {
  if (gamePaused === false) {
    const playerChoice = e.target.innerHTML;
    playOneRound(playerChoice);
  }
});

scissorsButton.addEventListener('click', function(e) {
  if(gamePaused === false) {
    const playerChoice = e.target.innerHTML;
    playOneRound(playerChoice);
  }
});

function playOneRound(playerChoice) {
  let computerChoice = computerPlay();
  let result = checkForWins(playerChoice, computerChoice);
  displayChoices(playerChoice, computerChoice);
  displayWinner(result);
  gamePaused = true;
  playAgain();
}

function playAgain() {
  const container = document.getElementById('container');
  const playAgainButton = document.createElement('button');
  playAgainButton.classList.add('playAgainButton');
  playAgainButton.textContent = 'Play Again?';
  container.appendChild(playAgainButton);
  playAgainButton.addEventListener('click', function(e) {
    removeElementsForANewGame(playAgainButton);
    gamePaused = false;
  });
}

function removeElementsForANewGame(playAgainButton) {
  const playerChoice = document.getElementById('playerChoice');
  const computerChoice = document.getElementById('computerChoice');

  playAgainButton.remove();
  playerChoice.remove();
  computerChoice.remove(); 
}

function displayWinner(winner) {
  const whoIsWinner = document.getElementById('chooseYourWeapon');
  whoIsWinner.innerHTML = winner;
}

function displayChoices(playerChoice, computerChoice) {
  const parentElement = document.getElementById('player');
  const displayPlayerChoice = document.createElement('p');
  displayPlayerChoice.setAttribute('id', 'playerChoice');
  displayPlayerChoice.innerHTML = playerChoice;
  parentElement.appendChild(displayPlayerChoice);

  const parentElement2 = document.getElementById('computer');
  const displayComputerChoice = document.createElement('p');
  displayComputerChoice.setAttribute('id', 'computerChoice');
  displayComputerChoice.innerHTML = computerChoice;
  parentElement2.appendChild(displayComputerChoice);
}

function computerPlay() {
  let choices = ['Rock', 'Paper', 'Scissors'];
  let randNumber = Math.floor(Math.random()*3);
  return choices[randNumber];
}

function checkForWins(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'tie';
  }

  else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    return 'player win';
  }
  else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    return 'player win';
  }
  else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    return 'player win';
  }
  else if (computerSelection === 'Scissors' && playerSelection === 'Paper') {
    return 'computer win';
  }
  else if (computerSelection === 'Rock' && playerSelection === 'Scissors') {
    return 'computer win';
  }
  else if (computerSelection === 'Paper' && playerSelection === 'Rock') {
    return 'computer win';
  }
  else if (playerSelection !== 'Rock' && playerSelection !== 'Scissors' && playerSelection !== 'Paper') {
    alert("You did not enter a valid input!");
    return playOneRound();
  }
}






/*
function playGame() {
  let computerTally = 0;
  let playerTally = 0;
  for (var i = 1; i < 6; i++) {
    let resultOfRound = playOneRound();

    if(resultOfRound == 'player win') {
      playerTally++;
    }
    else if (resultOfRound == 'computer win') {
      computerTally++;
    }
    else if (resultOfRound == 'tie') {
    }
  }
  return;
}
*/
