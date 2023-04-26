
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
    playerSelection = prompt(`Rock, Paper, Scissors, shoot!`);
    computerSelection = computerPlay();
    if(playerSelection === null){
        confirm("You hit cancel, are you sure you want to exit the game?")? startRestart() : playRound();
    }
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
            return roundResult = `IT'S A DRAW!! ${playerSelection} = Computer ${computerSelection}`;
        default:
            return roundResult = alert("Your choice is invalid!, the only possible choices are: Rock, Paper or Scissors"), playRound();
    };
};

function startRestart() {
    confirm("Welcome! You are about to start Rock, Paper, Scissors Game");
    return game();
}
startRestart()

function game(){
    score = {
        computer: 0,
        player: 0
    };
    
    
    for(i=0; i<5; i++){
        const roundResult = playRound(i);
        console.log(roundResult);
        alert(roundResult)
        if(roundResult.includes("WIN")){
            score.player++;
        } else if (roundResult.includes("LOSE")){
            score.computer++;
        }
    }
    let = finalResult = ` Final Score: 
    PLAYER: ${score.player} 
    COMPUTER: ${score.computer} `

    if(score.computer > score.player){
        alert(`YOU LOSE!, better luck next time! ${finalResult}`)
    } else if (score.player > score.computer){
        alert(`CONGRATULATIONS! YOU ARE THE WINNER!!!${finalResult}`)
    } else if (score.computer == score.player){
        alert(`IT'S A DRAW! ${finalResult}`)
    }
    startRestart()
}

