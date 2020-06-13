import DarkMode from "./dark_mode.js";

export default class Events {
    constructor() { }

    static eventClick($btnDarkMode) {
        document.addEventListener("click", (e) => {
            if (
                e.target.matches($btnDarkMode) ||
                e.target.matches(`${$btnDarkMode} *`)
            ) {
                DarkMode.changeDark([
                    ".body",
                    ".container__clock",
                    $btnDarkMode,
                    ".clock__title",
                    ".clock__date",
                    ".clock__hour",
                    ".button-dark-mode__identifier"]
                );
            }
        });
    }
}
