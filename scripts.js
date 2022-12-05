const gameArray = ["rock", "paper", "scissors"];
let userChoice;
let userChoice2;
let userScore = 0;
let computerScore = 0;
function userInputValidation() {
    userChoice = prompt("Choose rock-paper-scissors");
    if (gameArray.includes(userChoice) === false) {
        return false;
    }
    else
        return true;
}

function userPlay() {
    if (userInputValidation() === false) {
        console.log("Invalid Input, please enter rock , paper , or scissors ");
        userChoice2 = prompt("Let us try to choose again (rock-paper-scissors)");
        userChoice2 = userChoice2.toLowerCase();
        return userChoice2;
    } else {
        userChoice = userChoice.toLowerCase();
        return userChoice;
    }
}

let userSelection = userPlay();
console.log("User Selected: ", userSelection);


function computerPlay() {
    const randomElement = gameArray[Math.floor(Math.random() * gameArray.length)];
    return randomElement;
}

let computerSelection = computerPlay();
console.log("Computer Selected: ", computerSelection);


function playRound(userSelection, computerSelection, computerScore, userScore) {
    let message = '';
    if (userSelection === computerSelection) {
        message = "Tie!!!";
        console.log("Message: ", message, "\nUser Score: ", userScore, "\nComputer Score: ", computerScore)
        return;
    } else if (computerSelection == "scissors") {
        if (userSelection == "paper") {
            computerScore = computerScore + 1;
            message = "you loose, scissors beats paper";
            console.log("Message: ", message, "\nUser Score: ", userScore, "\nComputer Score: ", computerScore)
            return (computerScore);

        } else {
            userScore = userScore + 1;
            message = "you win, rocks beats scissors";
            console.log("Message: ", message, "\nUser Score: ", userScore, "\nComputer Score: ", computerScore)
            return (userScore);
        }
    } else if (computerSelection == "paper") {
        if (userSelection == "rock") {
            computerScore = computerScore + 1;
            message = "you loose, paper beats rock";
            console.log("Message: ", message, "\nUser Score: ", userScore, "\nComputer Score: ", computerScore)
            return (computerScore);
        } else if (userSelection == "paper") {
            message = "Tie !!!";
            console.log("Message: ", message, "\nUser Score: ", userScore, "\nComputer Score: ", computerScore)
            return;
        } else {
            userScore = userScore + 1;
            message = "you win, scissors beats paper";
            console.log("Message: ", message, "\nUser Score: ", userScore, "\nComputer Score: ", computerScore)
            return (userScore);
        }
    } else if (computerSelection == "rock") {
        if (userSelection == "paper") {
            userScore = userScore + 1;
            message = "you win, paper beats rock";
            console.log("Message: ", message, "\nUser Score: ", userScore, "\nComputer Score: ", computerScore)
            return (userScore);
        } else if (userSelection == "rock") {
            message = "Tie !!!";
            console.log("Message: ", message, "\nUser Score: ", userScore, "\nComputer Score: ", computerScore)
            return;
        } else {
            computerScore = computerScore + 1;
            message = "you loose, rocks beats scissors";
            console.log("Message: ", message, "\nUser Score: ", userScore, "\nComputer Score: ", computerScore)
            return (computerScore);
        }
    }
    else
        return 0
}

let result = playRound(userSelection, computerSelection, computerScore, userScore);
console.log("result is :", result)

