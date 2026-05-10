
// ===============================
// ELEMENTOS DEL DOM
// ===============================
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const millisecondsEl = document.getElementById("milliseconds");

const startPauseBtn = document.getElementById("startPauseBtn");
const clearBtn = document.getElementById("clearBtn");

// ===============================
// VARIABLES DEL CRONÓMETRO
// ===============================
let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;

// Estados:
// stopped -> Start
// running -> Pause
// paused  -> Continue
let state = "stopped";

// ===============================
// FORMATEAR NÚMEROS
// ===============================
function format(value) {
  return value.toString().padStart(2, "0");
}

function formatMilliseconds(value) {
  return value.toString().padStart(3, "0");
}

// ===============================
// ACTUALIZAR DISPLAY
// ===============================
function updateDisplay(time) {

  // Cálculos
  const hours = Math.floor(time / (1000 * 60 * 60));

  const minutes = Math.floor(
    (time % (1000 * 60 * 60)) / (1000 * 60)
  );

  const seconds = Math.floor(
    (time % (1000 * 60)) / 1000
  );

  const milliseconds = time % 1000;

  // Mostrar datos
  hoursEl.textContent = format(hours);
  minutesEl.textContent = format(minutes);
  secondsEl.textContent = format(seconds);

  millisecondsEl.textContent =
    formatMilliseconds(milliseconds);
}

// ===============================
// INICIAR CRONÓMETRO
// ===============================
function startTimer() {

  startTime = Date.now() - elapsedTime;

  timerInterval = setInterval(() => {

    elapsedTime = Date.now() - startTime;

    updateDisplay(elapsedTime);

  }, 10);

  state = "running";
  startPauseBtn.textContent = "Pause";
}

// ===============================
// PAUSAR CRONÓMETRO
// ===============================
function pauseTimer() {

  clearInterval(timerInterval);

  state = "paused";
  startPauseBtn.textContent = "Continue";
}

// ===============================
// RESETEAR CRONÓMETRO
// ===============================
function clearTimer() {

  clearInterval(timerInterval);

  startTime = 0;
  elapsedTime = 0;

  state = "stopped";

  // Reiniciar display
  updateDisplay(0);

  // Reiniciar texto del botón
  startPauseBtn.textContent = "Start";
}

// ===============================
// BOTÓN START / PAUSE / CONTINUE
// ===============================
startPauseBtn.addEventListener("click", () => {

  if (state === "stopped") {
    startTimer();

  } else if (state === "running") {
    pauseTimer();

  } else if (state === "paused") {
    startTimer();
  }
});

// ===============================
// BOTÓN CLEAR
// ===============================
clearBtn.addEventListener("click", clearTimer);

// ===============================
// INICIALIZAR DISPLAY
// ===============================
updateDisplay(0);