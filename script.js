


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
