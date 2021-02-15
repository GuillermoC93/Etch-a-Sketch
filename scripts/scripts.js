const container = document.querySelector(".container");
const btn = document.querySelector('button');

createGrid(16, 16);

btn.addEventListener('click', () => {
    dimensions = prompt("Enter a size: ");
    clearGrid(container);
    if (dimensions > 100) {
        return alert("ERROR")
    } else {
        createGrid(dimensions, dimensions);
    }
    
});

function createGrid(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        cell.classList.add("grid-cell");
        container.appendChild(cell);
    };
    hoverEffect();
};

function hoverEffect() {
    cell = document.getElementsByClassName("grid-cell");
    numCells = cell.length;
    for (let i = 0; i < numCells; i++) {
        cell[i].addEventListener("mouseover", (e) => {
            cell[i].style.backgroundColor = "black";
        });
    };
};

function clearGrid(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
};