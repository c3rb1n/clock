export class ClockTime {
    constructor(time, amPm) {
        this.time = time;
        this.amPm = amPm;

        this.setTime();
    }

    setTime() {
        const clockTime = document.querySelector('.clock__time');
        const timeElement = document.createElement('span');
        const amPmElement = document.createElement('span');

        clockTime.innerHTML = '';

        timeElement.textContent = this.time;
        amPmElement.textContent = this.amPm;

        clockTime.append(timeElement);
        clockTime.append(amPmElement);
    }
}
