function getRandomInt() {
    return Math.floor(Math.random() * (3))
}

function getComputerChoice() {
    let myDictionary = {
        0: "rock",
        1: "paper",
        2: "scissors",
    }
    return myDictionary[getRandomInt()]
}

function getPlayerSelection() {
    let userChoice = prompt ("Please enter your choice of Rock, Paper, or Scissors")
    
    if (userChoice !== null) {
        userChoice = userChoice.toLowerCase();
        return userChoice;
    }   else {
        return "You clicked cancel";
    }
}

function playRound(playerSelection, computerSelection) {
    let convert = {
        "rock": 0,
        "paper": 1,
        "scissors": 2,
    }
    
    let player = convert[playerSelection];
    let computer = convert[computerSelection];

    if (player === computer) {
        return "It's a draw";
    } else if ((player + 1) % 3 === computer) {
        return "You lose";
    } else {
        return "You win";
    }    
}

function game() {
    const rockButton = document.querySelector("#rock");
    const paperButton = document.querySelector("#paper");
    const scissorsButton = document.querySelector("#scissors");
    const resultsElement = document.getElementById("results");
    const scoreElement = document.getElementById("score");
    const gameElement = document.getElementById("game");

    rockButton.addEventListener("click", function(){
        resultsElement.textContent = playRound("rock", getComputerChoice());
        scoreElement.textContent = updateScores(resultsElement.textContent);
        checkWinCondition();
    });
    paperButton.addEventListener("click", function(){
        resultsElement.textContent = playRound("paper", getComputerChoice());
        scoreElement.textContent = updateScores(resultsElement.textContent);
        checkWinCondition();
    });
    scissorsButton.addEventListener("click", function(){
        resultsElement.textContent = playRound("scissors", getComputerChoice());
        scoreElement.textContent = updateScores(resultsElement.textContent);
        checkWinCondition();
    });

    }

    
function updateScores(result) {

    if (result === "It's a draw") {
        console.log("It's a draw");
    }   else if (result === "You lose") {
            computer_score++;
            console.log("You lose");
    }   else {
            player_score++;
            console.log("You win");
    }
    return `Player score: ${player_score}, Computer Score: ${computer_score}`
}

function checkWinCondition() {
    const gameElement = document.getElementById("game");
    
    if (player_score === 5) {
        gameElement.textContent = "You won the game";
    }   else if (computer_score === 5) {
        gameElement.textContent = "You lose the game";
    }
    
}

let player_score = 0;
let computer_score = 0;
game()


