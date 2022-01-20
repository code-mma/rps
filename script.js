function game() {
    let x = 0;
    while (x <= 4) {
        const playerSelection =  prompt("What's your choice?").toLowerCase(); //Receive input from player among Rock, Paper or Scissors choices
        const computerSelection = computerPlay(); //Call random computer choices

        function computerPlay() {
            const choices = ['rock', 'paper', 'scissors']; //List choices to be randomized
            randomNum = Math.floor(Math.random() * choices.length);
            return choices[randomNum];
        }

        function playRound(playerSelection, computerSelection) {
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
                return "Same weapon was chosen. Try again!";
            }
            else {
                return "Please check if your input is correct.";
            }
        }
        x += 1;
        console.log("Round " + x + " Result: " + playRound(playerSelection, computerSelection));
    }
    console.log("Thank you for playing!");
}