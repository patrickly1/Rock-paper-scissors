console.log("Hello World")

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
    let player_score = 0;
    let computer_score = 0;

    while (player_score < 5 && computer_score < 5) {
        let player = getPlayerSelection();
        let computer = getComputerChoice();
        let result = playRound(player, computer);

        if (result === "It's a draw") {
            console.log("It's a draw");
        }   else if (result === "You lose") {
                computer_score++;
                console.log("You lose");
        }   else {
                player_score++;
                console.log("You win");
        }

        console.log(`Player score: ${player_score}, Computer Score: ${computer_score}`);
    }
    if (player_score === 5) {
        console.log("You won the game");
    }   else {
        console.log("You lose the game");
    }
}

game()