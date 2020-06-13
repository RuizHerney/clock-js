export default class GetDateHour {
    constructor() {
        this.date = new Date();
    }

    getDocumentHour() {
        return this.date.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
        });
    }

    getDocumentDate() {
        return this.date.toLocaleString("es-CO", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    }
}
