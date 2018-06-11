var Rochambeau = {

    choices: {
        ROCK: 0,
        PAPER: 1,
        SCISSORS: 2
    },

    score: {
        wins: 0,
        losses: 0,
        ties: 0
    },

    results: {
        WIN: 1,
        TIE: 0,
        LOSS: -1
    },

    player: new Player(),

    computer: new Player()

}

function Player() {
    this.choice = null;
}

// Stores the player's choice, then call's the function for storing the computer's choice
storePlayerChoice: function (choice) {
        this.player.choice = choice;
        console.log("My choice = " + this.player.choice);
        this.storeComputerChoice();
    },

    // Generate the computer's random choice
    storeComputerChoice: function () {
        this.computer.choice = Math.floor(Math.random() * 5);
    }

// This is the function for playing the game
function playGame() {
    // Here is the game ruleset algorithm
    if (player.choice == computer.choice) {
        // We have a tie!
        ++score.ties;
        displayGameResult("tie")
    } else if ((player.choice == choices.ROCK && computer.choice == choices.SCISSORS) || (player.choice == choices.ROCK && computer.choice == choices.SPOCK)) {
        // Rock beats scissors or lizard - a win!
        ++score.wins;
        displayGameResult("win")
    } else if ((player.choice == choices.PAPER && computer.choice == choices.ROCK) || (player.choice == choices.PAPER && computer.choice == choices.SPOCK)) {
        // Paper beats scissors or spock - a win!
        ++score.wins;
        displayGameResult("win")
    } else if ((player.choice == choices.SCISSORS && computer.choice == choices.PAPER) || (player.choice == choices.SCISSORS && computer.choice == choices.LIZARD)) {
        // Scissors beats paper or lizard - a win!
        ++score.wins;
        displayGameResult("win")
    } else if ((player.choice == choices.LIZARD && computer.choice == choices.PAPER) || (player.choice == choices.LIZARD && computer.choice == choices.SPOCK)) {
        // Lizard beats paper or spock - a win!
        ++score.wins;
        displayGameResult("win")
    } else if ((player.choice == choices.SPOCK && computer.choice == choices.ROCK) || (player.choice == choices.SPOCK && computer.choice == choices.SCISSORS)) {
        // Spock beats scissors or rock - a win!
        ++score.wins;
        displayGameResult("win")
    } else if (player.choice == null) {
        //if the player doesn't make a new choice, then nothing happens
    } else {
        // All other combinations are losses
        ++score.losses;
        displayGameResult("lose")
    }
    determineWinner();
    return player.choice = null;
}

//Displays the result of the game
function displayGameResult(result) {
    // Define an array of text labels for the choices 0, 1, 2;
    // Create a message for the player
    var message = "Your choice was " + choices[playerChoice] + " and the computer's choice was " + choices[computerChoice] + ".";
    // Add to the base message if it was a win, loss, or tie
    if (result === "win") {
        // Display that it was a win
        document.getElementById("result").textContent = message + "..by some magical, cosmic coincidence, YOU WIN!";
        document.getElementById("result").className = "alert alert-success";
    } else if (result === "lose") {
        // Display that it was a loss
        document.getElementById("result").textContent = message + " YOU LOSE!";
        document.getElementById("result").className = "alert alert-danger";
    } else {
        // Display that it was a tie
        document.getElementById("result").textContent = message + " A tie.";
        document.getElementById("result").className = "alert alert-info";
    }

    updateScoreBoard();
}


// Function for displaying the score
function displayScoreBoard(winsId, lossesId, tiesId) {
    document.getElementById(winsId).textContent = score.wins;
    document.getElementById(lossesId).textContent = score.losses;
    document.getElementById(tiesId).textContent = score.ties;
}

function updateMatchScore() {
    document.getElementById("playerWin").textContent = results.WIN;
    document.getElementById("computerWin").textContent = results.LOSS;
}

function determineWinner() {
    if (score.wins == 2) {
        document.getElementById("winner").textContent = "PLAYER";
        ++results.WIN;
        return score: {
            wins: 0,
            losses: 0,
            ties: 0
        };
    } else if (score.losses == 2) {
        document.getElementById("winner").textContent = "COMPUTER";
        ++results.LOSS;
        return score: {
            wins: 0,
            losses: 0,
            ties: 0
        };
    }
    updateMatchScore();
}

// The button elements
var rockButton = document.getElementById("rock");
var paperButton = document.getElementById("paper");
var scissorsButton = document.getElementById("scissors");
var lizardButton = document.getElementById("lizard");
var spockButton = document.getElementById("spock");
var playButton = document.getElementById("play");

// Add the event handlers
rockButton.addEventListener('click', () => {
    storePlayerChoice(0)
});
paperButton.addEventListener('click', () => {
    storePlayerChoice(1)
});
scissorsButton.addEventListener('click', () => {
    storePlayerChoice(2)
});
lizardButton.addEventListener('click', () => {
    storePlayerChoice(3)
});
spockButton.addEventListener('click', () => {
    storePlayerChoice(4)
});
playButton.addEventListener('click', () => {
    playGame()
});
