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

const buttons = document.querySelectorAll('button')
const resultscontainer = document.querySelector('.results')

const playagain = document.createElement('button')
playagain.innerText = 'Play again'

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {


    button.addEventListener('click', () => {
        let computermove = computerPlay();
        let results = (decideWinner(button.id, computermove));
        if (results[1]===1) {playerScore++};
        if (results[1]===0) {computerScore++};
        let resultstring = document.createElement('p')
        resultstring.textContent = results[0]
        resultscontainer.appendChild(resultstring)

        let scorestring = document.createElement('p')
        scorestring.textContent = `The score is You: ${playerScore}, Computer: ${computerScore}`
        resultscontainer.append(scorestring)

        if (playerScore===5) {
            let resultstring = document.createElement('p')
            resultstring.textContent = 'You win! Congrats. Leave or play again'
            resultscontainer.appendChild(resultstring)
            playerScore = 0
            computerScore = 0
            resultscontainer.append(playagain)

        }
        if (computerScore===5) {
            let resultstring = document.createElement('p')
            resultstring.textContent = 'You lose! Loser!. Leave or play again'
            resultscontainer.appendChild(resultstring)
            playerScore = 0
            computerScore = 0
            resultscontainer.append(playagain)
        }
    });
});

playagain.addEventListener('click',() => {
    resultscontainer.innerHTML = ""
})


// function game() {
//     let score = 0
//     let computerscore= 0
//     for(let i=0;i<5;i++) {
//         playerMove = prompt('Enter your move')
//         let computerMove = computerPlay()
//         console.log(`Computer played ${computerMove}`)
//         let winner = decideWinner(playerMove, computerMove)
//         if (winner[1]===1) {score++}
//         console.log(winner[0])
//         if (winner[1]===0) {computerscore++;}
//         console.log(`Score is You:${score} Computer:${computerscore}`)
//     }
//     score > computerscore ? console.log('You win brother') : console.log('AI Takeover Muhahahah')
//     score == computerscore ? console.log('Lets call it even') : ""
// }
