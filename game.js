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

    return choice;
}

function playRound(playerChoice, computerChoice) {
    let winner = "";
    if (playerChoice == computerChoice) {
        winner = "Tie"
    }
    if ((playerChoice == "rock" && computerChoice == "scissor")
        || (playerChoice == "paper" && computerChoice == "rock")
        || (playerChoice == "scissor" && computerChoice == "paper")) {
        winner = "Player";
        playerScore++;
    }
    else if ((computerChoice == "rock" && playerChoice == "scissor")
        || (computerChoice == "paper" && playerChoice == "rock")
        || (computerChoice == "scissor" && playerChoice == "paper")) {
        winner = "Computer";
        compScore++;
    }

    return winner;
}

// adds event listeners for buttons clicked 
rockbtn.addEventListener('click', () => click('rock'))
scissorbtn.addEventListener('click', () => click('scissor'))
paperbtn.addEventListener('click', () => click('paper'))


//elements by id
const player = document.getElementById('user')
const compPlayer = document.getElementById('comp')
const pScore = document.getElementById('playerScore')
const cScore = document.getElementById('compScore')
const rock = document.getElementById('rockbtn')
const scissor = document.getElementById('scissorbtn')
const paper = document.getElementById('paper')
const headerScore = document.getElementsByClassName('scoreInfo')
const headerMsg = document.getElementsByClassName('scoreMessage')
const img = document.querySelector('playerimg')

function gameOver() {
    return (playerScore === 5) || (compScore === 5)
}

function click(playerChoice) {


    let gen = computerPlay()
}

function updateChoice(playerChoice, computerChoice) {
    switch (playerChoice) {
        case 'rock':
            img.src = "pics/rock.png";
            break
        case 'paper':
            img.src = "pics/paper.png"
            break
        case 'scissor':
            img.src = "pics/scissor.png"
            break

    }

    switch (computerChoice) {
        case 'rock':
            img.src = "pics/rock.png";
            break
        case 'paper':
            img.src = "pics/paper.png"
            break
        case 'scissor':
            img.src = "pics/scissor.png"
            break

    }
}

function updateScore(winner){
    switch(winner){
        case 'Player':
            headerScore.textContent = "You won!"
            break
        case 'Computer':
            headerScore.textContent = "You lost!"
            break
        default:
            headerScore.textContent = "It's a tie!"
            break
    }


}
function game() {
    for (i = 0; i < 5; i++) {
        let input = prompt("What is your selection?");
        playRound(input, computerPlay());
    }

    if (playerScore > compScore) {
        console.log("You won!");
    }
    else if (compScore > playerScore) {
        console.log("Computer won!");
    }
    else {
        console.log("Tie!");
    }
}
