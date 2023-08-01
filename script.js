const gridContainer = document.querySelector("#grid-container");
const resetButton = document.querySelector("#reset-button");

window.addEventListener("load", setDefaultGrid);
resetButton.addEventListener("click", changeSize);

function setDefaultGrid() {
  setGridSize(16);
  fillGrid(16);
}

function setGridSize(size) {
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function fillGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList = "grid-element";
    gridElement.addEventListener("mouseover", changeColor);
    gridContainer.appendChild(gridElement);
  }
}

function changeColor(e) {
  const randomR = Math.floor(Math.random() * 256);
  const randomG = Math.floor(Math.random() * 256);
  const randomB = Math.floor(Math.random() * 256);
  e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}

function changeSize() {
  let newSize = prompt("Enter new size");

  if (newSize !== null) {
    newSize = parseInt(newSize);
    if (newSize < 1 || newSize > 64 || Number.isNaN(newSize)) {
      alert("Enter a number from 1-64 range");
      changeSize();
    } else {
      clearGrid();
      setGridSize(newSize);
      fillGrid(newSize);
    }
  }
}

function clearGrid() {
  const gridArray = Array.from(gridContainer.childNodes);
  gridArray.forEach((element) => {
    gridContainer.removeChild(element);
  });
}

/* Pseudo Code

Create grid
    Button
        Input grid size "How many squares per side (max 100)?"
        Create grid that size, in a predetermined area. 
    
Grid modes
    Point and paint
        while mouse hover, black to white and vice versa
        onclick, save toggle (e.g. hover state saved)
            onclick, when click and drag, hover states saved
    Maybes
    Smear mode
        On hover, state is toggled and saved.
    Random mode
        Whether on point or smear mode, colors are randomized.
    Shade mode
        Whether on paint of smear mode, shade deepens with each pass.
    Color choice
        A color space can be chosen, within which a random color or a single color can be chosen within it.

*/


/* Auto attempt

const gridContainer = document.getElementById("gridContainer");
const resetButton = document.getElementById("resetButton");

function getRandomRGBValue() {
    return Math.floor(Math.random() * 256);
}

function darkenRGBValue(value, percentage) {
    return Math.floor(value * (1 - percentage));
}

function changeSquareColor(square) {
    const currentColor = window.getComputedStyle(square).backgroundColor;
    const match = currentColor.match(/(\d+),\s*(\d+),\s*(\d+)/);

    if (match) {
        const r = parseInt(match[1]);
        const g = parseInt(match[2]);
        const b = parseInt(match[3]);

        const newR = getRandomRGBValue();
        const newG = getRandomRGBValue();
        const newB = getRandomRGBValue();

        const darkenPercentage = 0.1;
        const newColor = `rgb(${darkenRGBValue(newR, darkenPercentage)}, ${darkenRGBValue(newG, darkenPercentage)}, ${darkenRGBValue(newB, darkenPercentage)})`;

        square.style.backgroundColor = newColor;
    }
}

function createGrid(size) {
    gridContainer.innerHTML = "";
    gridContainer.style.setProperty("--grid-size", size);

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener("mouseover", () => changeSquareColor(square));
        gridContainer.appendChild(square);
    }
}

resetButton.addEventListener("click", () => {
    let newSize = prompt("Enter the number of squares per side (max 100):");
    newSize = parseInt(newSize);

    if (!isNaN(newSize) && newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
});

createGrid(16);

*/

