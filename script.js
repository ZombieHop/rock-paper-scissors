

function getComputerChoice(choice) {
    let number = (Math.floor(Math.random() * choice));
    if (number === 0) {
        computerChoice = "rock";
    } else if (number === 1) {
        computerChoice = "paper";
    } else if (number === 2) {
        computerChoice = "scissors";
    }
    return computerChoice;
}
 


function getHumanChoice() {
    let input = prompt("Rock, paper, scissors!");
    if (input.toLowerCase() === "rock") {
        humanChoice = "rock";
    } else if (input.toLowerCase() === "paper") {
        humanChoice = "paper";
    } else if (input.toLowerCase() === "scissors") {
        humanChoice = "scissors";
    }
    return humanChoice;
}



function playGame() {

    let humanScore = 0;
    let computerScore = 0;


    function playRound(humanChoice, computerChoice) {

    
   if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            console.log("It's a tie!");
        } else if (computerChoice === "paper") {
            console.log("You lose! Paper beats rock.");
            computerScore = computerScore+1;
        } else if (computerChoice === "scissors") {
            console.log("You win! Rock beats scissors.");
            humanScore = humanScore+1;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper beats rock.");
            humanScore = humanScore+1;
        } else if (computerChoice === "paper") {
            console.log("It's a tie!");
        } else if (computerChoice === "scissors") {
            console.log("You lose! Scissors beat paper.");
            computerScore = computerScore+1;
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("You lose! Rock beats scissors.");
            computerScore = computerScore +1;
        } else if (computerChoice === "paper") {
            console.log("You win! Scissors beat paper.");
            humanScore = humanScore+1;
        } else if (computerChoice === "scissors") {
            console.log("It's a tie!");
        }

    }
}

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice(3);

    playRound(humanSelection, computerSelection);

    console.log(humanScore);

    (getComputerChoice(3));
    (getHumanChoice);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice(3);

    playRound(humanSelection, computerSelection);

    console.log(humanScore);

      (getComputerChoice(3));
    (getHumanChoice);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice(3);

    playRound(humanSelection, computerSelection);

    console.log(humanScore);

      (getComputerChoice(3));
    (getHumanChoice);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice(3);

    playRound(humanSelection, computerSelection);

    console.log(humanScore);

      (getComputerChoice(3));
    (getHumanChoice);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice(3);

    playRound(humanSelection, computerSelection);

    console.log(humanScore);

    if (humanScore > computerScore) {
        console.log("Congrats! You win!");
    } else if (computerScore > humanScore) {
        console.log("Womp womp! You lose.");
    } else if (humanScore === computerScore) {
        console.log("It's a tie!");
    }
    

}
playGame();