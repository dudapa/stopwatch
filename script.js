const seconds = document.querySelector('.seconds');
const tens = document.querySelector('.tens');
const startBtn = document.querySelector('.btn-start');
const stopBtn = document.querySelector('.btn-stop');
const resetBtn = document.querySelector('.btn-reset');
let secondsCount = 0;
let tensCount = 0;
let isStopwachRunning = false;
let interval;

// Run time
function timeRunning() {
  tensCount++;
  if (tensCount > 99 && secondsCount <= 9) {
    seconds.textContent = '0' + secondsCount;
    tensCount = 0;
    secondsCount++;
  }
  if (tensCount > 99 && secondsCount > 9) {
    seconds.textContent = secondsCount;
    tensCount = 0;
    secondsCount++;
  }
  if (tensCount < 9) {
    tens.textContent = '0' + tensCount;
  }
  if (tensCount > 9) {
    tens.textContent = tensCount;
  }
}

// Functions to control stopwatch
function startStopwatch() {
  interval = setInterval(timeRunning, 10);
  startBtn.disabled = true;
}

function stoptStopwatch() {
  startBtn.disabled = false;
  clearInterval(interval);
}

function resetStopwatch() {
  seconds.textContent = '00';
  tens.textContent = '00';
  secondsCount = 0;
  tensCount = 0;
  startBtn.disabled = false;
  clearInterval(interval);
}

// Listeners
startBtn.addEventListener('click', startStopwatch);
stopBtn.addEventListener('click', stoptStopwatch);
resetBtn.addEventListener('click', resetStopwatch);
