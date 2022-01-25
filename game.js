// ----------- //
// GAME SCRIPT //
// ----------- //

const divWinner = document.createElement('div');
divWinner.classList.add('winner');
//... check scores
function checkScores(computerScore, playerScore) {
    if (computerScore === playerScore) {
        divWinner.textContent = 'You tied with the computer.';
    } else if (computerScore > playerScore) {
        divWinner.textContent = 'You lost the game. =(';
    } else if (computerScore < playerScore) {
        divWinner.textContent = 'You won the game! =D';
    };
    divMain.appendChild(divWinner);
}

const divMain = document.querySelector('div.main');
//... reset board ...
function resetBoard() {
    //remove computer & player images
    const imgs = document.querySelectorAll('img');
    for (let i = 0; i < 5; i++) {
        computerMain.removeChild(imgs[i]);
    }
    for (let i = 5; i < 10; i++) {
        playerMain.removeChild(imgs[i]);
    }

    //reset scores ...
    playerScore -= playerScore;
    computerScore -= computerScore;
    displayScores(computerScore, playerScore);

    //reset round
    round = 0;

    //remove winner ...
    divMain.removeChild(divWinner);
}

const computerTitle = document.querySelector('h2.computer-title');
const playerTitle = document.querySelector('h2.player-title');
function displayScores(computerScore, playerScore) {
    computerTitle.textContent = `computer : ${computerScore}`;
    playerTitle.textContent = `player : ${playerScore}`;
}

let computerScore = 0;
let playerScore = 0;
//... compare choices
function compareChoices(computerSelection, playerSelection) {
    if (computerSelection === 'rock') {
        if (playerSelection === 'paper') {
            playerScore += 1;
            playerTitle.textContent = `player : ${playerScore}`;
        } else if (playerSelection === 'scissors') {
            computerScore += 1;
            computerTitle.textContent = `computer : ${computerScore}`;
        };
    } else if (computerSelection === 'paper') {
        if (playerSelection === 'rock') {
            computerScore += 1;
            computerTitle.textContent = `computer : ${computerScore}`;
        } else if (playerSelection === 'scissors') {
            playerScore += 1;
            playerTitle.textContent = `player : ${playerScore}`;
        };
    } else if (computerSelection === 'scissors') {
        if (playerSelection === 'rock') {
            playerScore += 1;
            playerTitle.textContent = `player : ${playerScore}`;
        } else if (playerSelection === 'paper') {
            computerScore += 1;
            computerTitle.textContent = `computer : ${computerScore}`;
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

let round = 0;
//... play round
function playRound(computerSelection, playerSelection) {
    
    //display choices...
    displayChoices(computerSelection, playerSelection);

    //compare choices ...
    compareChoices(computerChoice, playerChoice);

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

let playerChoice;
//... get player choice
function getPlayerChoice(button) {
    let btnID = button.id;
    playerChoice = btnID;
    return playerChoice;
}

const btnInput = document.querySelectorAll('button.player-choice');
//play game ...
function playGame() {
    //display scores ...
    displayScores(computerScore, playerScore);

    btnInput.forEach(button => button.addEventListener('click', () => {
        //reset board ...
        if (round === 5) {
            resetBoard();
        }

        //get player choice ...
        playerChoice = getPlayerChoice(button);

        //get computer choice ...
        computerChoice = getComputerChoice();

        //play round...
        playRound(computerChoice, playerChoice);

        //check scores ...
        if (round === 5) {
            checkScores(computerScore, playerScore);
        }
    }));
}

// ---------------- //
// BUTTON ANIMATION //
// ---------------- //

const btnAnimate = document.querySelectorAll('button');
//on hover effect
btnAnimate.forEach(button => button.addEventListener('mouseover', () => {
    button.classList.add('add-hover');
}));
//off hover effect
btnAnimate.forEach(button => button.addEventListener('mouseleave', () => {
    button.classList.remove('add-hover');
}));
//on click effect
btnAnimate.forEach(button => button.addEventListener('click', () => {
    button.classList.remove('add-hover');
    button.classList.add('add-click');
    button.addEventListener('transitionend', () => {
        button.classList.remove('add-click');
    });
}));

// ------------------- //
// THANK YOU ANIMATION //
// ------------------- //

function showSrcList(e) {
    tyContainer.classList.toggle('hide');
}

const tyButton = document.querySelector('p.ty-button');
const tyContainer = document.querySelector('div.ty-container');
tyButton.addEventListener('click', showSrcList);

// --------- //
// PLAY GAME //
// --------- //

playGame = playGame();
