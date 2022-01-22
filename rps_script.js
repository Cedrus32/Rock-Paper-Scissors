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
function resetBoard() {
    //remove computer & player images
    const imgs = document.querySelectorAll('img');
    console.log(imgs);
    for (let i = 0; i < 5; i++) {
        computerMain.removeChild(imgs[i]);
    }
    console.log(imgs);
    for (let i = 5; i < 10; i++) {
        playerMain.removeChild(imgs[i]);
    }
    //reset scores
    playerScore -= playerScore;
    computerScore -= computerScore;
    //reset round
    round = 0;
    console.log(round);
    divMain.removeChild(pWinner);
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

const computerMain = document.querySelector('div#computer-main');
const playerMain = document.querySelector('div#player-main');
//... display choices
function displayChoices(computerSelection, playerSelection) {
    // display computer choice
    let computerImg = document.createElement('img');
    computerImg.src = `./imgs/${computerSelection}.png`;
    computerImg.classList.add('rotate');
    computerMain.appendChild(computerImg);

    // display player choice
    let playerImg = document.createElement('img');
    playerImg.src = `./imgs/${playerSelection}.png`;
    playerMain.appendChild(playerImg);
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
function playGame() {
    btn.forEach(button => button.addEventListener('click', () => {
        //reset at end of game
        console.log(round);
        if (round === 5) {
            resetBoard(computerScore, playerScore);
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