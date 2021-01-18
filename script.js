console.log("welcome to coulette 🎨");

// Saved colors of coulette
const colors = [];

// Current generated color
let currentColor = undefined;

/**
 * Generate random number between min and max
 */
function randomNumber(min, max) {
  const num = Math.random() * (max - min + 1) + min;
  return Math.floor(num);
}

/**
 * Generate random hex number for color
 */
function randomHexNumber() {
  let hex = randomNumber(0, 255).toString(16);
  if (hex.length === 1) {
    hex = "0" + hex;
  }
  return hex;
}

/**
 * Generate random hex color
 */
function randomHexColor() {
  const red = randomHexNumber();
  const green = randomHexNumber();
  const blue = randomHexNumber();

  return ("#" + red + green + blue).toUpperCase();
}

/**
 * Generate random color and change color of header
 */
function changeColor() {
  currentColor = randomHexColor();

  const colorValueEl = document.querySelector("#color-value");
  colorValueEl.textContent = currentColor;

  const body = document.querySelector("header");
  body.style.backgroundColor = currentColor;

  updateSaveButtonStatus();
}

// initially change color of header
changeColor();

/**
 * Generate color of header
 */
const generateButton = document.querySelector("#generate");
if (generateButton) {
  generateButton.addEventListener("click", changeColor);
} else {
  console.error("button#generate was not found.");
}

/**
 * Save currently generate color
 */
const saveButton = document.querySelector("#save");
if (saveButton) {
  saveButton.addEventListener("click", function () {
    if (!colors.includes(currentColor)) {
      colors.push(currentColor);

      const colorList = document.querySelector("#colors");

      const newColor = document.createElement("li");
      newColor.innerText = currentColor;
      newColor.style.backgroundColor = currentColor;

      colorList.appendChild(newColor);

      updateSaveButtonStatus();
    }
  });
} else {
  console.error("button#save was not found");
}

/**
 * Updates save button status based on saved colors
 * and currently generated color
 */
function updateSaveButtonStatus() {
  const saveButton = document.querySelector("#save");
  if (colors.includes(currentColor)) {
    saveButton.setAttribute("disabled", "");
  } else {
    saveButton.removeAttribute("disabled");
  }
}
