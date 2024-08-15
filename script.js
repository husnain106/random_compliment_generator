const textOptions = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5"
];

const colorOptions = [
    "red",
    "green",
    "blue",
    "yellow",
    "purple",
    "orange",
];

function generateRandomTextAndColors() {
    const textDisplay = document.getElementById("text-display");
    const randomTextIndex = Math.floor(Math.random() * textOptions.length);
    const randomTextColorIndex = Math.floor(Math.random() * colorOptions.length);
    let randomBackgroundColorIndex;

    do {
        randomBackgroundColorIndex = Math.floor(Math.random() * colorOptions.length);
    } while (randomBackgroundColorIndex === randomTextColorIndex);

    textDisplay.textContent = textOptions[randomTextIndex];
    textDisplay.style.color = colorOptions[randomTextColorIndex];
    textDisplay.style.backgroundColor = colorOptions[randomBackgroundColorIndex];
}

generateRandomTextAndColors();