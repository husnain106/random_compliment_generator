const textOptions = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5"
    // Add more options to the array
];

function generateRandomText() {
    const randomIndex = Math.floor(Math.random() * textOptions.length);
    const randomText = textOptions[randomIndex];
    document.getElementById("text-display").textContent = randomText;
}

generateRandomText();