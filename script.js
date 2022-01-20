function game() {
    let x = 0;
    while (x <= 4) {
        const playerSelection =  prompt("What's your choice?").toLowerCase(); //Receive insensitive character input from player
        const computerSelection = computerPlay(); //Call random computer choices

        function computerPlay() {
            const choices = ['rock', 'paper', 'scissors']; //Array of choices
            randomNum = Math.floor(Math.random() * choices.length); //Generate a random number
            return choices[randomNum]; //Select a random item from the array
        }

        function playRound(playerSelection, computerSelection) { //Check to see if which player is the winner, return the result message
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
        x += 1;
        console.log("Round " + x + " Result: " + playRound(playerSelection, computerSelection)); //Print the result in the console each round
    }
    console.log("Thank you for playing!"); //Post message to the player
}