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

const divMain = document.querySelector('div');
const pChoices = document.createElement('p');
const pResults = document.createElement('p');
const pScore = document.createElement('p');
let computerScore = 0;
let playerScore = 0;
//... play round
function playRound(computerSelection, playerSelection) {
    //display choices
    pChoices.textContent = `You: ${playerSelection}  -- Computer: ${computerSelection}`;
    divMain.appendChild(pChoices);

    //compare choices ...
    compareChoices(computerChoice, playerChoice);

    //display scores & results
    pScore.textContent = `You: ${playerScore} -- Computer: ${computerScore}`;
    divMain.appendChild(pResults);
    divMain.appendChild(pScore);
    // return computerScore, playerScore;
}

const pWinner = document.createElement('p');
//check scores
function checkScores(computerScore, playerScore) {
    if (computerScore === 5 || playerScore === 5) {
        if (computerScore > playerScore) {
            pWinner.textContent = 'You lost the game. =(';
        } else if (computerScore < playerScore) {
            pWinner.textContent = 'You won the game! =D';
        };
        divMain.appendChild(pWinner);
        return true;
    };
}


//play game
const btn = document.querySelectorAll('button.playerChoice');
function playGame() {
    btn.forEach(button => button.addEventListener('click', () => {
        //get player choice
        btnID = button.id;
        playerChoice = btnID;
        //get computer choice ...
        computerChoice = getComputerChoice();
        console.log(computerChoice);
        //play round...
        playRound(computerChoice, playerChoice);
        //check scores
        let winner = checkScores(computerScore, playerScore);
        console.log(winner);
        //TODO: check scores using winner = checkScores()...
        //TODO: ...if winner === true, make buttons inactive
    }));
}


// test script
// let game = playGame();


//event script
window.addEventListener('load', playGame);