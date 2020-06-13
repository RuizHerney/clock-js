import GetDateHour from "./modules/get_date_hour.js";
import Clock from "./modules/clock.js";

function setElementDocument() {
    const get_date_hour = new GetDateHour();
    Clock.SetHourDocument("clock_hour", get_date_hour.getDocumentHour());
    Clock.setDateDocument("clock_date", get_date_hour.getDocumentDate())
}

document.addEventListener("DOMContentLoaded", () => {
    setElementDocument();

    setInterval(() => {
        setElementDocument();
    }, 4000);

});
