//UI
let playerScore = document.getElementById('player-score');
let machineScore = document.getElementById('machine-score');
let message = document.getElementById('message');
let rock = document.getElementsByClassName('card')[0];
let paper = document.getElementsByClassName('card')[1];
let scissors = document.getElementsByClassName('card')[2];
let playAgainButton = document.getElementById('play-again');

let idleTime; //if the user haven't clicked anything within 1 sec clear the scoreboard message

rock.addEventListener('click', () => playRound('rock'));
paper.addEventListener('click', () => playRound('paper'));
scissors.addEventListener('click', () => playRound('scissors'));
playAgainButton.addEventListener('click',() => restart());


function updatePlayerScore() {
    playerScore.textContent++;
    checkScore();
}

function updateMachineScore() {
    machineScore.textContent++;
    checkScore();
}

function clearScoreboardMessage(){ //if the user haven't clicked or chosen anything within 1 sec clear the scoreboard message
    document.onclick = resetTimer

    function resetTimer() {
        clearTimeout(idleTime);
        idleTime = setTimeout(() => message.textContent = '',1000);
    }
}

function showScoreboardMessage(playerSelection,machineSelection,playerWin) {
    if(playerWin === undefined){
        message.textContent = 'Tie';
        clearScoreboardMessage()
    }
    else if(playerWin){
        message.textContent = `${playerSelection} \n beats \n ${machineSelection}`;
        clearScoreboardMessage()

    }
    else{
        message.textContent = `${machineSelection} \n beats \n ${playerSelection}`;
        clearScoreboardMessage()
    }
}

function gameOver(playerWin) {
    if(playerWin){
        message.textContent = 'You win';
    }
    else{
        message.textContent = 'You lose';
    }
    rock.style.display = 'none';
    paper.style.display = 'none';
    scissors.style.display = 'none';
    playAgainButton.style.display = 'block';
    clearTimeout(idleTime);
    document.onclick = null; // If user clicks it doesn't removes the scoreboard message
}

function restart() {
    rock.style.display = '';
    paper.style.display = '';
    scissors.style.display = '';
    playAgainButton.style.display = 'none';
    machineScore.textContent = 0;
    playerScore.textContent = 0;
}

//Game
function checkScore() {
    if(playerScore.textContent >= 5){
        gameOver(true)
    }else if(machineScore.textContent >= 5){
        gameOver(false)
    }
}

function getComputerChoice() {
    return ["rock","paper","scissors"][Math.floor(Math.random()*3)];
}

function playRound(playerSelection){
    let machineSelection = getComputerChoice();
    switch(true){
        case playerSelection === 'rock' && machineSelection === 'scissors':
        case playerSelection === 'paper' && machineSelection === 'rock':
        case playerSelection === 'scissors' && machineSelection === 'paper':
            showScoreboardMessage(playerSelection, machineSelection, true);
            updatePlayerScore();
            break;
        
        case playerSelection === 'scissors' && machineSelection === 'rock':
        case playerSelection === 'rock' && machineSelection === 'paper':
        case playerSelection === 'paper' && machineSelection === 'scissors':
            showScoreboardMessage(playerSelection, machineSelection, false);
            updateMachineScore();
            break;
        default:
            showScoreboardMessage(playerSelection, machineSelection);
    }
}