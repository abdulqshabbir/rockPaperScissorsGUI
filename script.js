const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

let gamePaused = false;

function playOneRound(playerChoice) {
  let computerChoice = computerPlay();
  let result = checkForWins(playerChoice, computerChoice);

  displayChoices(playerChoice, computerChoice);
  displayWinner(result);
  displayPlayerImage(playerChoice);
  displayComputerImage(computerChoice);
  gamePaused = true;
  playAgain();
}

function displayComputerImage(computerChoice) {
    const imageDiv = document.getElementById('images');
    const computerImg = document.createElement('img');
    computerImg.setAttribute('id', 'computerImage');

    if (computerChoice === 'Rock') {
      computerImg.setAttribute('src', 'rock.jpg');
      imageDiv.appendChild(computerImg);
    }
    else if (computerChoice === 'Scissors') {
      computerImg.setAttribute('src', 'scissors.gif');
      imageDiv.appendChild(computerImg);
    }
    else if(computerChoice === 'Paper') {
      computerImg.setAttribute('src', 'paper.jpg');
      imageDiv.appendChild(computerImg);
    }
}

function displayPlayerImage(playerChoice) {
  const imageDiv = document.getElementById('images');
  const playerImg = document.createElement('img');

  playerImg.setAttribute('id', 'playerImage');

  if (playerChoice === 'Rock') {
    playerImg.setAttribute('src', 'rock.jpg');
    imageDiv.appendChild(playerImg);
  }
  else if (playerChoice === 'Scissors') {
    playerImg.setAttribute('src', 'scissors.gif');
    imageDiv.appendChild(playerImg);
  }
  else if(playerChoice === 'Paper') {
    playerImg.setAttribute('src', 'paper.jpg');
    imageDiv.appendChild(playerImg);
  }
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
    addTitleBack();
  });
}

function addTitleBack() {
  const title = document.getElementById('chooseYourWeapon');
  title.innerHTML = 'Choose Your Weapon!';
}

function removeElementsForANewGame(playAgainButton) {
  const playerChoice = document.getElementById('playerChoice');
  const computerChoice = document.getElementById('computerChoice');
  const computerImage = document.getElementById('computerImage');
  const playerImage = document.getElementById('playerImage');

  playAgainButton.remove();
  playerChoice.remove();
  computerChoice.remove();
  computerImage.remove();
  playerImage.remove(); 
}

function displayWinner(winner) {
  const whoIsWinner = document.getElementById('chooseYourWeapon');
  whoIsWinner.innerHTML = winner;
  whoIsWinner.classList.add('title');
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
    return "It's a tie!";
  }

  else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    return 'Player wins!';
  }
  else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    return 'Player wins!';
  }
  else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    return 'Player wins!';
  }
  else if (computerSelection === 'Scissors' && playerSelection === 'Paper') {
    return 'Computer wins!';
  }
  else if (computerSelection === 'Rock' && playerSelection === 'Scissors') {
    return 'Computer wins!';
  }
  else if (computerSelection === 'Paper' && playerSelection === 'Rock') {
    return 'Computer wins!';
  }
  else if (playerSelection !== 'Rock' && playerSelection !== 'Scissors' && playerSelection !== 'Paper') {
    alert("You did not enter a valid input!");
    return playOneRound();
  }
}

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
