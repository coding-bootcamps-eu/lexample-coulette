console.log("welcome to coulette 🎨");

// Saved colors of coulette
const colors = [];

// Current generated color
let currentColor = undefined;

const storageKey = "colors";

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
 * Create item for color in color list
 */
function createColorElementInList(color) {
  const colorList = document.querySelector("#colors");

  const newColor = document.createElement("li");
  newColor.innerText = color;
  newColor.style.backgroundColor = color;
  newColor.setAttribute("data-color", color);

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete Color";

  newColor.appendChild(deleteButton);
  colorList.appendChild(newColor);
}

/**
 * Save currently generate color
 */
const saveButton = document.querySelector("#save");
if (saveButton) {
  saveButton.addEventListener("click", function () {
    if (!colors.includes(currentColor)) {
      colors.push(currentColor);
      createColorElementInList(currentColor);
      updateSaveButtonStatus();
      saveColorsToLocalStorage();
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

/**
 * Delete color from color list
 */
const colorList = document.querySelector("#colors");
colorList.addEventListener("click", function (e) {
  const tagName = e.target.tagName.toLowerCase();
  if (tagName === "button") {
    const listItem = e.target.parentElement;
    const color = listItem.getAttribute("data-color");

    deleteColorFromArray(color);
    colorList.removeChild(listItem);
  }
});

/**
 * Delete color from colors array
 */
function deleteColorFromArray(color) {
  const index = colors.indexOf(color);
  colors.splice(index, 1);

  updateSaveButtonStatus();
  saveColorsToLocalStorage();
}

/**
 * Save currently saved colors to local storage
 */
function saveColorsToLocalStorage() {
  const jsonColors = JSON.stringify(colors);
  localStorage.setItem(storageKey, jsonColors);
}

function readColorsFromLocalStorage() {
  const storageColors = localStorage.getItem(storageKey);
  if (storageColors !== null) {
    const _colors = JSON.parse(storageColors);
    _colors.forEach((color) => {
      createColorElementInList(color);
      colors.push(color);
    });
  }
}

// initially read colors from local storage
readColorsFromLocalStorage();
