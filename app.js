
const buttons = document.querySelectorAll('button');
const playerScore = document.getElementById('player-score');
const tieScore = document.getElementById('tie-score');
const computerScore = document.getElementById('computer-score');
const roundDescription = document.getElementById('round-description');
const roundCount = document.getElementById('round-count');

score = {
    computer: 0,
    player: 0,
    tie: 0
};

let round = 0

const computerPlay = () =>{
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

const playRound = (playerSelection, computerSelection) =>{
        switch(playerSelection + computerSelection){
          case 'scissorspaper':
          case 'paperrock':
          case 'rockscissors':
            score.player++
              return `YOU WIN! ${playerSelection} beats ${computerSelection}\n`
          case 'paperscissors':
          case 'scissorsrock':
          case 'rockpaper':
            score.computer++
              return `YOU LOSE! ${computerSelection} beats ${playerSelection}\n`;

          case 'scissorsscissors':
          case 'paperpaper': 
          case 'rockrock':
            score.tie++
             return `IT'S A TIE!! ${playerSelection} = ${computerSelection}\n`;
          default:
            return null
      }; 
    }

const updateScoreboard = () => {
    playerScore.textContent = score.player
    computerScore.textContent = score.computer
    tieScore.textContent = score.tie
}

const handleButtonClick = (e) => {
    const playerSelection = e.target.value;
    const computerSelection = computerPlay();
    let roundResult = playRound(playerSelection, computerSelection);
    round++;
    roundCount.textContent = round
    roundDescription.textContent = roundResult
    if (round === 5) {
        endGame();
        return;
      }
      updateScoreboard();
    };

const game = () => {
        buttons.forEach(button =>{
        button.addEventListener('click', handleButtonClick)
    })       
}

const endGame = () => {
    buttons.forEach(button => {
      button.removeEventListener('click', handleButtonClick);
      button.disabled = true;
    });
    updateScoreboard();
  };

  game()

