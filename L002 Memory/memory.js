var Aufgabe02;
(function (Aufgabe02) {
    var infolist = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    function inputPairs() {
        var pairs = prompt("Wie viele Kartenpaare (min. 5 & max. 25)");
        var pairSum = parseInt(pairs);
        if (isNaN(pairSum) || pairSum < 5 || pairSum > 25) {
            alert("mindestens 5 & maximal 25!");
            inputPairs();
        }
        else {
            console.log("inputPairs");
            console.log(pairSum);
            return pairSum;
        }
    }
    var amount = inputPairs();
    console.log("Länge Infolist", infolist.length);
    console.log("Content Infolist", infolist);
})(Aufgabe02 || (Aufgabe02 = {}));
//# sourceMappingURL=memory.js.map