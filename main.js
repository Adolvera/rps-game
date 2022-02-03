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

    //If statment that checks for game winner and if a tie was played
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

    console.log(playerChoice)
    console.log(comChoice)
}


//Function for player choice and validation of choice
const playerPick = () => {

    let validName = false

    //While loop that runs until player choice is valid
    while (validName === false) {

        //Allows for player input on choice and formats it(capitalized)
        let playerChoice = prompt('Please make a choice that is allowed:').toLowerCase()
        playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);

        //Checks to see if name is valid with required choices
        if (playerChoice === 'Rock' || playerChoice === 'Paper' || playerChoice === 'Scissor') {

            validName = true;
            return playerChoice
        }
    }

    
}

//Begins pregame by allowing selection and making sure a tie isnt in order
const preGameCheck = () => {
    
    let gameContinue = false;
    let playerChoice;
    let computerChoice;

    while (gameContinue === false) {
        playerChoice = playerPick()
        computerChoice = computerPlay();
    
        if (playerChoice != computerChoice) {
            gameContinue = true;
        } else {
            console.log('Game has resulted in a tie! Please play again.')
        }

    }

    return ([playerChoice, computerChoice]);
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

fiveRoundMatch()






