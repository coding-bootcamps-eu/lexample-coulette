console.log("welcome to coulette 🎨");

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
  const color = randomHexColor();

  const colorValueEl = document.querySelector("#color-value");
  colorValueEl.textContent = color;

  const body = document.querySelector("header");
  body.style.backgroundColor = color;
}

// initially change color of header
changeColor();

/**
 * Generate color of header
 */
const button = document.querySelector("button");
if (button) {
  button.addEventListener("click", changeColor);
} else {
  console.error("button was not found.");
}
