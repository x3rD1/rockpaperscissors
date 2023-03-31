// Create a variable for player's choice which will be prompted soon
/* let playerChoice; */

//Create a score board
let playerScore = 0;
let computerScore = 0;

//Create a function for computer's choice
function getComputerChoice(){
    let choices = ['rock','paper','scissors'];
    let compChoice = Math.floor(Math.random() * choices.length);
    
    if (compChoice === 0){
        return choices[0];
    }
    else if (compChoice === 1){
        return choices[1];
    }
    else if (compChoice === 2){
        return choices[2];
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
    return;
}

//Create a function called game
function game(){

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



//add an event listeners to the buttons

const buttonOne = document.querySelector('.buttonOne');
const buttonTwo = document.querySelector('.buttonTwo');
const buttonThree = document.querySelector('.buttonThree');

buttonOne.addEventListener('click', () => {
    console.log(compareChoices('rock', getComputerChoice()))
    console.log(playerScore)
    console.log(computerScore)
});
buttonTwo.addEventListener('click', () => {
    console.log(compareChoices('paper', getComputerChoice()))
    console.log(playerScore)
    console.log(computerScore)
});
buttonThree.addEventListener('click', () => {
    console.log(compareChoices('scissors', getComputerChoice()))
    console.log(playerScore)
    console.log(computerScore)
});

