const textOptions = [
    "You have a beautiful smile.",
    "Your eyes sparkle like stars.",
    "You have a radiant personality.",
    "Your laugh is like music to my ears.",
    "You're incredibly intelligent and inspiring.",
    "Your kindness is contagious.",
    "You have a wonderful sense of humor.",
    "You're effortlessly stylish.",
    "You're a true inspiration to others.",
    "Your confidence is admirable.",
    "You have a heart of gold.",
    "You're incredibly talented.",
    "You're a natural beauty.",
    "You have a magnetic personality.",
    "You're always there to lend a helping hand.",
    "Your spirit is as captivating as a summer breeze.",
  "You have a grace that's truly enchanting.",
  "Your mind is as sharp as a tack.",
  "You're the epitome of elegance.",
  "Your presence lights up any room.",
  "You're a walking ray of sunshine.",
  "You have a heart full of compassion.",
  "Your determination is truly inspiring.",
  "You're a strong, independent woman.",
  "Your laughter is infectious.",
  "Your intellect is as dazzling as a supernova.",
  "You have a captivating aura that draws people in.",
  "Your spirit is as free as a wildflower.",
  "You're the kind of person who makes the world a better place.",
  "Your empathy is as deep as the ocean.",
  "You have a unique perspective that's refreshing.",
  "Your courage is inspiring to those around you.",
  "You're a living example of grace and strength.",
  "Your creativity knows no bounds.",
  "You have a magnetic charm that's irresistible.",
];

const colorOptions = [
    "red",
    "pink",
    "light pink",
    "coral",
    "orange",
    "yellow",
    "light yellow",
    "lavender",
    "purple",
    "light blue",
    "sky blue",
    "turquoise",
    "green",
    "lime green",
    "mint green",
    "beige",
    "cream",
    "gold",
    "silver",
    "white"
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