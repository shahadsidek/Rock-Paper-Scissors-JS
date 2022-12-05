var roundCount = 1
var CScore = 0
var UScore = 0
const gameArray = ["rock", "paper", "scissors"];


var playGame = () => {

    function computerPlay() {
        const randomElement = gameArray[Math.floor(Math.random() * gameArray.length)];
        return randomElement;
    }
    let computerSelection = computerPlay();

    var playerInput = prompt('rock / paper / scissors').toLowerCase();
    switch (playerInput) {
        case ('paper'):
            if (computerSelection === 'paper') {
                console.log("User Selected: ", playerInput, "\n🖥️Computer Selected : ", computerSelection);
                console.log("Tie!!! \nResults Now :\nUser Score: ", UScore, "\nComputer Score:", CScore)
            } else if (computerSelection === 'rock') {
                console.log("😎User Selected: ", playerInput, "\n🖥️Computer Selected : ", computerSelection);
                UScore += 1;
                console.log("User Wins \nUser Score: ", UScore, "\nComputer Score:", CScore)
            }
            else {
                console.log("😎User Selected: ", playerInput, "\n🖥️Computer Selected : ", computerSelection);
                CScore += 1;
                console.log("Computer Wins \nUser Score: ", UScore, "\nComputer Score:", CScore)
            }
            break;
        case ('rock'):
            if (computerSelection === 'paper') {
                console.log("😎User Selected: ", playerInput, "\n🖥️Computer Selected : ", computerSelection);
                CScore += 1;
                console.log("Computer Wins \nUser Score: ", UScore, "\nComputer Score:", CScore)
            } else if (computerSelection === 'rock') {
                console.log("😎User Selected: ", playerInput, "\n🖥️Computer Selected : ", computerSelection);
                console.log("Tie!!! \nResults Now :\nUser Score: ", UScore, "\nComputer Score:", CScore)
            }
            else {
                console.log("😎User Selected: ", playerInput, "\n🖥️Computer Selected : ", computerSelection);
                UScore += 1;
                console.log("User Wins \nUser Score: ", UScore, "\nComputer Score:", CScore)
            }
            break;
        case ('scissors'):
            if (computerSelection === 'paper') {
                console.log("😎User Selected: ", playerInput, "\n🖥️Computer Selected : ", computerSelection);
                UScore += 1;
                console.log("User Wins!! \nUser Score: ", UScore, "\nComputer Score:", CScore)
            } else if (computerSelection === 'rock') {
                console.log("😎User Selected: ", playerInput, "\n🖥️Computer Selected : ", computerSelection);
                CScore += 1;
                console.log("Computer Wins \nUser Score: ", UScore, "\nComputer Score:", CScore)
            }
            else {
                console.log("😎User Selected: ", playerInput, "\n🖥️Computer Selected : ", computerSelection);
                console.log("Tie!!! \nResults Now :\nUser Score: ", UScore, "\nComputer Score:", CScore)
            }
            break;
        case (null):
            exit();
        default:
            console.log("Enter a proper choice");
            roundCount -= 1;
    }

}
while (roundCount < 6) {
    console.log("Playing Round: ", roundCount)
    playGame()
    roundCount += 1
}