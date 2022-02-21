function computerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    randomNum = Math.floor(Math.random() * choices.length); //Generate a random number
    return choices[randomNum];
}        

function playRound(playerSelection, computerSelection) { //Check to see which player is the winner, return the result message
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        return "You lose! Paper beats rock!";
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return "You win! Rock beats scissors!";
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return "You win! Paper beats rock!";
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return "You lose! Scissors beats paper!";
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return "You lose! Rock beats scissors!";
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return "You win! Scissors beats paper!";
    }
    else if (playerSelection == computerSelection) {
        return "Same weapon was chosen. Try again!"; //Show when the player and computer's selections are the same
    }
    else {
        return "Please check if your input is correct."; //Show when player input has typographical error or incorrect character
    }
}      

function choosePlay() {
    const choiceButtons = document.querySelectorAll('.choiceButtons');
    choiceButtons.forEach((button) => {
        button.addEventListener('click', () => {
            console.log(playRound(button.id, computerChoice()));
        });
    });  
}

const startButton = document.querySelector('#start-button');

startButton.addEventListener('click', () => {
    const startPanel = document.getElementById('start-panel');
    const choicesArray = ['Rock', 'Paper', 'Scissors'];
    
    for (const choice of choicesArray) {
        const choicesPanel = document.querySelector('#choices-panel');
        const createButtons = document.createElement('button');
        createButtons.textContent = choice;
        createButtons.classList.add('choiceButtons');
        createButtons.setAttribute('id',choice.toLowerCase());
        choicesPanel.appendChild(createButtons);
    }

    startPanel.remove();
    choosePlay();
    
});




  