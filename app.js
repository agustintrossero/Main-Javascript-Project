
const buttons = document.querySelectorAll('.gameButton');
const playerScore = document.getElementById('player-score');
const tieScore = document.getElementById('tie-score');
const computerScore = document.getElementById('computer-score');
const roundDescription = document.getElementById('round-description');
const roundCount = document.getElementById('round-count');
const results = document.querySelector('.results');
const winner = document.getElementById('result');
const resetButton = document.querySelector('.reset');

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
    roundCount.textContent = `Round: ${round}`;
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
      updateScoreboard();
    });
    finalScore()
    results.classList.toggle('results-show')
  };

  const finalScore = () => {
    winner.textContent = score.player > score.computer ? 'You Win !!!' : score.player < score.computer ? 'You Lose !!!' : "It's a Draw !!!";
  }

const startRestart = () => {
  !confirm("Welcome! You are about to play Rock, Paper, Scissors. \nThe game will be the best five rounds! \nGood Luck!") ? endGame() : game();
}

startRestart();


const resetGame = () => {
  score.computer = 0;
  score.player = 0;
  score.tie = 0;
  round = 0;
  roundCount.textContent = 'Round: 0';
  roundDescription.textContent = '';
  winner.textContent = '';
  updateScoreboard();
  results.classList.remove('results-show');
  buttons.forEach(button => {
    button.disabled = false;
  });
  game()
};

resetButton.addEventListener('click', resetGame);

/*   const playVideoBtn = document.getElementById('play-video-btn');
  const videoElement = document.getElementById('video-element');
  videoElement.style.display = 'none';
  
  playVideoBtn.addEventListener('click', function() {
    videoElement.style.display = 'block';
    videoElement.play();
  });
   */
