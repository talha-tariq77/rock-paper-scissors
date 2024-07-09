pcScore = 0;
humanScore = 0;


function getComputerChoice() {
    choiceNum = Math.random();

    if (choiceNum <= 1/3) {
        return "rock";
    }
    else if (choiceNum <= 2/3) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getPlayerChoice() {
    playerChoice = prompt("rock-paper-scissors choice").toLowerCase();

    // while (!(playerChoice in ["rock", "paper", "scissors"])) {
    //     console.log("invalid input!");
    //     playerChoice = prompt("rock-paper-scissors choice");
    // }
    return playerChoice;
}

function playRound(playerChoice, pcChoice) {
    if (playerChoice == pcChoice) {
        console.log("Draw!");
    }

    else if ((playerChoice == "rock"
        && pcChoice == "scissors")
        || (playerChoice == "paper"
        && pcChoice == "rock")
        || (playerChoice == "scissors"
        && pcChoice == "paper")
    ) {
        console.log(`You win!\n${playerChoice} beats ${pcChoice}!`);
        humanScore += 1;
        console.log(`SCORE:\nHuman: ${humanScore}\nComputer: ${pcScore}`);
    }

    else {
        console.log(`You lose!\n${pcChoice} beats ${playerChoice}!`);
        pcScore += 1;
        console.log(`SCORE:\nHuman: ${humanScore}\nComputer: ${pcScore}`);
    }
    
}

function playGame() {
    playerChoice = getPlayerChoice();

    while (playerChoice != null) {
        pcChoice = getComputerChoice();
        playRound(playerChoice, pcChoice);
        playerChoice = getPlayerChoice();
    }
}


playGame();
