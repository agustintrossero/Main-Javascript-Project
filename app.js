

let computerSelection;

function computerPlay(){
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber);
    if (randomNumber === 1){
        computerSelection = "rock";
    };
    if (randomNumber === 2){
        computerSelection = "paper";
    };
    if (randomNumber === 3){
        computerSelection = "scissors";
    };
    return computerSelection;
};

//console.log(computerPlay());

function playRound (playerSelection){
    switch(playerSelection.toLowerCase() + computerPlay()){
        case 'scissorspaper':
        case 'paperrock':
        case 'rockscissors':
            console.log(`YOU WIN! ${playerSelection} beats Computer ${computerSelection}`);
            break;
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            console.log(`YOU LOSE! ${computerSelection} beats your choice: ${playerSelection}`);
            break;
        case 'scissorsscissors':
        case 'paperpaper':
        case 'rockrock':
            console.log(`IT'S A DRAW! ${playerSelection} = Computer ${computerSelection}`);
            break;
        default:
            console.log("Your choice is invalid!, the only possible choices are: Rock, Paper or Scissors")
    };
};
playRound()


