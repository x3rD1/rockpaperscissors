// Create a variable for player's choice which will be prompted soon
let playerChoice;

//Create a score board
let playerScore = 0;
let computerScore = 0;

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
        computerScore++
        return 'You lose!'
    }
    else if (playerChoice === 'rock' && computerChoice === 'scissors'){
        playerScore++
        return 'You win!'
    }
    else if (playerChoice === 'paper' && computerChoice === 'rock'){
        playerScore++
        return 'You win!'
    }
    else if (playerChoice === 'paper' && computerChoice === 'scissors'){
        computerScore++
        return 'You lose!'
    }
    else if (playerChoice === 'scissors' && computerChoice === 'rock'){
        computerScore++
        return 'You lose!'
    }
    else if (playerChoice === 'scissors' && computerChoice === 'paper'){
        playerScore++
        return 'You win!'
    }
}

//Create a function called game
function game(){
    for (let i = 0; i < 5; i++){
        //This allows the user to be prompted 5 times
        playerChoice = prompt('Rock Paper or Scissors?');
        //This tells you if you win or lose the round
        console.log(compareChoices(playerChoice,getComputerChoice()));
    }

    if (playerScore > computerScore){
        console.log('You win the game!');
    }
    else if (playerScore < computerScore){
        console.log('You lose the game!');
    }
    else{
        console.log('Draw!');
    }
}

game();