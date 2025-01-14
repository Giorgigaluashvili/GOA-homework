document.addEventListener("DOMContentLoaded", () => {
    const generateBtn = document.getElementById("generateBtn");
    const checkBtn = document.getElementById("checkBtn");
    const idInput = document.getElementById("idInput");
    const outputDiv = document.getElementById("output");

    let randomIDs = {}; 

    function generateRandomID() {
        const randomID = Math.random().toString(36).substring(2, 10); 
        const randomValue = Math.floor(Math.random() * 100); 

        randomIDs[randomID] = randomValue;

        outputDiv.innerHTML = `<p>Generated ID: ${randomID} with value: ${randomValue}</p>`;
    }

    function checkID() {
        const enteredID = idInput.value.trim();
        if (enteredID) {
            if (randomIDs.hasOwnProperty(enteredID)) {
                const value = randomIDs[enteredID];
                outputDiv.innerHTML = `<p>key-${enteredID}: value-${value}</p>`;
            } else {
                outputDiv.innerHTML = `<p>ID not found!</p>`;
            }
        } else {
            outputDiv.innerHTML = `<p>Please enter an ID to check.</p>`;
        }
    }

    generateBtn.addEventListener("click", generateRandomID);
    checkBtn.addEventListener("click", checkID);
});