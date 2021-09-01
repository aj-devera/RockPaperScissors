//Randomizing the computer's pick
function computerPlay() {
    let x
    x = Math.floor(Math.random() * 3) + 1;   
    switch(x) {
        case 1:
            return "rock"; //Rock
        case 2:
            return "paper"; //Paper   
        case 3:
            return "scissors"; //Scissors
        default:
            console.log("Error");           
    }
}

// Converting the player's/computer's selection to 1,2, or 3 corresponding to rock,paper, or scissors
function convertSelection(x) {
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
    //Setting the variables for player and computer
    player = convertSelection(playerSelection);
    computer = convertSelection(computerSelection);   

    //Using Switch statement to determine the result of the round
    switch(player * computer) {
        case 2: //Rock and Paper
            if(player == 1) {
                return "You Lose! Paper beats Rock";
            } else {
                return "You Won! Paper beats Rock";
            }
        case 3: //player: Rock    computer: Scissors
            if(player == 1) {
                return "You Won! Rock beats Scissors";
            } else {
                return "You Lose! Rock beats Scissors";
            }
        case 6: //player: Paper   computer: Scissors
            if(player == 2){
                return "You Lose! Scissors beats Paper";
            } else {
                return "You Won! Scissors beats Paper";
            }
        default:
            return "DRAW!";
    }
}

//Prompting the player to choose between rock, paper, or scissors then converting to lower case to make it case-insensitive
//Making it loop 5 times for 5 rounds
for (let i=1; i<=5; i++) {
    let playerSelection = prompt("Rock, Paper or Scissors?");
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection != "rock" || playerSelection != "paper" || playerSelection != "scissors") {
        console.log("Error input")
        break;
    }
    let computerSelection = computerPlay();
    console.log("ROUND " + i);
    console.log("Player chooses " + playerSelection);
    console.log("Computer chooses " + computerSelection);
    console.log(playRound(playerSelection, computerSelection));
}