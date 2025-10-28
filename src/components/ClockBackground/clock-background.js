export class ClockBackground {
    constructor(currentBackgroundColor) {
        this.currentBackgroundColor = currentBackgroundColor;

        this.setBackground();
    }

    setBackground() {
        const body = document.querySelector('body');

        body.style = `background-color: ${this.currentBackgroundColor}`;
    }
}
