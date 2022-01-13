//computer choice
let computerChoice;
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

//player selection
let playerChoice;
function getPlayerChoice() {
    let playerInput;
    while (!(playerInput === null || playerInput === 'rock' ||
            playerInput === 'paper' || playerInput === 'scissors')) {
        playerInput = prompt('Rock, Paper, or Scissors?');
    }
    if (playerInput === null) {
        alert('You\'ve quit the game.');
        return playerChoice = '';
    } else {
        playerChoice = playerInput.toLowerCase();
        if (!(playerChoice === 'rock' || playerChoice === 'paper' ||
                playerChoice === 'scissors')) {
            prompt("Rock, Paper, or Scissors?");
        }
    }
    return playerChoice;
}

//play round
let computerScore = 0;
let playerScore = 0;
function playRound(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        alert('It\'s a tie.');
    } else if (computerSelection === 'rock') {
        if (playerSelection === 'paper') {
            playerScore += 1;
            alert('You win this round! =D');
        } else if (playerSelection === 'scissors') {
            computerScore += 1;
            alert('Computer wins this round. =(');
        }
    } else if (computerSelection === 'paper') {
        if (playerSelection === 'rock') {
            computerScore += 1;
            alert('Computer wins this round. =(');
        } else if (playerSelection === 'scissors') {
            playerScore += 1;
            alert('You win this round!');
        }
    } else if (computerSelection === 'scissors') {
        if (playerSelection === 'rock') {
            playerScore += 1;
            alert('You win this round!');
        } else if (playerSelection === 'paper') {
            computerScore += 1;
            alert('Computer wins this round. =(');
        }
    }
    return computerScore, playerScore;
}

//play game
function playGame() {
    let round;
    for (round = 0; round < 5; round++) {
        console.log(round)
        getComputerChoice();
        getPlayerChoice();
        if (playerChoice === '') {
            break;
        }
        playRound(computerChoice, playerChoice);
    }
    console.log(round)
    if (round === 5) {
        if (computerScore === playerScore) {
            alert('The game is a tie.');
        } else if (computerScore > playerScore) {
            alert('You lose the game. =(');
        } else if (computerScore < playerScore) {
            alert('You win the game! =D');
        }
    }
}


//main script
let game = playGame();
