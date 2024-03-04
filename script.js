let msg = document.querySelector('.msg');
let userScore = document.querySelector(".your-score");
let compScore = document.querySelector(".comp-score");
let uScore = 0, cScore = 0;

playGame = (userChoice) => {
    compChoice = getRandomGenerator();
    if (userChoice === compChoice) {
        msg.innerText = `It was Draw, Play Again!`;
        msg.style.backgroundColor = "#081b31";
    } else {
        let userWin = true;
        if (userChoice === 'rock') {
            userWin = compChoice === 'paper' ? false : true;
        } else if (userChoice === 'scissor') {
            userWin = compChoice === 'paper' ? true : false;
        } else {
            userWin = compChoice === 'scissor' ? false : true;
        }
        if (userWin) {
            uScore++;
            userScore.innerText = uScore;
            msg.style.backgroundColor = 'green';
            msg.innerText = `You win, Your ${userChoice} beats ${compChoice}`;
        } else {
            cScore++;
            compScore.innerText = cScore;
            msg.style.backgroundColor = 'red';
            msg.innerText = `You lost, ${compChoice} beats your ${userChoice}`;
        }
    }
}

getRandomGenerator = () => {
    let choices = ['rock', 'paper', 'scissor'];
    let idx = Math.floor(Math.random() * 3);
    return choices[idx];
}

let choices = document.querySelectorAll(".option");
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        let userChoice = choice.getAttribute('id');
        playGame(userChoice);
    })
})