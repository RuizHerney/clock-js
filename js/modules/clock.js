export default class Clock {
    constructor() { }

    static SetHourDocument($hourElement, hour) {
        document.getElementById($hourElement).textContent = hour;
    }

    static setDateDocument($dateElement, date) {
        document.getElementById($dateElement).textContent = date;
    }
}
