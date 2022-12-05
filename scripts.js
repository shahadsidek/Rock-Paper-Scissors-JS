let roundCount = 1
let CScore = 0
let UScore = 0
const gameArray = ["rock", "paper", "scissors"];


const computerPlay = () => {
    const randomElement = gameArray[Math.floor(Math.random() * gameArray.length)];
    return randomElement;
}

let computerSelection = computerPlay();

const userPlay = () => {
    let playerInput = prompt('rock / paper / scissors').trim().toLowerCase();
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

let userSelection = userPlay(UScore, CScore, roundCount);

function playRound() {
    while (roundCount < 5) {
        console.log("\n\n*****************\n\nPlaying Round: ", roundCount)
        roundCount++
        computerPlay();
        userPlay();

    }
    if (roundCount >= 5) {
        if (UScore > CScore) {
            console.log("Congratulations!!!!! User Wins")
        } else if (CScore > UScore) {
            console.log("Hard Luck  (: Computer Wins")
        } else {
            console.log("Tie No Worries,, you will win next time ")
        }
    }

}

playRound(UScore, CScore, roundCount);

