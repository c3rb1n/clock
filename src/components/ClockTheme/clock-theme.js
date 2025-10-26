export class ClockTheme {
    constructor(currentTheme) {
        this.currentTheme = currentTheme;

        this.setTheme();
    }

    setTheme() {
        const body = document.querySelector('body');

        body.className = this.currentTheme;
    }
}
