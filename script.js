// tell the user we are playing Rock paper scissors
console.log(alert("Hi! Let's play rock, paper scissors. To play just type your selection in the next window"))
// variables for keeping score
let userTotal = 0
let computerTotal = 0
// overall game function
function playGame (){
    // gets user choice
    let getUser = function (getUser){
        return prompt("rock, paper, scissors")
    }
    let userChoice = getUser()
    // gets computer choice
    let getComputer = function (getComputer){
        let options = ["rock", "paper", "scissors"]
        return options[Math.floor(Math.random() * options.length)];
    }
    let computerChoice = getComputer()
    console.log(`You chose ${userChoice}, I choose ${computerChoice}`)
    // evaluates who won
    let decideWinner = function (win){
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

    let winner = decideWinner()
    // tells user who won and updates the aggregate score
    if (winner === "user") {
        console.log("You won! Congrats!")
        userTotal += 1
    }
    else if (winner ==="computer"){
        console.log("You lost! Hard luck.")
        computerTotal += 1
    }
    else {console.log("It's a draw! Boring!")}
    console.log(`The score is You: ${userTotal} Computer: ${computerTotal}`)
    // tells user how to play again
    console.log("To play again type 'playGame()' in the console")


}
playGame()
