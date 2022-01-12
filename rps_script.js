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
function playRound(computerSelection, playerSelection) {
    //compare computer/player choices
    //decide who wins the round
    //declare winner
}