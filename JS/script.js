//UI
let playerScore = document.getElementById('player-score');
let machineScore = document.getElementById('machine-score');
let winner = document.getElementById('winner');
let rock = document.getElementsByClassName('card')[0];
let paper = document.getElementsByClassName('card')[1];
let scissors = document.getElementsByClassName('card')[2];


rock.addEventListener('click', () => playRound('rock'));
paper.addEventListener('click', () => playRound('paper'));
scissors.addEventListener('click', () => playRound('scissors'));


function updatePlayerScore(score) {
    playerScore.textContent++;
    checkScore()
}

function updateMachineScore(score) {
    machineScore.textContent++;
    checkScore()
}

function checkScore() {
    if(playerScore.textContent >= 5){
        
    }else if(machineScore.textContent >= 5){

    }
}

//Game
function getComputerChoice() {
    return ["rock","paper","scissors"][Math.floor(Math.random()*3)];
}

function playRound(playerSelection){
    let machineSelection = getComputerChoice();
    switch(true){
        case playerSelection === 'rock' && machineSelection === 'scissors':
        case playerSelection === 'paper' && machineSelection === 'rock':
        case playerSelection === 'scissors' && machineSelection === 'paper':
            updatePlayerScore();
            break;
        
        case playerSelection === 'scissors' && machineSelection === 'rock':
        case playerSelection === 'rock' && machineSelection === 'paper':
        case playerSelection === 'paper' && machineSelection === 'scissors':
            updateMachineScore();
            break;
        default:

    }
}

function game(){

}