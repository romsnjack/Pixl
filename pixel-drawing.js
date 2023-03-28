const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const PIXEL_SIZE = 10; // Change this to change the size of the pixels

let isDrawing = false;

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mousemove', draw);

function startDrawing(e) {
	isDrawing = true;
	draw(e);
}

function stopDrawing() {
	isDrawing = false;
}

function draw(e) {
	if (!isDrawing) return;

	const x = e.offsetX;
	const y = e.offsetY;

	const row = Math.floor(y / PIXEL_SIZE);
	const col = Math.floor(x / PIXEL_SIZE);

	ctx.fillStyle = 'black';
	ctx.fillRect(col * PIXEL_SIZE, row * PIXEL_SIZE, PIXEL_SIZE, PIXEL_SIZE);
}
