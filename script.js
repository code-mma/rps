function computerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    randomNum = Math.floor(Math.random() * choices.length); //Generate a random number
    return choices[randomNum];
}        

var announce;

function playRound(playerSelection, computerSelection) { //Check to see which player is the winner, return the result message
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        announce = 'win';
        return "You lose! Paper beats rock!";
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        announce = 'win';
        return "You win! Rock beats scissors!";
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        announce = 'win';
        return "You win! Paper beats rock!";
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        announce = 'lose';
        return "You lose! Scissors beats paper!";
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        announce = 'lose';
        return "You lose! Rock beats scissors!";
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        announce = 'win';
        return "You win! Scissors beats paper!";
    }
    else if (playerSelection == computerSelection) {
        announce = 'void';
        return "Same weapon was chosen. Try again!"; //Show when the player and computer's selections are the same
    }
}      

var myScore = 0;
var computerScore = 0;
var round = 0;

function roundCheck() {
    if (announce == 'win') {
        myScore = myScore + 1;
    }
    else if (announce == 'lose') {
        computerScore = computerScore + 1;
    }

    
    round = round + 1;
  
    console.log('My Score: ' + myScore);
    console.log('Computer Score: ' + computerScore);
    console.log('Round: ' + round);
    
}

function displayScore() {
    const createPara = document.createElement('p');
    createPara.textContent = 'Your score is ' + myScore + ', we are in round ' + round;
    createPara.classList.add('scorePara');
    $(createPara).show('fade',5000);
    resultsPanel.appendChild(createPara);
}

const startButton = document.querySelector('#start-button');
var choicesPanel = document.querySelector('#choices-panel');
var resultsPanel = document.querySelector('#results-panel');

startButton.addEventListener('click', () => {
    choosePlay();
});

function choosePlay() {
    const startPanel = document.getElementById('start-panel');
    const choicesArray = ['Rock', 'Paper', 'Scissors'];
    $(startPanel).hide('fade',300);;

    const createPara = document.createElement('p');
    createPara.setAttribute('id','instruction');
    createPara.textContent = "Select your weapon of choice below.";
    $(createPara).show('fade',3000);
    choicesPanel.appendChild(createPara);

    for (const choice of choicesArray) {
        const createButtons = document.createElement('button');
        createButtons.textContent = choice;
        createButtons.classList.add('choiceButtons');
        createButtons.setAttribute('id',choice.toLowerCase());
        $(createButtons).show('fade',3000);
        choicesPanel.appendChild(createButtons);
    }

    const choiceButtons = document.querySelectorAll('.choiceButtons');
    choiceButtons.forEach((button) => {
        button.addEventListener('click', () => {
            showResults(playRound(button.id, computerChoice()));
            $(choicesPanel).hide('fade',300);
            $(resultsPanel).show('fade');
        });
    });  
}



function showResults(result) {
    const createPara = document.createElement('p');
    createPara.textContent = result;
    createPara.classList.add('resultsPara');
    $(createPara).show('fade',3000);
    resultsPanel.appendChild(createPara);
    roundCheck();
    displayScore();
    if (round == 5){
        const createPara = document.createElement('p');

        if (myScore > computerScore) {
            createPara.textContent = 'You win the game! Thank you for playing!';
        }
        else {
            createPara.textContent = 'You lose the game! Thank you for playing!';

        }
        
        resultsPanel.appendChild(createPara);
    }
    else {
        const createButton = document.createElement('button');
        createButton.textContent = 'Next Round'
        createButton.setAttribute('id','next-round');
        $(createButton).show('fade',2000);
        resultsPanel.appendChild(createButton);

        createButton.addEventListener('click', () => {
            $(resultsPanel).hide('fade');
            $(choicesPanel).show('fade');
            while (resultsPanel.lastElementChild) {
                resultsPanel.removeChild(resultsPanel.lastElementChild);
            }
        });
    }
    
}


  