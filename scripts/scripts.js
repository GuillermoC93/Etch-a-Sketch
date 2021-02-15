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

function hoverEffect() {
    cell = document.getElementsByClassName("grid-cell");
    numCells = cell.length;
    for (let i = 0; i < numCells; i++) {
        cell[i].addEventListener("mouseover", (e) => {
            cell[i].style.backgroundColor = "black";
        })
    }
    }


createGrid(100, 100);

hoverEffect();