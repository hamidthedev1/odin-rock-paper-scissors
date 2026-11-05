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

// playGame logic
function playGame() {
// players score variables
let humanScore = 0;
let computerScore = 0;

// play round logic
function playRound (humanChoice, computerChoice) {
humanChoice = humanChoice.toLowerCase();

if(humanChoice === computerChoice) {
    return `It is a Tie ${humanChoice} is the same as ${computerChoice}`;

} else if((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" &&  computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
    humanScore++;
    return `You win! ${humanChoice} beats ${computerChoice}`

} else if( (humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" &&  computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock") ){
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}`;
} 
else {
    return `Invalid User Input`;
}
}

 // Repeat 5 Times
for (let i = 0; i < 10; i++) {
   const humanSelection = getHumanChoice();
   const computerSelection = getComputerChoice();
console.log(playRound(humanSelection, computerSelection));
}

if (humanScore > computerScore){
    console.log(`You win the game ${humanScore} : ${computerScore}`)
} else if (humanScore < computerScore){
    console.log(`Computer wins the game ${humanScore} : ${computerScore}`)
}else {
    console.log(`It is a tie ${humanScore} : ${computerScore}`)
}

}

playGame();
    

