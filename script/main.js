const INTERVAL_TIME = 1000;
const MORNING_EVENING_TIME = 8;
const MIDDAY_MIDNIGHT = 12;
const TEN_HOURS = 10;

const backgrounds = [
    '#000000',
    '#050505',
    '#101010',
    '#181818',
    '#252525',
    '#333333',
    '#424242',
    '#5F5F5F',
    '#777777',
    '#959595',
    '#ACACAC',
    '#CECECE',
    '#FFFFFF'
];

let currentDate;
let currentHours;
let currentAmPm;
let currentTheme;

const setBackgroundColor = body => {
    const backgroundIdex = currentHours === MIDDAY_MIDNIGHT ? 0 : currentHours;
    const currentBackgroundColor = (currentAmPm === 'AM' ? backgrounds : backgrounds.toReversed())[backgroundIdex];

    body.style = `background-color: ${currentBackgroundColor}`;
};

const setTheme = body => {
    body.className = currentTheme;
};

const setTime = (hours, mins, secs) => {
    const resultTime = `${+hours < TEN_HOURS ? '0' : ''}${hours}:${mins}:${secs}`;
    const clockTime = document.querySelector('.clock__time');
    const timeElement = document.createElement('span');
    const amPmElement = document.createElement('span');

    clockTime.innerHTML = '';

    timeElement.textContent = resultTime;
    amPmElement.textContent = currentAmPm;

    clockTime.append(timeElement);
    clockTime.append(amPmElement);
};

const setDate = newDate => {
    const clockDate = document.querySelector('.clock__date');

    clockDate.innerHTML = '';

    clockDate.textContent = newDate;
};

const tick = () => {
    const body = document.querySelector('body');
    const newDate = new Date().toLocaleDateString('ru');
    const newTime = new Date().toLocaleTimeString();
    const [time, amPm] = newTime.split(' ');
    const [hours, mins, secs] = time.split(':');
    const isMorning = amPm === 'AM' && +hours >= MORNING_EVENING_TIME;
    const isEvening = amPm === 'PM' && +hours >= MORNING_EVENING_TIME;
    const isDay = isMorning && !isEvening;
    const theme = isDay ? 'day' : 'night';

    currentAmPm = amPm;

    setTime(hours, mins, secs);

    if (currentHours !== +hours) {
        currentHours = +hours;

        setBackgroundColor(body);
    }

    if (currentDate !== newDate) {
        currentDate = newDate;

        setDate(newDate);
    }

    if (currentTheme !== theme) {
        currentTheme = theme;

        setTheme(body);
    }
};

tick();

setInterval(tick, INTERVAL_TIME);
