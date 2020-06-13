export default class DarkMode {
    constructor() { }

    static changeDark(listClass) {
        listClass.forEach((e) => {
            document.querySelector(e).classList.toggle(`${e}--dark`.substr(1));
        });
    }
}
