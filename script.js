// players score variables
let humanScore = 0;
let computerScore = 0;

//Computer choice
function getComputerChoice() {
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
function getHumanChoice() {
    let userInput = prompt("Please Enter Your choice:");
    return userInput;
}
// console.log(getHumanChoice())

// play round logic

function playRound (humanChoice, computerChoice) {
humanChoice = humanChoice.toLowerCase();

if(humanChoice === computerChoice) {
    return `It is a Tie ${humanChoice} is the same as ${computerChoice}`;
} else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    return `You win! ${humanChoice} beats ${computerChoice}`
} else if (humanChoice === "paper" &&  computerChoice === "rock"){
    humanScore++;
    return `You win! ${humanChoice} beats ${computerChoice}`
} else if (humanChoice === "scissors" && computerChoice === "paper" ){
    humanScore++;
    return `You win! ${humanChoice} beats ${computerChoice}`

} else if (humanChoice === "rock" && computerChoice === "paper"){
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}`;
} else if (humanChoice === "paper" &&  computerChoice === "scissors") {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}`;
} else if(humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}`;
}
else {
    return `Invalid Logic`;
}
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection))



