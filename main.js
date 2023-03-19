// prompt a user whether rock paper or scissors
let playerChoice = prompt('Rock Paper or Scissors?');

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



