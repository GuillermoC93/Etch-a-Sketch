const container = document.querySelector(".container");

function createGrid(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        cell.classList.add("grid-cell");
        container.appendChild(cell);
    }
}

createGrid(16, 16);