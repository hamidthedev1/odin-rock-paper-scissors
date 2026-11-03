// players score variables
let humanScore = 0;
let computerScore = 0;

//Computer choice
function getComputerChoice (){
    const random = Math.floor(Math.random() * 3);
    if (random === 0){
       return "rock"
    } else if (random === 1){
        return "paper"
    } else {
        return "scissors";
    }
}
// console.log(getComputerChoice())

// human choice
function getHumanChoice(){
    let humanChoice = prompt("Please Enter Your choice:").toLowerCase()
    return humanChoice;
}
console.log(getHumanChoice())