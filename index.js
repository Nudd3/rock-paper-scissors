

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

    if(playerScore === 5 || computerScore === 5)
        return;

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let result = "";
    
    

    if(playerSelection === computerSelection){
        result = "It's a Draw!";
    }
    
    if(playerSelection === "rock"){

        if(computerSelection === "scissors"){
            playerScore++;
            result = "You win! " + playerSelection + " beats " + computerSelection;
        } else if(computerSelection === "paper"){
            computerScore++;
            result = "You Lose! " + computerSelection + " beats " + playerSelection;
        }

    } else if(playerSelection === "scissors"){

        if(computerSelection === "paper"){
            playerScore++;
            result = "You win! " + playerSelection + " beats " + computerSelection;
        } else if(computerSelection === "rock"){
            computerScore++;
            result = "You Lose! " + computerSelection + " beats " + playerSelection;
        }

    } else if(playerSelection === "paper"){

        if(computerSelection === "rock"){
            playerScore++;
            result = "You win! " + playerSelection + " beats " + computerSelection;
        } else if(computerSelection === "scissors"){
            computerScore++;
            result = "You Lose! " + computerSelection + " beats " + playerSelection;
        }
    }

    if(playerScore === 5){
        return "Player wins!";
    }
    else if(computerScore === 5){
        return "Computer Win!";
    }

    return result;
}


let playerScore = 0;
let computerScore = 0;

const container = document.querySelector('#show-results');
const content = document.createElement('h2');
content.classList.add('content');

const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => btn.addEventListener('click', () => {
    let playerSelection = btn.textContent;
    content.textContent = playRound(playerSelection, computerPlay());
    container.appendChild(content);

    const c = document.querySelector('#score');
    c.textContent = playerScore + " : " + computerScore;
}));





