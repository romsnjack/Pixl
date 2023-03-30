function updateTime() {
	// Get the current time
	const now = new Date();

	// Format the time as HH:MM:SS
	const hours = now.getHours().toString().padStart(2, '0');
	const minutes = now.getMinutes().toString().padStart(2, '0');
	const seconds = now.getSeconds().toString().padStart(2, '0');
	const timeString = `${hours}:${minutes}:${seconds}`;

	// Update the clock element with the new time
	const clock = document.getElementById('clock');
	clock.textContent = timeString;
}

// Update the time every second
setInterval(updateTime, 1000);
