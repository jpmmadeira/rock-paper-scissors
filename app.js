let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
let userChoice_div = '';

function convertToWord (letter) {
    if (letter === 'r') return 'Rock';
    if (letter === 'p') return 'Paper';
    if (letter === 's') return 'Scissors';
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win! `;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() =>  { userChoice_div.classList.remove('green-glow')}, 500);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You Lost! `;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => { userChoice_div.classList.remove('red-glow')}, 500);
}

function draw(userChoice, computerChoice) {
    userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. Draw! `;
    userChoice_div.classList.add('yellow-glow');
    setTimeout(() =>  { userChoice_div.classList.remove('yellow-glow')}, 500);
}

function game(userChoice) {

    const computerChoice = getComputerChoice();
    console.log("User Choice:" + userChoice);
    console.log("Computer Choice:" + computerChoice);

    switch (userChoice + computerChoice) {
        case 'rp':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice);
            console.log('User Wins');
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose (userChoice, computerChoice);
            break;
        case 'rp':
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice);
            break;

    }
}

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

rock_div.addEventListener('click', () =>  {
    game('r');
})

paper_div.addEventListener('click', () =>  {
    game('p');
})

scissors_div.addEventListener('click', () =>  {
    game('s');
})