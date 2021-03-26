namespace Zufallsgedicht {
    let subject: string[] = ["Snape", "Hermine", "Harry", "Ron", "Hagrid", "Dumbledore"];
    let praedikat: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstoert"];
    let object: string[] = ["Zaubertraenke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];

    // console.log(subject, praedikat, object);

    for (let i: number = 6; i > 1; i--) {
       // console.log(i);
        getVerse(subject, praedikat, object);
    }

    function getVerse(_subject: string[], _praedikat: string[], _object: string[]): void {
        // console.log("Alohomora");
        let verse: string = "";
        
        let zufallSubject: number = Math.floor(_subject.length * Math.random());
        console.log(zufallSubject);
        
        let zufallPraedikat: number = Math.floor(_praedikat.length * Math.random());
        let zufallObject: number = Math.floor(_object.length * Math.random());
       
        verse = _subject.splice(zufallSubject, 1)[0] + " " + _praedikat.splice(zufallPraedikat, 1)[0] + " " + _object.splice(zufallObject, 1)[0];
        console.log(verse);
    }
}