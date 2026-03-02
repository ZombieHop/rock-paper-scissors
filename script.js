/* 
create a function to generate a choice for computer
returns rock, paper or scissors
*/

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
 

/*
create a function that prompts user to input a choice
return choice
*/

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

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice(3);

    playRound(humanSelection, computerSelection);



}
playGame();