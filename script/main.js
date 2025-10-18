const INTERVAL_TIME = 1000;
const TEN_HOURS = 10;

let currentDateStorage = '';

const setTime = () => {
    const newTime = new Date().toLocaleTimeString();
    const [time, amPm] = newTime.split(' ');
    const [hours, mins, secs] = time.split(':');
    const resultTime = `${+hours < TEN_HOURS ? '0' : ''}${hours}:${mins}:${secs}`;
    const clockTime = document.querySelector('.clock__time');
    const timeElement = document.createElement('span');
    const amPmElement = document.createElement('span');

    clockTime.innerHTML = '';

    timeElement.textContent = resultTime;
    amPmElement.textContent = amPm;

    clockTime.append(timeElement);
    clockTime.append(amPmElement);
};

const setDate = () => {
    const newDate = new Date().toLocaleDateString('ru');
    const clockDate = document.querySelector('.clock__date');

    currentDateStorage = newDate;

    clockDate.innerHTML = '';

    clockDate.textContent = newDate;
};

const tick = () => {
    setTime();

    if (currentDateStorage !== new Date().toLocaleDateString('ru')) {
        setDate();
    }
};

tick();

setInterval(tick, INTERVAL_TIME);
