const countdownDisplay = document.getElementById("countdown");
const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");
const timeInput = document.getElementById("timeInput");

let timeLeft = 0;
let intervalId = null;
let isPaused = false;

// START button (only starts, does NOT resume)
startButton.addEventListener("click", () => {
    // Prevent restarting if timer is already running
    if (intervalId !== null) return;

    timeLeft = timeInput.value ? Number(timeInput.value) : 10;
    countdownDisplay.textContent = timeLeft;

    isPaused = false;
    pauseButton.textContent = "Pause";

    intervalId = setInterval(() => {
        if (!isPaused) {
            timeLeft--;
            countdownDisplay.textContent = timeLeft;

            if (timeLeft <= 0) {
                clearInterval(intervalId);
                intervalId = null;
                countdownDisplay.textContent = "Time's up!";
            }
        }
    }, 1000);
});

// PAUSE / RESUME button
pauseButton.addEventListener("click", () => {
    if (intervalId === null) return;

    isPaused = !isPaused;
    pauseButton.textContent = isPaused ? "Resume" : "Pause";
});
