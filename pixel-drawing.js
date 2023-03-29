const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const GRID_SIZE = 10; // Change this to change the size of the grid squares
const colorPicker = document.querySelector('#color-picker');
const saveButton = document.querySelector('#save-button');
const eraseButton = document.querySelector('#erase-button');
const clearButton = document.querySelector('#clear-button');

let isDrawing = false;
let isErasing = false;

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mousemove', draw);

function startDrawing(e) {
	if (isErasing) {
		isDrawing = false;
		erase(e);
	} else {
		isDrawing = true;
		draw(e);
	}
}

function stopDrawing() {
	isDrawing = false;
}

function draw(e) {
	if (!isDrawing) return;

	const x = e.offsetX;
	const y = e.offsetY;

	const row = Math.floor(y / GRID_SIZE);
	const col = Math.floor(x / GRID_SIZE);

	ctx.fillStyle = colorPicker.value;
	ctx.fillRect(col * GRID_SIZE, row * GRID_SIZE, GRID_SIZE, GRID_SIZE);
}

function erase(e) {
	if (!isErasing) return;

	const x = e.offsetX;
	const y = e.offsetY;

	const row = Math.floor(y / GRID_SIZE);
	const col = Math.floor(x / GRID_SIZE);

	ctx.clearRect(col * GRID_SIZE, row * GRID_SIZE, GRID_SIZE, GRID_SIZE);
}

clearButton.addEventListener('click', clearCanvas);

function clearCanvas() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

saveButton.addEventListener('click', savePicture);

function savePicture() {
	const dataUrl = canvas.toDataURL(); // Get a data URL representing the contents of the canvas
	const link = document.createElement('a');
	link.download = 'pixl.png';
	link.href = dataUrl;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}

eraseButton.addEventListener('click', toggleErase);

function toggleErase() {
	isErasing = !isErasing;
	if (isErasing) {
		eraseButton.classList.add('active');
	} else {
		eraseButton.classList.remove('active');
	}
}
