const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorButton = document.querySelector('#scissor');
const updateRound = document.querySelector('#update-round');
const playerScore = document.querySelector('#player-score');
const comScore = document.querySelector('#com-score');
const gameDiv = document.querySelector('.game');

const resetButton = document.createElement('button');
const leftFireworkButton = document.createElement('button');
const rightFireworkButton = document.createElement('button');

//Initializes variables for game
let roundCounter = 1;
let playerCounter = 0;
let comCounter = 0;

const disableButtons = () => {
    rockButton.setAttribute('disabled', 'disabled');
    paperButton.setAttribute('disabled', 'disabled');
    scissorButton.setAttribute('disabled', 'disabled');
}

const enableButtons = () => {
    rockButton.removeAttribute('disabled');
    paperButton.removeAttribute('disabled');
    scissorButton.removeAttribute('disabled');
}


//using random num gen to decide a rps choice for computer player
const computerPlay = () => {
    const computerPick = Math.floor(Math.random() * 3) + 1
    let computerChoice;

    if (computerPick === 1) {
        return computerChoice = 'Rock';
    } else if (computerPick === 2) {
        return computerChoice = 'Paper';
    } else {
        return computerChoice = 'Scissor'
    }

}

//Simlutates rock, paper, scissors game based on player and com choice
const rpsGame = (playerChoice, comChoice) => {

    //statment that checks for game winner based on choice
    if ((playerChoice === 'Rock' && comChoice === 'Scissor') || (comChoice === 'Rock' && playerChoice === 'Scissor')) {

        if (playerChoice === 'Rock') {
            return('You win! Rock beats Scissors!')
        } else {
            return('Computer Wins! Rock beats Scissors!')
        }

    } else if ((playerChoice === 'Paper' && comChoice === 'Rock') || (comChoice === 'Paper' && playerChoice === 'Rock')) {

        if (playerChoice === 'Paper') {
            return('You Win! Paper beats Rock!')
        } else {
            return('Computer Wins! Paper beats Rock')
        }

    } else if ((playerChoice === 'Scissor' && comChoice === 'Paper') || (comChoice === 'Scissor' && playerChoice === 'Paper')) {

        if (playerChoice === 'Scissor') {
            return('You Win! Scissors beats Paper!')
        } else {
            return('Computer Wins! Scissors beat Paper!')
        }
    }
}

//Simulates a best of 5 RPS game using rpsGame()
const fiveRoundMatch = (winner) => {

    //Evaluates winner message in order to increment correct count on winner
    if ('You' === winner.slice(0,3)) {
        playerCounter++
        playerScore.textContent = `${playerCounter}`;
    } else {
        comCounter++
        comScore.textContent = `${comCounter}`;
    }

    if (playerCounter === 3 || comCounter === 3) {
        const finalsWinner = playerCounter > comCounter;
        endGame(finalsWinner);
    }

}

//Manipulates DOM to put player choice against computer choice
const gameSetup = (pChoice, comChoice) => {
    
    //Creates new div for versus text in game
    const div = document.createElement('div');
    const p = document.createElement('p');
    p.textContent = "VS."
    p.classList.add('versus-game');


    //Changes the middle image into versus div
    div.appendChild(p);
    gameDiv.insertBefore(div, scissorButton);
    paperButton.style.display = 'none';

    changeIcons(pChoice, comChoice);

    resetStage(pChoice, comChoice);
}

//Changes icons of buttons based on choice
const changeIcons = (pChoice, comChoice) => {
    if (pChoice === "Rock" && comChoice === "Scissor") return;
    if (pChoice === "Paper") rockButton.id = "paper";
    if (pChoice === "Scissor") rockButton.id = "scissor";
    if (comChoice === "Rock") scissorButton.id = "rock";
    if (comChoice === "Paper") scissorButton.id = "paper";
}

//Resets game stage if round is over or tie
const resetStage = (pChoice, comChoice) => {
    
    if (pChoice === comChoice) {
        setTimeout(() => {
            updateRound.textContent = "There has been a tie! Please choose again"

            //Adds paper button back and removes vs div
            const children = gameDiv.children;
            children[2].remove();
            paperButton.style.display = "";

            rockButton.id = "rock";
            scissorButton.id = "scissor";

            enableButtons();
        }, 2000);
    } else {
        const winner = rpsGame(pChoice, comChoice);

        setTimeout(() => {
            roundCounter++;
            updateRound.textContent = `${winner} Round ${roundCounter}`;

            //Adds paper button back and removes vs div
            const children = gameDiv.children;
            children[2].remove();
            paperButton.style.display = "";

            rockButton.id = "rock";
            scissorButton.id = "scissor";

            enableButtons();

            fiveRoundMatch(winner);
        }, 2000);
    }
}

const gameBegin = (selection) => {
    //Disable all buttons so spam clicking isn't a problem
    disableButtons()

    const comChoice = computerPlay();
    const playerChoice = selection;

    gameSetup(playerChoice, comChoice);
}

//Best of 5 winner decided along with reset button
const endGame = (finalWinner) => {
    if (finalWinner) {
        updateRound.textContent = "Best of 5 Over! Player Wins!"
    } else {
        updateRound.textContent = "Best of 5 Over! Computer Wins!"
    }

    leftFireworkButton.classList.add('firework');
    rightFireworkButton.classList.add('firework-mirror');
    resetButton.id = "reset-button";
    resetButton.textContent = "Play Again";

    rockButton.style.display = "none";
    paperButton.style.display = "none";
    scissorButton.style.display = "none";

    gameDiv.appendChild(leftFireworkButton);
    gameDiv.appendChild(resetButton);
    gameDiv.appendChild(rightFireworkButton);
    leftFireworkButton.style.display = "";
    rightFireworkButton.style.display = "";
    resetButton.style.display = "";
}

const resetGame = () => {
    leftFireworkButton.style.display = "none";
    rightFireworkButton.style.display = "none";
    resetButton.style.display = "none";

    rockButton.style.display = "";
    paperButton.style.display = "";
    scissorButton.style.display = "";
    
    roundCounter = 1;
    playerCounter = 0;
    comCounter = 0;

    updateRound.textContent = "Please make a selection for Round 1";
    playerScore.textContent = `${playerCounter}`;
    comScore.textContent = `${comCounter}`;
}

rockButton.addEventListener('click', function () {
    gameBegin('Rock');
})

paperButton.addEventListener('click', () => {
    gameBegin('Paper');
});
scissorButton.addEventListener('click', () => {
    gameBegin('Scissor');
});

gameDiv.addEventListener('click', (e) => {
    if(e.target.id == "reset-button") {
        resetGame();
    }
})