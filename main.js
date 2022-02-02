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

//Capitalizes player choice for formatting
const capitalizeChoice = (choice) => {
    return choice.charAt(0).toUpperCase() + choice.slice(1);
}

//Simlutates rock, paper, scissors game based on player and com choice
const rpsGame = (playerChoice, comChoice) => {

    console.log(playerChoice)
    console.log(comChoice)
}

const playerPick = () => {

    //Allows for player input on choice and formats it(capitalized)
    let playerChoice = prompt('Please make a choice that is allowed:').toLowerCase()
    playerChoice = capitalizeChoice(playerChoice);

    if (playerChoice === 'Rock' || playerChoice === 'Paper' || playerChoice === 'Scissor') {

    }

    
}

const playerChoice = playerPick()
const computerChoice = computerPlay();

let winner = rpsGame(playerChoice, computerChoice)




