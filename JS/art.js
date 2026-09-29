const myCanvas = document.getElementById("board");
const ctx = myCanvas.getContext("2d");

let isDrawing = false;
const colorPicker = document.getElementById("colorPicker");
const sizePicker = document.getElementById("brushSize");
const clearButton = document.getElementById("clearButton");
const fillButton = document.getElementById("fillButton");
const saveButton = document.getElementById("saveButton");

board.addEventListener("pointerdown", () => {isDrawing = true});
board.addEventListener("pointerout", () => {isDrawing = false;});
board.addEventListener("pointerup", () => {isDrawing = false;ctx.beginPath()});
board.addEventListener("pointermove", draw);
board.style.touchAction = "none";

clearButton.addEventListener("click", clearCanvas);
fillButton.addEventListener("click", fillCanvas);
saveButton.addEventListener("click", downloadCanvas);

function draw(e) {
    if (!isDrawing) return;
    ctx.lineWidth = sizePicker.value;
    ctx.lineCap = "round";
    ctx.strokeStyle = colorPicker.value;

    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
}

function clearCanvas() {
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
}

function fillCanvas() {
    ctx.fillStyle = colorPicker.value;
    ctx.fillRect(0, 0, board.width, board.height);
}
function downloadCanvas() {
    const imagelink = document.createElement("a");
    imagelink.download = `artpiece${Date.now()}.png`;
    imagelink.href = board.toDataURL("image/png");
    imagelink.click();
}
