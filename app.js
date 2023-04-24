


function computerPlay(){
    const randomNumber = Math.floor(Math.random() * 3) + 1;
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

const playRound = function(playerSelection, computerSelection){
    computerSelection = computerPlay();
    playerSelection = prompt("Rock, Paper, Scissors, shoot!");
    switch(playerSelection.toLowerCase() + computerSelection){
        case 'scissorspaper':
        case 'paperrock':
        case 'rockscissors':
            return roundResult = `YOU WIN! ${playerSelection} beats Computer ${computerSelection}`;
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            return roundResult = `YOU LOSE! ${computerSelection} beats your choice: ${playerSelection}`;
        case 'scissorsscissors':
        case 'paperpaper':
        case 'rockrock':
            return roundResult = `IT'S A DRAW! ${playerSelection} = Computer ${computerSelection}`;
        default:
            return roundResult = alert("Your choice is invalid!, the only possible choices are: Rock, Paper or Scissors")
    };
};

function game(){
    score = {
        computer: 0,
        player: 0
    };
    for(i=0; i<5; i++){
        const roundResult = playRound(i);
        console.log(roundResult);
        if(roundResult.includes("WIN")){
            score.player++;
        } else if (roundResult.includes("LOSE")){
            score.computer++;
        }
    }
    if(score.computer > score.player){
        alert("YOU LOSE!, better luck next time!")
    } else if (score.computer > score.player){
        alert("CONGRATULATIONS! YOU ARE THE WINNER!!!")
    } else if (score.computer = score.player){
        alert("IT'S A DRAW!")
    }
    console.log(score)
}
console.log(game())