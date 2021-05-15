let moves = ['Rock', 'Paper', 'Scissors']

function computerPlay() {
    let randomNumber = (Math.floor(Math.random()*3))
    let computerMove = moves[randomNumber]
    return computerMove
    }

function decideWinner(playerSelection, computerSelection) {
    let playerMove = playerSelection.toLowerCase()
    let computerMove = computerSelection.toLowerCase()
    console.log(playerMove);
    console.log(computerMove);
    if (playerMove ==='rock') {
        if (computerMove === 'paper') {return ['You lose! Paper beats Rock',0]}
        if (computerMove === 'scissors') {return ['You win! Rock beats Scissors',1]}
        if (computerMove === 'rock') {return ['Draw!',2]}
    }
    if (playerMove ==='paper') {
        if (computerMove === 'rock') {return ['You win! Paper beats Rock',1]}
        if (computerMove === 'scissors') {return ['You lose! Scissors beats Paper',0]}
        if (computerMove === 'paper') {return ['Draw!',2]}
    }
    if (playerMove ==='scissors') {
        if (computerMove === 'rock') {return ['You lose! Rock beats Scissors',0]}
        if (computerMove === 'paper') {return ['You win! Scissors beats Paper',1]}
        if (computerMove === 'scissors') {return ['Draw!',2]}
    }

}

function game() {
    let score = 0
    let computerscore= 0
    for(let i=0;i<5;i++) {
        playerMove = prompt('Enter your move')
        let computerMove = computerPlay()
        console.log(`Computer played ${computerMove}`)
        let winner = decideWinner(playerMove, computerMove)
        if (winner[1]===1) {score++}
        console.log(winner[0])
        if (winner[1]===0) {computerscore++;}
        console.log(`Score is You:${score} Computer:${computerscore}`)
    }
    score > computerscore ? console.log('You win brother') : console.log('AI Takeover Muhahahah')
    score == computerscore ? console.log('Lets call it even') : ""
}

alert('Game is in the console brother, press Cntrl+Shift+I')
game()