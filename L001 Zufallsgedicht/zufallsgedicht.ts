namespace Zufallsgedicht {
    let subject: string[] = ["Snape", "Hermine", "Harry", "Ron", "Hagrid", "Dumbledore"];
    let predicate: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstoert"];
    let object: string[] = ["Zaubertraenke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];

    // console.log(subject, praedikat, object);

    for (let i: number = 6; i > 1; i--) {
       // console.log(i);
        getVerse(subject, predicate, object);
    }

    function getVerse(_subject: string[], _predicate: string[], _object: string[]): void {
        // console.log("Alohomora");
        let verse: string = "";
        
        let randomSubject: number = Math.floor(_subject.length * Math.random());
        console.log(randomSubject);
        
        let randomPredicate: number = Math.floor(_predicate.length * Math.random());
        let randomObject: number = Math.floor(_object.length * Math.random());
       
        verse = _subject.splice(randomSubject, 1)[0] + " " + _predicate.splice(randomPredicate, 1)[0] + " " + _object.splice(randomObject, 1)[0];
        console.log(verse);
    }
}