const canvas = document.querySelector("#js-canvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("js-color");
const range = document.querySelector("#js-range");
const mode = document.querySelector("#js-mode");
const save = document.querySelector("#js-save");

const DEFUALT_COLOR = "#2c2c2c";

canvas.width = 700;
canvas.height = 700;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.strokeStyle = DEFUALT_COLOR;
ctx.fillStyle = DEFUALT_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function startPainting() {}
function onMouseMove(event) {
  const x = event.offsetX,
    y = event.offsetY;

  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function stopPainting(event) {
  painting = false;
}

function onMouseDown(event) {
  if (!filling) painting = true;
}

function fillColor() {
  if (filling) ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function handleCM(event) {
  event.preventDefault();
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", fillColor);
  canvas.addEventListener("contextmenu", handleCM);
}

function handleColorChange(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handleRangeChange(event) {
  const brushSize = event.target.value;
  ctx.lineWidth = brushSize;
}

function handleModeClick() {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
}

function handleSaveClick() {
  const image = canvas.toDataURL();
  const link = document.createElement("a");
  link.href = image;
  link.download = "image";
  link.click();
}

Array.from(colors).forEach(color =>
  color.addEventListener("click", handleColorChange)
);

if (range) {
  range.addEventListener("input", handleRangeChange);
}

if (mode) {
  mode.addEventListener("click", handleModeClick);
}

if (save) {
  save.addEventListener("click", handleSaveClick);
}
