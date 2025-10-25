export class ClockDate {
    constructor(date) {
        this.date = date;

        this.createEl();
    }

    createEl() {
        const clockDate = document.querySelector('.clock__date');

        clockDate.textContent = '';
        clockDate.textContent = this.date;
    }
}
