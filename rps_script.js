const pWinner = document.createElement('p');
//check scores
function checkScores(computerScore, playerScore) {
    if (computerScore === playerScore) {
        pWinner.textContent = 'You tied with the computer.';
    } else if (computerScore > playerScore) {
        pWinner.textContent = 'You lost the game. =(';
    } else if (computerScore < playerScore) {
        pWinner.textContent = 'You won the game! =D';
    };
    divMain.appendChild(pWinner);
}

let winner;
// check end of game...
function resetGame(computerScore, playerScore) {
    //reset scores
    playerScore -= playerScore;
    computerScore -= computerScore;
    //reset round
    round -= round;
    console.log(round);
    //remove computer & player images
    document.getElementById('computer-main').removeChild(computerBoard);
    document.getElementById('player-main').removeChild(playerBoard);
}

let computerScore = 0;
let playerScore = 0;
//... compare choices
function compareChoices(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        pResults.textContent = 'It\'s a tie.';
    } else if (computerSelection === 'rock') {
        if (playerSelection === 'paper') {
            playerScore += 1;
            pResults.textContent = 'You win this round! =D';
        } else if (playerSelection === 'scissors') {
            computerScore += 1;
            pResults.textContent = 'Computer wins this round. =(';
        };
    } else if (computerSelection === 'paper') {
        if (playerSelection === 'rock') {
            computerScore += 1;
            pResults.textContent = 'Computer wins this round. =(';
        } else if (playerSelection === 'scissors') {
            playerScore += 1;
            pResults.textContent = 'You win this round! =D';
        };
    } else if (computerSelection === 'scissors') {
        if (playerSelection === 'rock') {
            playerScore += 1;
            pResults.textContent = 'You win this round! =D';
        } else if (playerSelection === 'paper') {
            computerScore += 1;
            pResults.textContent = 'Computer wins this round. =(';
        };
    }
}

const choiceButtons = document.querySelector('div.choice-buttons')
const computerBoard = document.createElement('div');
const playerBoard = document.createElement('div');
document.getElementById('computer-main').appendChild(computerBoard);
document.getElementById('player-main').appendChild(playerBoard);
computerBoard.classList.add('results');
playerBoard.classList.add('results');
//... display choices
function displayChoices(computerSelection, playerSelection) {
    // display computer choice
    let computerImg = document.createElement('img');
    computerImg.src = `./imgs/${computerSelection}.png`;
    computerImg.classList.add('rotate');
    computerBoard.appendChild(computerImg);

    // display player choice
    let playerImg = document.createElement('img');
    playerImg.src = `./imgs/${playerSelection}.png`;
    playerBoard.appendChild(playerImg);
}

const divMain = document.querySelector('div');
const pChoices = document.createElement('p');
const pResults = document.createElement('p');
const pScore = document.createElement('p');
let round = 0;
//... play round
function playRound(computerSelection, playerSelection) {
    
    //display choices...
    displayChoices(computerSelection, playerSelection);
    
    pChoices.textContent = `You: ${playerSelection}  -- Computer: ${computerSelection}`;
    divMain.appendChild(pChoices);

    //compare choices ...
    compareChoices(computerChoice, playerChoice);
    //display results
    divMain.appendChild(pResults);

    //display scores
    pScore.textContent = `You: ${playerScore} -- Computer: ${computerScore}`;
    divMain.appendChild(pScore);

    //increase round
    round++;
}

let computerChoice;
//... get computer choice
function getComputerChoice() {
    let computerInput = Math.floor(Math.random() * 3);
    switch (computerInput) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
    };
    return computerChoice;
}

//play game
const btn = document.querySelectorAll('button.playerChoice');
console.log(btn);
function playGame() {
    btn.forEach(button => button.addEventListener('click', () => {
        //reset at end of game
        console.log(round);
        if (round === 5) {
            resetGame(computerScore, playerScore);
        }

        //get player choice
        btnID = button.id;
        playerChoice = btnID;
        //get computer choice ...
        computerChoice = getComputerChoice();
        console.log(computerChoice);

        //play round...
        playRound(computerChoice, playerChoice);
        console.log(round);

        if (round === 5) {
            checkScores(computerScore, playerScore);
        }
    }));
}

//event script
playGame = playGame();