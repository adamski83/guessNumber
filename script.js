'use strict';
const message = document.querySelector('.message');


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.score').textContent = score;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        message.textContent = 'No number 🔥 '
    } else if (guess === secretNumber) {
        message.textContent = 'Correct number ';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#249b00';
        document.querySelector('.number').style.width = '30rem';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess > secretNumber) {
        if (score > 1) {
            score--;
            message.textContent = 'To high 📈 '
            document.querySelector('.score').textContent = score;
        } else {
            message.textContent = 'You loose your all points'
        }
    } else if (guess < secretNumber) {
        score--;
        message.textContent = 'To low 📉 '
        document.querySelector('.score').textContent = score;
        const secretNumber = secretNumber;
    }
})

document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    message.textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
})