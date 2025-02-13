function borrowBook(bookId) {
    const bookElement = document.getElementById(bookId);
    const button = bookElement.querySelector('button');
    
    if (button.innerHTML === 'Borrow') {
        button.innerHTML = 'Returned';
        alert(`You have borrowed the book "${bookElement.querySelector('h3').innerHTML}"`);
    } else {
        button.innerHTML = 'Borrow';
        alert(`You have returned the book "${bookElement.querySelector('h3').innerHTML}"`);
    }
}
