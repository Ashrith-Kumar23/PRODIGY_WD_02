let timer;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let lapCounter = 1;

function startStopwatch() {
    timer = setInterval(updateStopwatch, 10);
}

function updateStopwatch() {
    milliseconds++;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
    }

    displayTime();
}

function displayTime() {
    document.getElementById('minutes').innerText = padTime(minutes);
    document.getElementById('seconds').innerText = padTime(seconds);
    document.getElementById('milliseconds').innerText = padTime(milliseconds);
}

function padTime(value) {
    return value < 10 ? '0' + value : value;
}

function pauseStopwatch() {
    clearInterval(timer);
}

function resetStopwatch() {
    clearInterval(timer);
    minutes = seconds = milliseconds = 0;
    displayTime();
    lapCounter = 1;
    document.getElementById('lapTimes').innerHTML = '';
}

function lap() {
    const lapTimesList = document.getElementById('lapTimes');
    const lapTimeItem = document.createElement('li');
    lapTimeItem.innerText = `Lap ${lapCounter++}: ${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds)}`;
    lapTimesList.appendChild(lapTimeItem);
}
