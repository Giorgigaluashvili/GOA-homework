document.addEventListener("DOMContentLoaded", () => {
    const userName = localStorage.getItem('userName');
    const userScore = parseInt(localStorage.getItem('score')) || 0;
    const difficulty = parseInt(localStorage.getItem('difficulty')) || 1;
    
    if (userName) {
        showGame(userName, userScore, difficulty);
    } else {
        document.getElementById('login-container').style.display = 'block';
    }

    document.getElementById('colorPicker').addEventListener('input', (event) => {
        document.body.style.backgroundColor = event.target.value;
    });
});

function saveUserName() {
    const userName = document.getElementById('userName').value.trim();
    
    if (userName) {
        localStorage.setItem('userName', userName);
        localStorage.setItem('score', 0);
        localStorage.setItem('difficulty', 1);
        showGame(userName, 0, 1);
    } else {
        alert("Please enter a valid name.");
    }
}

function showGame(userName, score, difficulty) {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';

    document.getElementById('userNameDisplay').innerText = userName;
    document.getElementById('score').innerText = score;

    const maxNumber = Math.pow(2, difficulty); 
    const randomNumber = Math.floor(Math.random() * maxNumber) + 1;
    localStorage.setItem('randomNumber', randomNumber);
    localStorage.setItem('difficulty', difficulty);

    document.getElementById('numberGuess').value = ''; 
}

function checkGuess() {
    const userGuess = parseInt(document.getElementById('numberGuess').value.trim());
    const correctNumber = parseInt(localStorage.getItem('randomNumber'));
    let score = parseInt(localStorage.getItem('score'));
    let difficulty = parseInt(localStorage.getItem('difficulty'));

    if (userGuess === correctNumber) {
        score++;
        difficulty++; 
        localStorage.setItem('score', score);
        localStorage.setItem('difficulty', difficulty);

        document.getElementById('score').innerText = score;
        alert('Correct! Your score increased.');
    } else {
        alert('Wrong guess! Try again.');
    }

    const maxNumber = Math.pow(2, difficulty); 
    const randomNumber = Math.floor(Math.random() * maxNumber) + 1;
    localStorage.setItem('randomNumber', randomNumber);
}
