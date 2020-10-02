let grid = document.getElementById("grid-container");
let slider = document.getElementById("slider");
let sliderValue = document.getElementById("slider-value");
let gridSquare = document.createElement("div");
let gridSize = slider.value;
let reset = document.getElementById("reset");
let color = document.getElementById("color");

displayGrid();

slider.addEventListener("input", displaySliderValue);
slider.addEventListener("change", displayGrid);
reset.addEventListener("click", displayGrid);
color.addEventListener("change", setColor);

function displaySliderValue() {
  sliderValue.textContent = this.value;
}

function displayGrid() {
  grid.innerHTML = "";
  gridSize = slider.value;

  gridSquare.style.height = `${100 / gridSize}%`;
  gridSquare.style.width = `${100 / gridSize}%`;
  gridSquare.style.border = "1px solid #222";
  gridSquare.style.backgroundColor = "#fff";

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      grid.appendChild(gridSquare.cloneNode());
    }
  }

  listenSquares();
}

function setColor() {
  if (color.checked) {
    return getRandomColor();
  } else {
    return "#222";
  }
}

function listenSquares() {
  let gridChildren = Array.from(grid.childNodes);
  gridChildren.forEach(function (child) {
    child.addEventListener("mouseover", function () {
      child.style.backgroundColor = setColor();
    });
  });
}

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
