function computerPlay() {
    let x
    x = Math.floor(Math.random() * 3) + 1;   
    switch(x) {
        case 1:
            return 1; //Rock
        case 2:
            return 2; //Paper   
        case 3:
            return 3; //Scissors
        default:
            console.log("Error");           
    }
}

//Prompting the player to choose between rock, paper, or scissors then converting to lower case to make it case-insensitive
let playerSelection = prompt("Rock, Paper or Scissors?");
playerSelection = playerSelection.toLowerCase();
console.log(playerSelection);
let computerSelection = computerPlay();

// Converting the player selection to 1,2, or 3 corresponding to rock,paper, or scissors
function convertPlayerSelection(x) {
    switch(x) {
        case "rock":
            return 1;
        case "paper":
            return 2;
        case "scissors":
            return 3;
    }
}

function playRound(playerSelection, computerSelection) {
    //if (playerSelection == "rock" && computerSelection == "rock") {
    //    return "Draw! Both chose Rock";
    //} else if (playerSelection == "rock" && computerSelection == "paper") {
    //    return "You Lose! Paper beats Rock.";
    //} else if (playerSelection == "rock" && computerSelection == "scissors") {
    //   return "You Won! Rock beats Scissors.";
    //}

    //Setting the variables for player and computer
    player = convertPlayerSelection(playerSelection);
    computer = computerSelection;

    
}
