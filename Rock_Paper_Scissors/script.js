
function computerPlay() {
    let roll = Math.floor(Math.random() * 3);

    if (roll == 0) {
        return "ROCK"
    } else if (roll == 1) {
            return "PAPER"
    } else if (roll == 2) {
        return "SCISSORS"
    }
}

function playRound(playerSelection, computerPlay) {

    playerSelection = playerSelection.toUpperCase();

    if (playerSelection == "ROCK" && computerPlay == "PAPER") {
        computerScore++;
        return "PAPER beats ROCK, you lose!"
    } else if(playerSelection == "PAPER" && computerPlay =="ROCK"){
        playerScore++;
        return "PAPER beats ROCK, you win"
    }

    if (playerSelection == "PAPER" && computerPlay == "SCISSORS") {
        computerScore++;
        return "SCISSORS beats PAPER, you lose!"
    } else if (playerSelection == "SCISSORS" && computerPlay == "PAPER") {
        playerScore++;
        return "SCISSORS beats PAPER, you win!"
    }

    if (playerSelection == "ROCK" && computerPlay == "SCISSORS"){
        playerScore++;
        return "ROCK beats SCISSORS, you win!"
    } else if (playerSelection == "SCISSORS" && computerPlay == "ROCK") {
        computerScore++;
        return "ROCK beats SCISSORS, you lose!"
    }

    if (playerSelection == "ROCK" && computerPlay == "ROCK") {
        return "Both players selected ROCK, tie!"
    } else if (playerSelection == "PAPER" && computerPlay == "PAPER") {
        return "Both players selected PAPER, tie!"
    } else if (playerSelection == "SCISSORS" && computerPlay == "SCISSORS") {
        return "Both players selected SCISSORS, tie!"
    }
}

function game(playerSelection) {

    computerSelection = computerPlay();
    computerSelect.textContent = computerSelection;
    playerSelect.textContent = playerSelection;

    results.textContent = playRound(playerSelection, computerSelection);

    playScore.textContent = playerScore;
    compScore.textContent = computerScore;

    if (playerScore == 5) {
        return "You have 5 points, computer has " + computerScore + ", you win!"
    } else if(computerScore == 5) {
        return "Computer has 5 points, you have " + playerScore + ", you lose!"
    }
}


const buttons = document.querySelectorAll('button');
const computerSelect = document.getElementById("computerSelection");
const playerSelect = document.getElementById("playerSelection");
const results = document.getElementById("resultsDisplay")
const playScore = document.getElementById("playerScore");
const compScore = document.getElementById("computerScore");


buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playerSelection = button.id;
        console.log(game(playerSelection));
    });
});

let playerSelection;
let playerScore = 0;
let computerScore = 0;
let computerSelection;


            