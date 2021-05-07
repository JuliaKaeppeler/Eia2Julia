namespace randomCanvas {
    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener ("load", handleLoad);
    let crc2: CanvasRenderingContext2D;

        // handleLoad wird aufgerufen
        // crc2 (CanvasRenderingContext2D) deklarieren
        // Canvas wird eröffnet, damit in crc2 gearbeitet werden kann. (Macht man meistens so in der Art. Von hier..)
    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
                return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
    //(..bis hier)

    // andere Möglichkeit Canvas zu eröffnen (von Jirka)
    // function start(_event: Event): void {
        // let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas")!;
        // crc2 = canvas.getContext("2d")!; // neue Variante mit dem Ausrufezeichen       
        // console.log (crc2);
    // }


        // drawCircle wird aufgerufen -> Kreis (x Position = 50 und y Position = 90)
        drawCircle({x: 50, y: 90});
        // drawRectangle wird aufgerufen -> Rechteck (x Position = 300 und y Position = 150)
        drawRectangle({x: 300, y: 150});
        //drawText wird aufgerufen
        drawText({x: 10, y: 10});
        // drawTriangle wird aufgerufen -> Dreieck (x Position = 200 und y Position = 300)
        drawTriangle({x: 200, y: 300});
        // drawLines wird aufgerufen
        drawLines({x: 200, y: 300});
        // drawCurve wird aufgerufen
        drawCurve({x: 200, y: 300});
        // drawHeart wird aufgerufen
        drawHeart({x: 200, y: 300});
        //drawRect({x: 50, y: 50});
        //drawRectTwo({x: 50, y: 110});
        //drawCurveTwo();

    }

        // Funktion mit der Kreise gezeichnet werden
    function drawCircle(_position: Vector): void {
        // 1. Kreis (grün)
        crc2.beginPath();
        crc2.arc(_position.x + 300, _position.y, 30, 0, 2 * Math.PI );
        crc2.fillStyle = "green";
        crc2.fill();
        crc2.closePath();

        // 2. Kreis (rot)
        crc2.beginPath();
        crc2.arc(_position.x + 50, _position.y + 70, 10, 0, 2 * Math.PI );
        crc2.fillStyle = "red";
        crc2.fill();
        crc2.closePath();

        // 3. Kreis (gelb mit schwarzer Umrandung)
        crc2.beginPath();
        crc2.arc(_position.x + 100, _position.y + 60, 20, 0, 2 * Math.PI );
        crc2.fillStyle = "yellow";
        crc2.fill();
        crc2.strokeStyle = "black";
        crc2.stroke();
        crc2.closePath();

        // 4. Kreis (pink -> springt auf der x-Achse hin und her)
        crc2.beginPath();
        crc2.arc(_position.x + 150 * Math.random(), _position.y + 100, 20, 0, 2 * Math.PI ); // Math.random sucht eine Zahl zwischen 0 und 1. Mit Math.Random springt der Kreis auf eine neue Position, sobald die Seite neu geladen wird.
        crc2.fillStyle = "#ff0066";
        crc2.fill();
        crc2.closePath();

        // 5. Kreis (blau -> springt auf der x-Achse und y-Achse hin und her)
        crc2.beginPath();
        crc2.arc(_position.x + 500 * Math.random(), _position.y + 100 * Math.random(), 20, 0, 2 * Math.PI ); // Math.random sucht eine Zahl zwischen 0 und 1. Mit Math.Random springt der Kreis auf eine neue Position, sobald die Seite neu geladen wird.
        crc2.fillStyle = "blue";
        crc2.fill();
        crc2.closePath();

        // 6. Kreis (lila -> springt auf der x-Achse und y-Achse hin und her und verändert seine Größe bzw. den Radius)
        crc2.beginPath();
        crc2.arc(_position.x + 500 * Math.random(), _position.y + 100 * Math.random(), 40 * Math.random(), 0, 2 * Math.PI ); // Math.random sucht eine Zahl zwischen 0 und 1. Mit Math.Random springt der Kreis auf eine neue Position, sobald die Seite neu geladen wird. Außerdem verändert sich die Größe bzw. der Radius des Kreises.
                                                                                    // VON ZEILE OBERHALB: 0, 2 * Math.PI ); -> steht für einen geschlossen Kreis
        crc2.fillStyle = "rgb(204, 51, 255)";
        crc2.fill();
        crc2.closePath();

        // 7. Halbkreis (grau)
        crc2.beginPath();
        crc2.arc(_position.x + 150, _position.y + 100, 20, 50, Math.PI );
        crc2.fillStyle = "grey";
        crc2.fill();
        crc2.closePath();

        // 8. Viertelkreis oder Dreiviertelkreis (orange)
        crc2.beginPath();
        crc2.moveTo(50, 50);
        crc2.arc(50, 50, 50, 0, (Math.PI * 270) / 180, true); // Mit true und false wird bestimmt, ob der Vierteilkreis gegen den Uhrzeigersinn oder mit dem Uhrzeigersinn gefüllt oder geleert wird.
        crc2.fillStyle = "orange";
        crc2.fill();
        crc2.closePath();
    }
        // Funktion mit der Rechtecke gezeichnet werden
    function drawRectangle(_position: Vector): void {
        // 1. Rechteckt (rot mit schwarzer Umrandung)
        crc2.beginPath();
        crc2.rect(_position.x, _position.y, 100, 50);
        crc2.fillStyle = "red";
        crc2.fill();
        crc2.strokeStyle = "black";
        crc2.stroke();
        crc2.closePath();

        // 2. Rechteck (gelb -> springt auf der x-Achse und y-Achse hin und her)
        crc2.beginPath();
        crc2.rect(_position.x + 100 * Math.random(), _position.y + 100 * Math.random(), 300, 50);
        crc2.fillStyle = "yellow";
        crc2.fill();
        crc2.closePath();

        // 3. Rechteck (grün -> springt auf der x-Achse und y-Achse hin und her und verändert seine Höhe (50+100*Math.random()))
        crc2.beginPath();
        crc2.rect(_position.x + 100 * Math.random(), _position.y + 100 * Math.random(), 300, 50 + 100 * Math.random());
        crc2.fillStyle = "green";
        crc2.fill();
        crc2.closePath();

        // 4. Rechteck (rosa -> springt auf der x-Achse und y-Achse hin und her und verändert seine Höhe und Breite)
        crc2.beginPath();
        crc2.rect(_position.x + 100 * Math.random(), _position.y + 100 * Math.random(), 300 + 100 * Math.random(), 50 + 100 * Math.random());
        crc2.fillStyle = "pink";
        crc2.fill();
        crc2.closePath();

        // 5. Rechteck (Farbverlauf -> >Funktioniert, aber überdeckt 8. Viertelkreis oder Dreiviertelkreis (orange))
        //let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 100);
        //crc2.beginPath();
        //gradient.addColorStop(0, "black");
        //gradient.addColorStop(.5, "red");
        //gradient.addColorStop(1, "gold");
        //crc2.fillStyle = gradient;
        //crc2.fillRect(0, 0, 200, 100);
        //crc2.closePath();
    }
        // Texterstellung
    function drawText(_position: Vector): void {
        crc2.beginPath();
        crc2.font = "30px Arial";
        crc2.fillText("Test", 100, 130);
        crc2.closePath();
        crc2.strokeText("Test", 100, 130);
        crc2.closePath();
    }
        // Funktion mit der Dreiecke gezeichnet werden
    function drawTriangle(_position: Vector): void {
        crc2.beginPath();
        crc2.moveTo(10, 10);
        crc2.lineTo(10, 300);
        crc2.lineTo(310, 300);
        crc2.closePath();
        crc2.stroke();
    }
        // Funktion mit der ein Fünfeck durch Linien gezeichnet wird
    function drawLines(_position: Vector): void {
    crc2.beginPath();
    crc2.moveTo(50, 80);
    crc2.lineTo(50, 100);
    crc2.lineTo(150, 100);
    crc2.lineTo(200, 90);
    crc2.lineTo(150, 70);
    crc2.closePath();
    crc2.stroke();
    }

    function drawCurve(_position: Vector): void {
    crc2.beginPath();
    crc2.moveTo(50, 50);
    crc2.quadraticCurveTo(0, 200, 50, 100); // Die vorderen Beiden werte geben die Stärke (Winkel) der Kurve an, die hinteren geben Position (x,y) an.
    crc2.quadraticCurveTo(0, 20, 150, 100);
    crc2.lineTo(200, 90);
    crc2.lineTo(150, 70);
    crc2.closePath();
    crc2.stroke();
    }  

    function drawHeart(_position: Vector): void {
        crc2.beginPath();
        crc2.moveTo(75, 40);
        crc2.bezierCurveTo(75, 37, 70, 25, 50, 25);
        crc2.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
        crc2.bezierCurveTo(20, 80, 40, 102, 75, 120);
        crc2.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
        crc2.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
        crc2.bezierCurveTo(85, 25, 75, 37, 75, 40);
        crc2.fill();
        }

    //function drawRect(_position: Vector): void {
            //for (let i: number = 0; i < 500; i += 50) {
                //crc2.beginPath();
                //crc2.rect(_position.x + i, _position.y + i, 100, 200);
                //crc2.fillStyle = "red";
                //crc2.fill();
                //crc2.stroke();
                //crc2.closePath();  
            //}
            
        //}
    
    //function drawRectTwo(_position: Vector): void {
            //for (let i: number = 0; i < 10; i ++) {
                //crc2.beginPath();
                //crc2.rect(_position.x + i * 50, _position.y + i * 50, 100, 200);
                //crc2.fillStyle = "blue";
                //crc2.fill();
                //crc2.stroke();
                //crc2.closePath();  
            //}
        //}

    // function drawCurveTwo(): void {

            //for (let a: number = 0; a < 10; a ++) {
                //let xPosition: number = crc2.canvas.width * Math.random();
                //let yPosition: number = crc2.canvas.height * Math.random();
                //crc2.beginPath();
                //crc2.moveTo(175, 0);
                //crc2.quadraticCurveTo(xPosition, yPosition, 250, 70);
                //crc2.quadraticCurveTo(600, 400, 50, 600);
                //crc2.stroke();
            //}
        //}

}