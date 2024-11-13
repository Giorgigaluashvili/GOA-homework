const newDiv = document.createElement("div");

newDiv.textContent = "This is a new div created with createElement";

document.body.appendChild(newDiv);


// -----------------------------------------------------------------


const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph.";

document.body.appendChild(newParagraph);


// -----------------------------------------------------------------


const firstDiv = document.createElement("div");
firstDiv.textContent = "This is the first div.";

const secondDiv = document.createElement("div");
secondDiv.textContent = "This is the second div.";

document.body.appendChild(secondDiv); 
document.body.insertBefore(firstDiv, secondDiv);


// -----------------------------------------------------------------


const paragraph = document.createElement("p");
paragraph.textContent = "This paragraph will be removed.";

document.body.appendChild(paragraph);

document.body.removeChild(paragraph);


// -----------------------------------------------------------------


const paragraph = document.getElementById("myParagraph");

const parentElement = paragraph.parentNode;

console.log(parentElement);