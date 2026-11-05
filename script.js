// Generate a random computer choice
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

// How human insert his choice
function getHumanChoice() {
    let userInput = prompt("Please Enter Your choice:");
    return userInput;
}
// Get the human player's choice

// Manage the entire game
function playGame() {
// Initialize player scores
let humanScore = 0;
let computerScore = 0;

// Handle one round
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

 // Play five rounds
for (let i = 0; i < 5; i++) {
   const humanSelection = getHumanChoice();
   const computerSelection = getComputerChoice();
console.log(playRound(humanSelection, computerSelection));
}

// Determine the overall winner
if (humanScore > computerScore){
    console.log(`You win the game ${humanScore} : ${computerScore}`)
} else if (humanScore < computerScore){
    console.log(`Computer wins the game ${humanScore} : ${computerScore}`)
}else {
    console.log(`It is a tie ${humanScore} : ${computerScore}`)
}

}

playGame();
    

