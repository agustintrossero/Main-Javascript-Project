console.log("Starting")

let computerChoice

const computerPlay = function(){
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber);
    if (randomNumber === 1){
        computerChoice = "Rock";
    }
    if (randomNumber === 2){
        computerChoice = "Paper";
    }
    if (randomNumber === 3){
        computerChoice = "Scissors";
    }
    console.log(`Computer choice: ${computerChoice}`);
}

computerPlay()
