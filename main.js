
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 10);
    console.log(randomNumber);
    let computerChoice = '';

    if (randomNumber < 4) {
        computerChoice = 'rock'
    }
    else if (randomNumber > 3 && randomNumber < 7){
        computerChoice = 'paper'
    }
    else if (randomNumber > 6 && randomNumber < 10){
        computerChoice = 'scissors'
    }   
    return computerChoice;
}

    let playerScore = 0;
    let computerScore = 0;
    
function playRound(playerSelection, computerSelection){
    // make a comparison between rock paper and scissors
    let status;
    
    if (playerSelection === 'rock' && computerSelection === 'scissors'){
        status = 'You win! Rock beats Scissors';
        playerScore++;
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper'){
        status = 'You lose! Paper beats Rock';
        computerScore++
    }
    else if (playerSelection === 'rock' && computerSelection === 'rock'){
        status = 'Draw!';
    }
    if (playerSelection === 'paper' && computerSelection === 'scissors'){
        status = 'You lose! Scissors beats Paper';
        computerScore++
    }
    else if (playerSelection === 'paper' && computerSelection === 'paper'){
        status = 'Draw!';
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock'){
        status = 'You win! Paper beats Rock';
        playerScore++;
    }
    if (playerSelection === 'scissors' && computerSelection === 'scissors'){
        status = 'Draw!';
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        status = 'You win! scissors beats paper';
        playerScore++;
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        status = 'You lose! Rock beats scissors';
        computerScore++
    }
    return status;
}

const playerSelection = prompt('Rock Paper or Scissors?').toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function game(){
    for (let i = 0; i < 5; i++){
        playRound(playerSelection, computerSelection);
    }
    //put here who is the winner.
    if (playerScore > computerScore){
        console.log('YOU WIN!');
    }
}