const paragraph = document.getElementById("myParagraph");

const texts = ["This is the first text.", "Currently this is the text.", "We are changing texts.", "New text shift has started.", "This is the last text."];

let textIndex = 0;

function changeTextContent() {
    paragraph.textContent = texts[textIndex];
    
    textIndex = (textIndex + 1) % texts.length; 
}

setInterval(changeTextContent, 5000);
