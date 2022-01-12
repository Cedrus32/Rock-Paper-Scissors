//rock == 0
//paper == 1
//scissors == 2


//computer choice -- WORKING
function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
    // console.log(choice)
    return choice;
}
let computerInput = computerPlay();
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
// console.log(computerChoice)

//player selection -- WORKING
let playerChoice;
let playerInput = prompt("Rock, Paper, or Scissors?");
// console.log(playerInput)
if (playerInput === null) {
    alert('You\'ve quit the game.');
} else {
    playerChoice = playerInput.toLowerCase();
}
// console.log(playerChoice)

//play round
let computerScore = 0;
let playerScore = 0;
function playRound(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        alert('It\'s a tie!');
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
    // console.log(computerScore)
    // console.log(playerScore)
}

//main script
let round = playRound(computerChoice, playerChoice);