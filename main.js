// prompt a user whether rock paper or scissors
let playerChoice = prompt('Rock Paper or Scissors?');

// Create a variable for computer's choice
let computerChoice = getComputerChoice();

//Create a function for computer's choice
function getComputerChoice(){
    let choices = ['rock','paper','scissors'];
    let compChoice = Math.floor(Math.random() * choices.length);
    
    if (compChoice === 0){
        return 'rock';
    }
    else if (compChoice === 1){
        return 'paper';
    }
    else if (compChoice === 2){
        return 'scissors';
    }
    return;
}

// Create a function that compares player's choice and computer's choice
function compareChoices(playerChoice,computerChoice){
    if (playerChoice === computerChoice){
        return 'Draw';
    }
    else if (playerChoice === 'rock' && computerChoice === 'paper'){
        return 'You lose!'
    }
    else if (playerChoice === 'rock' && computerChoice === 'scissors'){
        return 'You win!'
    }
    else if (playerChoice === 'paper' && computerChoice === 'rock'){
        return 'You win!'
    }
    else if (playerChoice === 'paper' && computerChoice === 'scissors'){
        return 'You lose!'
    }
    else if (playerChoice === 'scissors' && computerChoice === 'rock'){
        return 'You lose!'
    }
    else if (playerChoice === 'scissors' && computerChoice === 'paper'){
        return 'You win!'
    }
}
//This tells you if you win or lose
console.log(compareChoices(playerChoice,computerChoice));