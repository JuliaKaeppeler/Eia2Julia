var Aufgabe5;
(function (Aufgabe5) {
    var numberPairs;
    var cardContent = ["A,", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];
    var cardArray = [];
    var cardOpen = 0;
    var cardsOpenArray = [];
    var checkRest = [];
    window.addEventListener("load", startGame);
    function startGame() {
        var startMemory = document.querySelector(".button");
        startMemory.addEventListener("click", main);
    }
    function main(_event) {
        var fieldset = document.querySelector(".formular");
        if (fieldset.classList.contains("visible")) {
            fieldset.classList.remove("visible");
            fieldset.classList.add("is-hidden");
        }
        var target = _event.target;
        //Anzahl Kartenpaare
        if (target.name == "stepper") {
            var pairOfCards = document.querySelector(".stepper");
            numberPairs = pairOfCards.value;
        }
    }
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=memory.js.map