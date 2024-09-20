// Function to display the width of the div
function displayWidth() {
  const boxes = document.querySelectorAll('.box1,.box2, .box3');
  for (const box of boxes) {
    box.textContent = `Width: ${box.offsetWidth}px`;
  }
}

// Display the width when the page loads
// displayWidth();

// Update the width if the window is resized
// window.addEventListener('resize', displayWidth);
