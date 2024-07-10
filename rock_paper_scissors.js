
let rockButton = document.querySelector('#rock-button');
let paperButton = document.querySelector('#paper-button');
let scissorsButton = document.querySelector('#scissors-button');

let pcScore = document.querySelector('#pcScore').childNodes.item(3);

let humanScore = document.querySelector('#humanScore').childNodes.item(3);

let resultsHeader = document.querySelector('#result h1');


rockButton.addEventListener('click', playRound);
paperButton.addEventListener('click', playRound);
scissorsButton.addEventListener('click', playRound);


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

function playRound(e) {
    playerChoice = e.target.title.toLowerCase();
    pcChoice = getComputerChoice();

    if (playerChoice == pcChoice) {
        resultsHeader.textContent = 'Draw!';
    }

    else if ((playerChoice == "rock"
        && pcChoice == "scissors")
        || (playerChoice == "paper"
        && pcChoice == "rock")
        || (playerChoice == "scissors"
        && pcChoice == "paper")
    ) {
        resultsHeader.textContent = `You win!\n${playerChoice} beats ${pcChoice}!`;
        humanScore.textContent = Number(humanScore.textContent) + 1;
    }

    else {
        resultsHeader.textContent = `You lose!\n${pcChoice} beats ${playerChoice}!`;
        pcScore.textContent = Number(pcScore.textContent) + 1;
    }

    if (pcScore.textContent >= 5 || humanScore.textContent >= 5) {
        finalResultHeader = document.createElement('h1');
        finalResultHeader.textContent = humanScore.textContent >= 5 ? 'Player has Won!': 'Computer has Won!';
        document.querySelector('#result').appendChild(finalResultHeader);
        
        pcScore.textContent = 0;
        humanScore.textContent = 0;
    }
    else {
        let finalResult = document.querySelector('#result');
        if (finalResult.childNodes.length > 2) {
            finalResult.removeChild(finalResult.lastChild);
        }
    }
}

