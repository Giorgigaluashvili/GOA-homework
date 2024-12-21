let cookies = 0; 
let gold = 0; 

let biggerFingerLevel = 0; 
let betterMinesLevel = 0; 
let doubleCookiesActive = false; 

let biggerFingerPrice = 50;
let betterMinesPrice = 100;
let doubleCookiesPrice = 200;

document.getElementById('cookieButton').addEventListener('click', function() {
    let pointsPerClick = 1 + biggerFingerLevel; 
    if (doubleCookiesActive) {
        pointsPerClick *= 2; 
    }

    cookies += pointsPerClick;

    gold += 1 + betterMinesLevel;

    updateStatus();
});

document.getElementById('biggerFingerButton').addEventListener('click', function() {
    if (gold >= biggerFingerPrice) {
        gold -= biggerFingerPrice;
        biggerFingerLevel += 1;
        biggerFingerPrice *= 2; 
        updateStatus();
    } else {
        alert("Not enough gold to buy Bigger Finger!");
    }
});

document.getElementById('betterMinesButton').addEventListener('click', function() {
    if (gold >= betterMinesPrice) {
        gold -= betterMinesPrice;
        betterMinesLevel += 1;
        betterMinesPrice *= 2;
        updateStatus();
    } else {
        alert("Not enough gold to buy Better Mines!");
    }
});

document.getElementById('doubleCookiesButton').addEventListener('click', function() {
    if (gold >= doubleCookiesPrice) {
        gold -= doubleCookiesPrice;
        doubleCookiesActive = true;
        doubleCookiesPrice *= 2; 
        updateStatus();
    } else {
        alert("Not enough gold to buy Double Cookies!");
    }
});

function updateStatus() {
    document.getElementById('cookieCount').textContent = cookies;
    document.getElementById('goldCount').textContent = gold;

    document.getElementById('biggerFingerLevel').textContent = biggerFingerLevel;
    document.getElementById('betterMinesLevel').textContent = betterMinesLevel;
    document.getElementById('doubleCookiesActive').textContent = doubleCookiesActive ? "Yes" : "No";

    document.getElementById('biggerFingerButton').textContent = `Buy Bigger Finger (${biggerFingerPrice} gold)`;
    document.getElementById('betterMinesButton').textContent = `Buy Better Mines (${betterMinesPrice} gold)`;
    document.getElementById('doubleCookiesButton').textContent = `Buy Double Cookies (${doubleCookiesPrice} gold)`;
}