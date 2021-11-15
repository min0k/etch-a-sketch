
let body = document.querySelector(".container");

function changeColor(e) {
    e.target.style.backgroundColor = "black";
}

for (let i = 1; i <= 256; i++) {
    const gridDiv = document.createElement("div");
    gridDiv.className = `gridDiv${i} grids`;
    gridDiv.addEventListener("mouseover", changeColor);
    body.appendChild(gridDiv);
}

let allDivs = document.querySelectorAll(".grids");
let button = document.querySelector("button");

button.addEventListener("click", clear);

function clear() {
    allDivs.forEach(function (e) {
        e.style.backgroundColor = "white";
    });
}
