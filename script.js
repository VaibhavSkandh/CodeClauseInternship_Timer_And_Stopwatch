// Stopwatch variables
let stopwatchInterval;
let stopwatchIsRunning = false;
let stopwatchSeconds = 0;

// Timer variables
let timerInterval;
let timerIsRunning = false;
let timerSeconds = 0;

function startStopStopwatch() {
    if (!stopwatchIsRunning) {
        stopwatchIsRunning = true;
        document.getElementById("startStopStopwatch").textContent = "Stop";
        stopwatchInterval = setInterval(updateStopwatch, 1000);
    } else {
        stopStopwatch();
    }
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchIsRunning = false;
    document.getElementById("startStopStopwatch").textContent = "Start";
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchIsRunning = false;
    stopwatchSeconds = 0;
    updateStopwatchDisplay();
    document.getElementById("startStopStopwatch").textContent = "Start";
}

function updateStopwatch() {
    stopwatchSeconds++;
    updateStopwatchDisplay();
}

function updateStopwatchDisplay() {
    const stopwatchDisplay = document.getElementById("stopwatchDisplay");
    stopwatchDisplay.textContent = formatTime(stopwatchSeconds);
}

function formatTime(timeInSeconds) {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(value) {
    return value.toString().padStart(2, '0');
}

function startStopTimer() {
    if (!timerIsRunning) {
        const input = document.getElementById("timerInput").value;
        const timeArray = input.split(":");
        const hours = parseInt(timeArray[0]) || 0;
        const minutes = parseInt(timeArray[1]) || 0;
        const seconds = parseInt(timeArray[2]) || 0;
        timerSeconds = hours * 3600 + minutes * 60 + seconds;
        
        if (timerSeconds > 0) {
            timerIsRunning = true;
            document.getElementById("startStopTimer").textContent = "Stop";
            timerInterval = setInterval(updateTimer, 1000);
        }
    } else {
        stopTimer();
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    timerIsRunning = false;
    document.getElementById("startStopTimer").textContent = "Start";
}

function resetTimer() {
    clearInterval(timerInterval);
    timerIsRunning = false;
    timerSeconds = 0;
    updateTimerDisplay();
    document.getElementById("startStopTimer").textContent = "Start";
}

function updateTimer() {
    if (timerSeconds > 0) {
        timerSeconds--;
        updateTimerDisplay();
    } else {
        stopTimer();
    }
}

function updateTimerDisplay() {
    const timerDisplay = document.getElementById("timerDisplay");
    timerDisplay.textContent = formatTime(timerSeconds);
}

document.getElementById("startStopStopwatch").addEventListener("click", startStopStopwatch);
document.getElementById("resetStopwatch").addEventListener("click", resetStopwatch);
document.getElementById("startStopTimer").addEventListener("click", startStopTimer);
document.getElementById("resetTimer").addEventListener("click", resetTimer);