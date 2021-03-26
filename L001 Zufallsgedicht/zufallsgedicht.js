var Zufallsgedicht;
(function (Zufallsgedicht) {
    var subject = ["Snape", "Hermine", "Harry", "Ron", "Hagrid", "Dumbledore"];
    var predicate = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstoert"];
    var object = ["Zaubertraenke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    // console.log(subject, praedikat, object);
    for (var i = 6; i > 1; i--) {
        // console.log(i);
        getVerse(subject, predicate, object);
    }
    function getVerse(_subject, _predicate, _object) {
        // console.log("Alohomora");
        var verse = "";
        var randomSubject = Math.floor(_subject.length * Math.random());
        console.log(randomSubject);
        var randomPredicate = Math.floor(_predicate.length * Math.random());
        var randomObject = Math.floor(_object.length * Math.random());
        verse = _subject.splice(randomSubject, 1)[0] + " " + _predicate.splice(randomPredicate, 1)[0] + " " + _object.splice(randomObject, 1)[0];
        console.log(verse);
    }
})(Zufallsgedicht || (Zufallsgedicht = {}));
//# sourceMappingURL=zufallsgedicht.js.map