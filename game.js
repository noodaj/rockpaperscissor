let playerScore = 0;
let compScore = 0;
let winner = "";

//elements by id
const player = document.getElementById('playerPic')
const compPlayer = document.getElementById('comPic')
const pScore = document.getElementById('playerScore')
const cScore = document.getElementById('compScore')
const rock = document.getElementById('rockbtn')
const scissor = document.getElementById('scissorbtn')
const paper = document.getElementById('paper')
const headerScore = document.getElementById('scoreInfo')
const headerMsg = document.getElementById('scoreMessage')
const endScreen = document.getElementById('endScreen')
const endButton = document.getElementById('endButton')
const endMsg = document.getElementById('endMessage')

// adds event listeners for buttons clicked 
rockbtn.addEventListener('click', () => click('rock'))
scissorbtn.addEventListener('click', () => click('scissor'))
paperbtn.addEventListener('click', () => click('paper'))
endButton.addEventListener('click', () => restart())

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
    console.log(`Generated "${choice}"`)
    return choice;
}

function playRound(playerChoice, computerChoice) {
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

function gameOver() {
    return (playerScore === 5) || (compScore === 5)
}


let header = (winner, playerChoice, computerChoice) =>{
    if(winner === "Player"){
        headerMsg.textContent = `${playerChoice} beats ${computerChoice}`
    }
    else if(winner === "Computer"){
        headerMsg.textContent = `${playerChoice} is beaten by ${computerChoice}`
    }
    else{
        headerMsg.textContent =  `${playerChoice} ties with ${computerChoice} `
    }
}

function click(playerChoice) {

    if(gameOver()){
        rockbtn.disabled = true;
        scissorbtn.disabled = true;
        paperbtn.disabled = true;
        endScreenMsg()
        endScreenOpen()
    }

    let computerChoice = computerPlay()
    let roundWin = playRound(playerChoice, computerChoice);
    console.log(roundWin);
    updateChoice(playerChoice, computerChoice);
    updateScore(roundWin)
    header(winner,playerChoice,computerChoice);
    
    if(gameOver()){
        rockbtn.disabled = true;
        scissorbtn.disabled = true;
        paperbtn.disabled = true;
        endScreenMsg()
        endScreenOpen()
    }
}

function updateChoice(playerChoice, computerChoice) {
    switch (playerChoice) {
        case 'rock':
            player.src = "pics/rock.png";
            break;
        case 'paper':
            player.src = "pics/paper.png"
            break;
        case 'scissor':
            player.src = "pics/scissor.png"
            break;
    }

    switch (computerChoice) {
        case 'rock':
            compPlayer.src = "pics/rock.png";
            break;
        case 'paper':
            compPlayer.src = "pics/paper.png"
            break;
        case 'scissor':
            compPlayer.src = "pics/scissor.png"
            break;
    }
}

function updateScore(winner){
    if(winner === "Tie"){
        headerScore.textContent = "It's a tie!";
    }
    else if (winner === "Player"){
        headerScore.textContent = "You win!";
    }
    else if(winner === "Computer"){
        headerScore.textContent = "You lost!"
    }

    pScore.textContent = `Player : ${playerScore}`;
    cScore.textContent = `Computer : ${compScore}`;
}

function restart(){
    playerScore = 0;
    compScore = 0;
    pScore.textContent = "Player : 0";
    cScore.textContent = "Player : 0"
    winner = "";
    player.src = "pics/questionmark.png"
    compPlayer.src = "pics/questionmark.png"
    headerMsg.textContent = "Make your pick"
    headerScore.textContent = "First to get 5 points wins the game"
    endScreenClose()
    rockbtn.disabled = false;
    scissorbtn.disabled = false;
    paperbtn.disabled = false;

}

function endScreenMsg(){
    return playerScore > compScore ? 
    (endMsg.textContent = "You win!") : (endMsg.textContent = "You lost!")
}

function endScreenOpen(){
    endScreen.classList.add('on')
}

function endScreenClose(){
    endScreen.classList.remove('on')
}