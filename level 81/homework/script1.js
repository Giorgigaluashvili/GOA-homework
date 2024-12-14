const ball = document.getElementById('ball');

function moveBall() {
  ball.style.left = '80%';
  
  setTimeout(() => {
    ball.style.left = '0';
  }, 2000); 
}

setInterval(moveBall, 3000);
