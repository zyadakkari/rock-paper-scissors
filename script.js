// tell the user we are playing Rock paper scissors
// console.log(alert("Hi! Let's play rock, paper scissors. To play just type your selection in the next window"))
// variables for keeping score
let userTotal = 0
let computerTotal = 0
// overall game function

const container = document.querySelector('.container')
const updateUserScore = document.querySelector('#userscore')
updateUserScore.textContent = `${userTotal}`

const updateComputerScore = document.querySelector('#computerscore')
updateComputerScore.textContent = `${computerTotal}`

function winCommunication (){
    const userWin = document.createElement('div');
    userWin.classList.add('win');
    userWin.textContent = "You Win!"
    container.appendChild(userWin);
    userTotal += 1
};
function loseCommunication (){
    const compWin = document.createElement('div');
    compWin.classList.add('lose');
    compWin.textContent = "You Lose!"
    container.appendChild(compWin);
    computerTotal += 1
};
function drawCommunication (){
    const draw = document.createElement('div');
    draw.classList.add('draw');
    draw.textContent = "It's a draw... Boring!"
    container.appendChild(draw);
};

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    userChoice = "rock"
    computerChoice = getComputer()
    winner = decideWinner()
    if (winner === "user") {
        winCommunication()
    }
    else if (winner === "computer"){
        loseCommunication()
    }
    else {drawCommunication()}
})

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    userChoice = "paper"
    computerChoice = getComputer()
    winner = decideWinner()
    if (winner === "user") {
        winCommunication()
    }
    else if (winner === "computer"){
        loseCommunication()
    }
    else {drawCommunication()}
})

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    userChoice = "scissors"
    computerChoice = getComputer()
    winner = decideWinner()
    if (winner === "user") {
        winCommunication()
    }
    else if (winner === "computer"){
        loseCommunication()
    }
    else {drawCommunication()}
})

function getUser (){

}
function getComputer (){
    let options = ["rock", "paper", "scissors"]
    return options[Math.floor(Math.random() * options.length)];

}

function decideWinner (){
    let userScore = userChoice.length;
    let computerScore = computerChoice.length;
    let winScore = userScore - computerScore;
    if (winScore === 1 || winScore === 3 || winScore === -4) {
        return "user"
    }
    else if (winScore === -1 || winScore === -3 || winScore === 4) {
        return "computer"
    }
    else {
        return "draw"
}
}
