const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorButton = document.querySelector('#scissor');
const updateRound = document.querySelector('#update-round');
const playerScore = document.querySelector('#player-score');
const comScore = document.querySelector('#com-score');

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

//Begins pregame by allowing selection and making sure a tie isnt in order
const preGameCheck = (playerChoice, comChoice) => {
    let gameContinue = true;

    if (playerChoice === comChoice) {


    }
    
    return gameContinue;
}

//Simulates a best of 5 RPS game using rpsGame()
const fiveRoundMatch = () => {
    let playerCounter = 0;
    let comCounter = 0;

    for (let i = 0; i < 5; i++) {
        if (playerCounter === 3 || comCounter === 3) {
            break;
        }

        let finalSelections = preGameCheck()
        const winner = rpsGame(finalSelections[0], finalSelections[1])

        //Evaluates winner message in order to increment correct count on winner
        if ('You' === winner.slice(0,3)) {
            playerCounter++
        } else {
            comCounter++
        }
        console.log(winner)
    }

    //Conditional for final decision on winner of Best of 5
    let roundDecision = (playerCounter > comCounter) ? 'Player wins Bo5 Match!' : 'Computer wins Bo5 Match!'
    
    console.log(roundDecision)
}

//Manipulates DOM to put player choice against computer choice
const moveVersus = (pChoice, comChoice) => {
    paperButton.style.display = 'none';
    

}

const updateRpsGame = (selection) => {
    const comChoice = computerPlay();
    const playerChoice = selection;

    moveVersus(playerChoice, comChoice);

    const gameCheck = preGameCheck(playerChoice, comChoice)


}

rockButton.addEventListener('click', function () {
    updateRpsGame('Rock');
})

paperButton.addEventListener('click', () => {
    updateRpsGame('Paper');
});
scissorButton.addEventListener('click', () => {
    updateRpsGame('Scissor');
});

// fiveRoundMatch()






