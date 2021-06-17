namespace meadow {
    export interface VectorMain {
        x: number;
        y: number;
    }

    window.addEventListener ("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    export let goldenCut: number = 0.62;

    let flowers: Flower [] = [];
    let moveables: Moveable [] = [];
    //let tulips: Tulip[] = [];
    // let daisys: Daisy[] = [];
    // let roses: Rose[] = [];
    // let starFlowers: StarFlower[] = [];
    // let bees: Bee[] = [];
    // let clouds: Cloud[] = [];

    // HandleLoad-Funktion
    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
                return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        let horizon: number = crc2.canvas.height * goldenCut;
    
        drawBackground();
        drawSun({x: 100, y: 75}); // // {x: 100, y: 75} = Position der Sonne
        
        drawMountains({x: 0, y: horizon}, 75, 200, "grey", "white");
        drawMountains({x: 0, y: horizon}, 50, 150, "grey", "lightgrey");
        drawFirTree({x: 300, y: 600 * goldenCut});
        drawTree({x: 500, y: 600 * goldenCut});

        let background: ImageData = crc2.getImageData(0, 0, 1000, 600);
        
        createTulip(5);
        createDaisy(5);
        createRose(5);
        createStarflower(5);
        createCloud(1);
        createBee(7);
        window.setInterval(update, 20, background);
    }

    // Tannenbaum
    function drawFirTree(_position: VectorMain): void {
        for (let i: number = 0; i < 2; i ++) {
            let randomX: number = 300 * Math.random();

            crc2.save();
            crc2.beginPath();
            crc2.rect(_position.x + randomX, _position.y, 20, -70);
            crc2.fillStyle = "rgba(150, 101, 73, 1)";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(randomX + 250, 305);
            crc2.lineTo(randomX + 370, 305);
            crc2.lineTo(randomX + 310, 200);

            crc2.moveTo(randomX + 255, 250);
            crc2.lineTo(randomX + 365, 250);
            crc2.lineTo(randomX + 310, 155);
            crc2.fillStyle = "darkgreen";
            crc2.fill();
            crc2.restore();
            crc2.closePath();
        }  
    }

    // Baum
    function drawTree(_position: VectorMain): void {
        for (let i: number = 0; i < 2; i ++) {
            let randomX: number = 400 * Math.random();

            crc2.save();
            crc2.beginPath();
            crc2.rect(_position.x + randomX, _position.y, 20, -70);
            crc2.fillStyle = "rgba(150, 101, 73, 1)";
            crc2.fill();
            crc2.closePath();

            crc2.beginPath();
            crc2.arc(_position.x + randomX, _position.y - 100, 40, 0, 2 * Math.PI);
            crc2.arc(_position.x + randomX - 20, _position.y - 140, 40, 0, 2 * Math.PI);
            crc2.arc(_position.x + randomX + 15, _position.y - 150, 40, 0, 2 * Math.PI);
            crc2.arc(_position.x + randomX + 55, _position.y - 130, 30, 0, 2 * Math.PI);
            crc2.arc(_position.x + randomX + 35, _position.y - 100, 35, 0, 2 * Math.PI);
            crc2.fillStyle = "rgba(124, 184, 62, 1)";
            crc2.fill();
            crc2.restore();
            crc2.closePath();
        }
    }

    //Tulpe
    function createTulip(_nTulip: number): void { // Hauptprogramm greift auf Flower Klasse zu
        for (let i: number = 0; i < _nTulip; i ++) {
             let tulip: Tulip = new Tulip();
             flowers.push(tulip);
        }
    }

    //Gänseblümchen
    function createDaisy(_nFlower: number): void {
        for (let i: number = 0; i < _nFlower; i ++) {
            let daisy: Daisy = new Daisy();
            flowers.push(daisy);
        }
    }

    // Rose
    function createRose(_nFlower: number): void {
        for (let i: number = 0; i < _nFlower; i ++) {
            let rose: Rose = new Rose();
            flowers.push(rose);
        }
    }

    // StarFlower
    function createStarflower(_nFlower: number): void {
        for (let i: number = 0; i < _nFlower; i ++) {
            let starFlower: StarFlower = new StarFlower();
            flowers.push(starFlower);
        }
    }

    // Biene
    function createBee(_nBee: number): void {
        for (let i: number = 0; i < _nBee; i ++) {
            let bee: Bee = new Bee();
            moveables.push(bee);
        }
    }

    // Hintergrund
    function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height); // Verlauf von oben nach unten
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(goldenCut, "white");
        gradient.addColorStop(0.62, "rgba(219, 254, 186, 1)");
        gradient.addColorStop(1, "rgba(121, 174, 70, 1)"); // 1 = ganz unten von der Höhe
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        }

    // Sonne
    function drawSun(_position: VectorMain): void { // Sonne erwartet Position, die vom Typ Vector ist
        console.log("Sun", _position);

        let radius1: number = 30;
        let radius2: number = 150;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, radius1, 0, 0, radius2); // RadialGradient = Rund

        gradient. addColorStop(0, "rgba(255, 232, 139, 1)"); // Farbe
        gradient.addColorStop(1, "rgba(255, 232, 139, 0)"); // Komplette Transparenz der Farbe

        crc2.save(); // zwischenspeichern
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, radius2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore(); // zurück gehen
    }

    // Wolke     
    function createCloud(_nClouds: number): void {
            for (let i: number = 0; i < _nClouds; i ++) {
                let cloud: Cloud = new Cloud();
                moveables.push(cloud);
            }

    }

    // Berge
    function drawMountains(_position: VectorMain, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log("Mountains");
        let stepMin: number = 50;
        let stepMax: number = 150;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.6, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    }

    // Update-Funktion
    function update(_background: ImageData): void {
        console.log("updated");
        crc2.putImageData(_background, 0, 0);

        // for (let cloud of clouds) {
        //     cloud.move(1);
        //     cloud.drawCloud();
        // }

        for (let moveable of moveables) {
            moveable.draw();
            moveable.move(1);
        }

        for (let flower of flowers) {
            flower.fillNectar();
            flower.draw();
        }

        // for (let tulip of tulips) {
        //     tulip.fillNectar();
        //     tulip.drawTulip();
        // }

        // for (let daisy of daisys) {
        //     daisy.fillNectar();
        //     daisy.drawDaisy();
        // }

        // for (let rose of roses) {
        //     rose.fillNectar();
        //     rose.drawRose();
        // }

        // for (let starFlower of starFlowers) {
        //     starFlower.fillNectar();
        //     starFlower.drawStarFlower();

        // }

        // for (let bee of bees) {
        //     bee.move(1);
        //     bee.drawBee();
        // }
    }
}