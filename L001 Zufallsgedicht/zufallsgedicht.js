var Zufallsgedicht;
(function (Zufallsgedicht) {
    var subject = ["Snape", "Hermine", "Harry", "Ron", "Hagrid", "Dumbledore"];
    var praedikat = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstoert"];
    var object = ["Zaubertraenke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    // console.log(subject, praedikat, object);
    for (var i = 6; i > 0; i--) {
        // console.log(i);
        getVerse(subject, praedikat, object);
    }
    function getVerse(_subject, _praedikat, _object) {
        // console.log("Alohomora");
        var verse = "";
        var zufallSubject = Math.floor(_subject.length * Math.random());
        console.log(zufallSubject);
        var zufallPraedikat = Math.floor(_praedikat.length * Math.random());
        var zufallObject = Math.floor(_object.length * Math.random());
        verse = _subject.splice(zufallSubject, 1)[0] + " " + _praedikat.splice(zufallPraedikat, 1)[0] + " " + _object.splice(zufallObject, 1)[0];
        console.log(verse);
    }
})(Zufallsgedicht || (Zufallsgedicht = {}));
//# sourceMappingURL=zufallsgedicht.js.map