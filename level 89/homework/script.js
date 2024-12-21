const cardsData = [
    { title: 'Product 1', number: 45, rating: 3.5 },
    { title: 'Product 2', number: 78, rating: 4.0 },
    { title: 'Product 3', number: 32, rating: 2.8 },
    { title: 'Product 4', number: 120, rating: 4.5 },
    { title: 'Product 5', number: 65, rating: 3.9 },
    { title: 'Product 6', number: 110, rating: 4.2 },
    { title: 'Product 7', number: 20, rating: 3.1 }
];

function generateCards(cards) {
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = ''; 

    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.innerHTML = `
            <h3>${card.title}</h3>
            <div class="number">${card.number}</div>
            <div class="rating">Rating: ${card.rating}</div>
        `;
        cardContainer.appendChild(cardElement);
    });
}

function filterBelowAverage() {
    const average = cardsData.reduce((sum, card) => sum + card.number, 0) / cardsData.length;
    const filteredCards = cardsData.filter(card => card.number >= average);
    generateCards(filteredCards);
}

function sortCards(type) {
    let sortedCards;

    if (type === 'asc') {
        sortedCards = [...cardsData].sort((a, b) => a.rating - b.rating);
    } else if (type === 'desc') {
        sortedCards = [...cardsData].sort((a, b) => b.rating - a.rating);
    } else {
        sortedCards = [...cardsData].sort(() => Math.random() - 0.5);
    }

    generateCards(sortedCards);
}

document.getElementById('filterButton').addEventListener('click', filterBelowAverage);
document.getElementById('sortAsc').addEventListener('click', () => sortCards('asc'));
document.getElementById('sortDesc').addEventListener('click', () => sortCards('desc'));
document.getElementById('sortRandom').addEventListener('click', () => sortCards('random'));

generateCards(cardsData);