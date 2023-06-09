// Create a variable for player's choice which will be prompted soon
/* let playerChoice; */

//Create a score board
let playerScore = 0;
let computerScore = 0;

//Create a function for computer's choice
function getComputerChoice(){
    let choices = ['Rock','Paper','Scissors'];
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
        draw.play();
        return `Draw! Both chose ${playerChoice}`;
    }
    else if (playerChoice === 'Rock' && computerChoice === 'Paper'){
        computerScore++
        incorrect.play();
        return 'You lose! Computer chose Paper.'
    }
    else if (playerChoice === 'Rock' && computerChoice === 'Scissors'){
        playerScore++
        correct.play();
        return 'You win! Computer chose Scissors.'
    }
    else if (playerChoice === 'Paper' && computerChoice === 'Rock'){
        playerScore++
        correct.play();
        return 'You win! Computer chose Rock.'
    }
    else if (playerChoice === 'Paper' && computerChoice === 'Scissors'){
        computerScore++
        incorrect.play();
        return 'You lose! Computer chose Scissors.'
    }
    else if (playerChoice === 'Scissors' && computerChoice === 'Rock'){
        computerScore++
        incorrect.play();
        return 'You lose! Computer chose Rock.'
    }
    else if (playerChoice === 'Scissors' && computerChoice === 'Paper'){
        playerScore++
        correct.play();
        return 'You win! Computer chose Paper.'
    }
    return;
}

//audio
const audio = document.querySelector('audio[data-key="omg"]');
const wow = document.querySelector('audio[data-key="wow"]');
const correct = document.querySelector('audio[data-key="correct"]');
const incorrect = document.querySelector('audio[data-key="incorrect"]');
const draw = document.querySelector('audio[data-key="draw"]');

//Create a function called game
function game(){

    //add an event listeners to the buttons
    const buttonOne = document.querySelector('.buttonOne');
    const buttonTwo = document.querySelector('.buttonTwo');
    const buttonThree = document.querySelector('.buttonThree');

    //create a score count for both players
    const container = document.querySelector('body');
    const score1 = document.querySelector('.pscore');
    const score2 = document.querySelector('.Cscore');

    //return the result of the round
    const announce = document.querySelector('.announce');
    const again = document.createElement('p');
    again.textContent = 'Press any buttons to play again.'
    again.setAttribute('style', 'margin-top: -1px;');


    buttonOne.addEventListener('click', () => {
        announce.textContent = compareChoices('Rock', getComputerChoice());
        score1.textContent = 'Player Score: ' + `${playerScore}`;
        score2.textContent = 'Computer Score: ' + `${computerScore}`;
        if (playerScore === 5){
            announce.textContent = 'Congrats You win!';
            announce.appendChild(again);
            playerScore = 0;
            computerScore = 0;
            wow.play();
        }
        else if (computerScore === 5){
            announce.textContent = 'You disgust me!';
            announce.appendChild(again);
            playerScore = 0;
            computerScore = 0;
            audio.play();
        }
    });
    buttonTwo.addEventListener('click', () => {
        announce.textContent = compareChoices('Paper', getComputerChoice());
        score1.textContent = 'Player Score: ' + `${playerScore}`;
        score2.textContent = 'Computer Score: ' + `${computerScore}`;
        if (playerScore === 5){
            announce.textContent = 'Congrats You win!';
            announce.appendChild(again);
            playerScore = 0;
            computerScore = 0;
            wow.play();
        }
        else if (computerScore === 5){
            announce.textContent = 'You disgust me!';
            announce.appendChild(again);
            playerScore = 0;
            computerScore = 0;
            audio.play();
        }
    });
    buttonThree.addEventListener('click', () => {
        announce.textContent = compareChoices('Scissors', getComputerChoice());
        score1.textContent = 'Player Score: ' + `${playerScore}`;
        score2.textContent = 'Computer Score: ' + `${computerScore}`;
        if (playerScore === 5){
            announce.textContent = 'Congrats You win!';
            announce.appendChild(again);
            playerScore = 0;
            computerScore = 0;
            wow.play();
        }
        else if (computerScore === 5){
            announce.textContent = 'You disgust me!';
            announce.appendChild(again);
            playerScore = 0;
            computerScore = 0;
            audio.play();
        }
    });
    
    
    
}
game();