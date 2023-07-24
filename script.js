const gridContainer = document.getElementById("gridContainer");
const resetButton = document.getElementById("resetButton");

function createGrid(size) {
    gridContainer.innerHTML = "";
    gridContainer.style.setProperty("--grid-size", size);

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
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
