const INTERVAL_TIME = 1000;
const TEN_HOURS = 10;

let currentDate;
let currentTheme;

const setTheme = theme => {
    const body = document.querySelector('body');

    currentTheme = theme;

    body.className = currentTheme;
};

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

const setDate = newDate => {
    const clockDate = document.querySelector('.clock__date');

    currentDate = newDate;

    clockDate.innerHTML = '';

    clockDate.textContent = newDate;
};

const tick = () => {
    const newDate = new Date().toLocaleDateString('ru');
    const [hoursRuLocale] = new Date().toLocaleTimeString('ru').split(':');
    const isDay = +hoursRuLocale >= 6 && +hoursRuLocale < 18;
    const theme = isDay ? 'day' : 'night';

    setTime();

    if (currentDate !== newDate) {
        setDate(newDate);
    }

    if (currentTheme !== theme) {
        setTheme(theme);
    }
};

tick();

setInterval(tick, INTERVAL_TIME);
