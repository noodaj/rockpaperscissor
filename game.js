let playerScore = 0;
let compScore = 0;
let winner = "";

function computerPlay() {
    let choice = ""
    let rand = Math.floor(Math.random() * 3)
    switch (rand) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "scissor";
            break;
        case 2:
            choice = "paper";
            break;
    }
    console.log("Generated " + choice);
    return choice;
}

function playRound(playerChoice, computerChoice) {
    let winner = "";
    if (playerChoice == computerChoice) {
        console.log("Tie");
    }
    if ((playerChoice == "rock" && computerChoice == "scissor")
        || (playerChoice == "paper" && computerChoice == "rock")
        || (playerChoice == "scissor" && computerChoice == "paper")) {
        winner = "Player";
        playerScore++;
        console.log("Player wins with score of " + playerScore);
    }
    else if ((computerChoice == "rock" && playerChoice == "scissor")
        || (computerChoice == "paper" && playerChoice == "rock")
        || (computerChoice == "scissor" && playerChoice == "paper")) {
        winner = "Computer";
        compScore++;
        console.log("Computer wins with score of " + compScore);
    }

    return winner;
}

function game() {
    for (i = 0; i < 5; i++) {
        let input = prompt("What is your selection?");
        playRound(input, computerPlay());
    }

    if (playerScore > compScore) {
        console.log("You won!");
    }
    else if(compScore > playerScore){
        console.log("Computer won!");
    }
    else{
        console.log("Tie!");
    }
}
