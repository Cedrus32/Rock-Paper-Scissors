let computerChoice;
//get computer choice
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
    }
    return computerChoice;
}

//compare choices
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
        }
    } else if (computerSelection === 'paper') {
        if (playerSelection === 'rock') {
            computerScore += 1;
            pResults.textContent = 'Computer wins this round. =(';
        } else if (playerSelection === 'scissors') {
            playerScore += 1;
            pResults.textContent = 'You win this round! =D';
        }
    } else if (computerSelection === 'scissors') {
        if (playerSelection === 'rock') {
            playerScore += 1;
            pResults.textContent = 'You win this round! =D';
        } else if (playerSelection === 'paper') {
            computerScore += 1;
            pResults.textContent = 'Computer wins this round. =(';
        }
    }
}

let computerScore = 0;
let playerScore = 0;
const pChoices = document.createElement('p');
const pResults = document.createElement('p');
const pScore = document.createElement('p');
//play round
function playRound(computerSelection, playerSelection) {
    pChoices.textContent = `You: ${playerSelection}  -- Computer: ${computerSelection}`;
    divMain.appendChild(pChoices);

    compareChoices(computerChoice, playerChoice);

    pScore.textContent = `You: ${playerScore} -- Computer: ${computerScore}`;
    divMain.appendChild(pResults);
    divMain.appendChild(pScore);
    // return computerScore, playerScore;
}

//play game
const gameResult = document.createElement('div');
function playGame() {
    computerChoice = getComputerChoice();
    console.log(computerChoice);
    const btn = document.querySelectorAll('button');
    btn.forEach(button => button.addEventListener('click', () => {
        btnID = button.id;
        playerChoice = btnID;
        playRound(computerChoice, playerChoice);
    }));

    if (computerScore === 5 || playerScore === 5) {
        if (computerScore > playerScore) {
            gameResult.textContent = 'You lost the game. =(';
        } else if (computerScore < playerScore) {
            gameResult.textContent = 'You won the game! =D';
        }
    }
    divMain.appendChild(gameResult);
}


// test script
// let game = playGame();


//event script

const divMain = document.querySelector('div');
window.addEventListener('load', playGame);