console.log("welcome to coulette 🎨");

/**
 * Toggle color of header
 */
const button = document.querySelector("button");
if (button) {
  button.addEventListener("click", function () {
    const color = "hotpink";
    const header = document.querySelector("header");
    const currentBackgroundColor = header.style.backgroundColor.toLowerCase();
    if (currentBackgroundColor !== "hotpink") {
      header.style.backgroundColor = color;
    } else {
      header.style.backgroundColor = null;
    }
  });
} else {
  console.error("button was not found.");
}
