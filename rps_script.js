//rock == 0
//paper == 1
//scissors == 2


//computer choice -- WORKING
function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
    return choice;
}
let computerChoice = computerPlay();

//player selection -- WORKING
let playerInput = prompt("Rock, Paper, or Scissors?");
if (playerInput === null) {
    alert('You\'ve quit the game.');
} else {
    let playerInput_lc = playerInput.toLowerCase();
    switch (playerInput_lc) {
        case 'rock':
            playerChoice = 0;
            break;
        case 'paper':
            playerChoice = 1;
            break;
        case 'scissors':
            playerChoice = 2;
    }
}

//play round
function playRound(computerSelection, playerSelection) {
    //compare computer/player choices
    //decide who wins the round
    //declare winner
}