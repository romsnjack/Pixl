const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const colorPicker = document.querySelector('#color-picker');
const saveButton = document.querySelector('#save-button');
const clearButton = document.querySelector('#clear-button');
const sizeRange = document.getElementById('size-range');
const sizeValue = document.getElementById('size-value');

let pixelSize = 10;
let isDrawing = false;
let isErasing = false;

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mousemove', draw);

function startDrawing() {
	isDrawing = true;
}

function stopDrawing() {
	isDrawing = false;
}

sizeRange.addEventListener('input', function () {
	// Update pixel size
	pixelSize = parseInt(this.value);
	sizeValue.textContent = sizeRange.value;
});

function draw(e) {
	if (!isDrawing) return;

	const rect = canvas.getBoundingClientRect();
	const x = e.clientX - rect.left - pixelSize;
	const y = e.clientY - rect.top - pixelSize;

	if (e.buttons === 1) {
		// left mouse button is being held down
		ctx.fillStyle = colorPicker.value;
		ctx.fillRect(
			Math.floor(x / pixelSize) * pixelSize,
			Math.floor(y / pixelSize) * pixelSize,
			pixelSize,
			pixelSize
		);
	} else if (e.buttons === 2) {
		// right mouse button is being held down
		ctx.clearRect(
			Math.floor(x / pixelSize) * pixelSize,
			Math.floor(y / pixelSize) * pixelSize,
			pixelSize,
			pixelSize
		);
	}
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
