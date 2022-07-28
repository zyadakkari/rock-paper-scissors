// tell the user we are playing RPS and they need to select one
console.log(alert("Hi! Let's play rock, paper scissors. To play just type your selection in the next window"))
// prompt user to give their selection
let userTotal = 0
let computerTotal = 0
function playGame (){
    let getUser = function (getUser){
        return prompt("rock, paper, scissors")
    }
    let userChoice = getUser()

    let getComputer = function (getComputer){
        let options = ["rock", "paper", "scissors"]
        return options[Math.floor(Math.random() * options.length)];
    }
    let computerChoice = getComputer()
    console.log(`You chose ${userChoice}, I choose ${computerChoice}`)
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
    if (winner === "user") {
        console.log("You won! Congrats!")
    }
    else if (winner ==="computer"){
        console.log("You lost! Hard luck.")
    }
    else {console.log("It's a draw! Boring!")}
    // console.log(`The score is You: ${userTotal} Computer: ${computerTotal}`)
    console.log("To play again type 'playGame()' in the console")


}
playGame()
