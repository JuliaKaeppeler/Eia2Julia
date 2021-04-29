namespace Aufgabe5 {
    let numberPairs: number;
    let cardContent: string [] = ["A,", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];
    let cardArray: HTMLElement [] = [];
    let cardOpen: number = 0;
    let cardsOpenArray: HTMLElement [] = [];
    let checkRest: HTMLElement [] = [];

    window.addEventListener("load", startGame);

    function startGame(): void {
        let startMemory: HTMLElement = <HTMLElement>document.querySelector(".button");
        startMemory.addEventListener("click", main);
    }

    function main(_event: Event): void {

        let fieldset: HTMLFormElement = <HTMLFormElement>document.querySelector(".formular");
        if (fieldset.classList.contains("visible")) {
            fieldset.classList.remove("visible");
            fieldset.classList.add("is-hidden");

        }
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
    
        //Anzahl Kartenpaare
        if (target.name == "stepper") {
            let pairOfCards: HTMLMeterElement = <HTMLMeterElement>document.querySelector(".stepper");
            numberPairs = pairOfCards.value;
        }

    }

}

