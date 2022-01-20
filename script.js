const playerSelection =  playerPlay()
const computerSelection = computerPlay(); //Call random computer choices

function playerPlay() {
    prompt("What's your choice?").toLowerCase(); //Receive input from player among Rock, Paper or Scissors choices
}

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors']; //List choices to be randomized
    randomNum = Math.floor(Math.random() * choices.length);
    return choices[randomNum];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'paper') {
	    return console.log("You lose! Paper beats rock!");
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
	    return console.log("You win! Rock beats scissors!");
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
	    return console.log("You win! Paper beats rock!");
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
	    return console.log("You lose! Scissors beats paper!");
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
	    return console.log("You lose! Rock beats scissors!");
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
	    return console.log("You win! Scissors beats paper!");
    }
    else if (playerSelection == computerSelection) {
        return "Same weapon was chosen. Try again!";
    }
    else {
        return "Please check if your input is correct.";
    }
}

function game() {
    let x = 1;

    if (x <= 5) {
        return playerPlay() && computerPlay() && console.log(playRound(playerSelection, computerSelection));
    }

    x += 1;
}