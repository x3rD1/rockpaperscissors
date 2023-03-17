
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 10);

    if (randomNumber < 4) {
        console.log('Rock!');
    }
    else if (randomNumber > 3 && randomNumber < 7){
        console.log('Paper!');
    }
    else {
        console.log('Scissors!');
    }

}