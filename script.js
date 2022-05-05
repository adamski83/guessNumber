'use strict';
// const message = document.querySelector('.message');



let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const showMessage = (message) => {
    document.querySelector('.message').textContent = message;
};

const showScore = (score) => {
    document.querySelector('.score').textContent = score;
}

document.querySelector('.score').textContent = score;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        showMessage('No number 🔥 ');
    } else if (guess === secretNumber) {
        showMessage('Correct number');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#249b00';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        };
        //when guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            showMessage(guess > secretNumber ? 'Too high 📈 ' : 'Too low 📉 ');
            score--;
            showScore(score);
        } else {
            showMessage('You loose your all points');
            showScore(0);
        }
    }

});

document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    showMessage('Start guessing...');
    showScore(score);
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
})