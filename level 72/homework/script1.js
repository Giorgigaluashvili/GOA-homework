const colors = ["#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#9B59B6", "#1ABC9C"];

let colorIndex = 0;

function changeBackgroundColor() {
    document.body.style.backgroundColor = colors[colorIndex];
    
    colorIndex = (colorIndex + 1) % colors.length;
}

setInterval(changeBackgroundColor, 3000);