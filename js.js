
const body = document.querySelector(".container");
const button = document.querySelector("button");

const smallGrid = document.querySelector(".small-grid");
const bigGrid = document.querySelector(".big-grid");

let allDivs;
let gridSize = 256;

button.addEventListener("click", clear);

bigGrid.addEventListener("click", clearAndUpdateSizeBig);
smallGrid.addEventListener("click", clearAndUpdateSizeSmall);

createGrid(gridSize);

function createGrid(size) {
    if (size === 256) {
        body.style.gridTemplateColumns = `repeat(16, 1fr)`;
        body.style.gridTemplateRows = `repeat(16, 1fr)`;
    } else if (size === 1024) {
        body.style.gridTemplateColumns = `repeat(32, 1fr)`;
        body.style.gridTemplateRows = `repeat(32, 1fr)`;
    }
    for (let i = 1; i <= size; i++) {
        const gridDiv = document.createElement("div");
        gridDiv.className = `gridDiv${i} grids`;
        gridDiv.addEventListener("mouseover", changeColor);
        body.appendChild(gridDiv);
    }
}


allDivs = document.querySelectorAll(".grids");

function clearAndUpdateSizeSmall(ee) {
    allDivs = document.querySelectorAll(".grids");
    allDivs.forEach(function (e) {
        e.remove();
    });
    createGrid(256);
}
    
function clearAndUpdateSizeBig(ee) {
    allDivs = document.querySelectorAll(".grids");
    allDivs.forEach(function (e) {
        e.remove();
    });
    createGrid(1024);
}

function changeColor(e) {
    e.target.style.backgroundColor = "black";
}

function clear() {
    allDivs = document.querySelectorAll(".grids");
    allDivs.forEach(function (e) {
        e.style.backgroundColor = "white";
    });
}

