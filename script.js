/* 
create a function to generate a choice for computer
returns rock, paper or scissors
*/

function getComputerChoice(choice,computerChoice) {
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
 console.log(getComputerChoice(3))

/*
create a function that prompts user to input a choice
return choice
*/

function getHumanChoice() {
    
}
console.log(getHumanChoice)

/*
write variables to keep track of player score
*/