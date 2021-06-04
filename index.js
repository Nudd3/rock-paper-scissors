if (typeof window.ethereum.autoRefreshOnNetworkChange !== "undefined") {
    window.ethereum.autoRefreshOnNetworkChange = false;
}

function computerPlay() {

    
    let choice = Math.random();

    if (choice < 1 / 3)
        return "rock";
    else if (choice < 2 / 3)
        return "paper";
    else
        return "scissors";

}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection === computerSelection){
        return "It's a Draw!"
    }
    
    if(playerSelection === "rock"){

        if(computerSelection === "scissors"){
            playerScore++;
            return "You win! " + playerSelection + " beats " + computerSelection;
        } else if(computerSelection === "paper"){
            computerScore++;
            return "You Lose! " + computerSelection + " beats " + playerSelection;
        }

    } else if(playerSelection === "scissors"){

        if(computerSelection === "paper"){
            playerScore++;
            return "You win! " + playerSelection + " beats " + computerSelection;
        } else if(computerSelection === "rock"){
            computerScore++;
            return "You Lose! " + computerSelection + " beats " + playerSelection;
        }

    } else if(playerSelection === "paper"){

        if(computerSelection === "rock"){
            playerScore++;
            return "You win! " + playerSelection + " beats " + computerSelection;
        } else if(computerSelection === "scissors"){
            computerScore++;
            return "You Lose! " + computerSelection + " beats " + playerSelection;
        }
    }
}

function game(){

    

    for(let i = 0; i < 5; i++){

        //let playerScore = prompt("Your choice: ");
        console.log(playRound(prompt("Your choice: "), computerPlay()));
        
    }
    console.log("Final Score: \nPlayer: " + playerScore + ", Computer: " + computerScore);
}
let playerScore = 0;
let computerScore = 0;

game();