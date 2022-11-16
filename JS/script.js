//UI
let playerScore = document.getElementById('player-score');
let machineScore = document.getElementById('machine-score');
let message = document.getElementById('message');
let rock = document.getElementsByClassName('card')[0];
let paper = document.getElementsByClassName('card')[1];
let scissors = document.getElementsByClassName('card')[2];

let idleTime; //if the user haven't clicked anything within 1 sec clear the scoreboard message

rock.addEventListener('click', () => playRound('rock'));
paper.addEventListener('click', () => playRound('paper'));
scissors.addEventListener('click', () => playRound('scissors'));



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



//Game
function checkScore() {
    if(playerScore.textContent >= 5){

    }else if(machineScore.textContent >= 5){
        
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
            updatePlayerScore();
            showScoreboardMessage(playerSelection, machineSelection, true);
            break;
        
        case playerSelection === 'scissors' && machineSelection === 'rock':
        case playerSelection === 'rock' && machineSelection === 'paper':
        case playerSelection === 'paper' && machineSelection === 'scissors':
            updateMachineScore();
            showScoreboardMessage(playerSelection, machineSelection, false);
            break;
        default:
            showScoreboardMessage(playerSelection, machineSelection);
    }
}