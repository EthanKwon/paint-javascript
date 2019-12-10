const canvas = document.querySelector("#js-canvas");

let painting = false;
function onMouseMove(event) {
  const x = event.offsetX,
    y = event.offsetY;
}

function stopPainting(event) {
  painting = false;
}

function onMouseDown(event) {
  painting = true;
}

function onMouseUp(event) {
  stopPainting();
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", onMouseUp);
  canvas.addEventListener("mouseleave", stopPainting);
}
