
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
       confirm("You hit cancel, are you shure you want to exit the game?") ?  (alert("Good Bye!!! \n(Press F5 to start game)")) : playRound();
    }
    switch(playerSelection.toLowerCase() + computerSelection){
        case 'scissorspaper':
        case 'paperrock':
        case 'rockscissors':
            return roundResult = `YOU WIN! ${playerSelection} beats ${computerSelection}`;
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            return roundResult = `YOU LOSE! ${computerSelection} beats ${playerSelection}`;
        case 'scissorsscissors':
        case 'paperpaper': 
        case 'rockrock':
            return roundResult = `IT'S A DRAW!! ${playerSelection} = ${computerSelection}`;
        default:
            return roundResult = alert("Your choice is invalid!, the only possible choices are: Rock, Paper or Scissors"), playRound();
    };
};

function startRestart(){
    !confirm("Welcome! You are about to play Rock, Paper, Scissors. \nThe game will be the best five rounds! \nGood Luck!") ? new Error(alert("Good Bye!!! \n(Press F5 to start game)")) : game();
}
startRestart();

function game(){
    score = {
        computer: 0,
        player: 0
    };

    
    for(i=0; i<5; i++){
        const roundResult = playRound(i);
        if(roundResult.includes("WIN")){
            score.player++;
            alert(`${roundResult} \nScore\nPlayer: ${score.player} \nComputer: ${score.computer}`);
        } else if (roundResult.includes("LOSE")){
            score.computer++;
            alert(`${roundResult} \nScore\nPlayer: ${score.player} \nComputer: ${score.computer}`);
        } else {
            alert(`${roundResult} \nScore\nPlayer: ${score.player} \nComputer: ${score.computer}`);
        }
    }
    
    let finalResult = ` \nFinal Score: \nPLAYER: ${score.player} \nCOMPUTER: ${score.computer} `;

    if(score.computer > score.player){
        alert(`YOU LOSE!, better luck next time! ${finalResult}`);
    } else if (score.player > score.computer){
        alert(`CONGRATULATIONS! YOU ARE THE WINNER!!! ${finalResult}`);
    } else if (score.computer == score.player){
        alert(`IT'S A DRAW! ${finalResult}`);
    }
    startRestart();
}

