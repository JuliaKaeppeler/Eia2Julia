var meadow;
(function (meadow) {
    window.addEventListener("load", handleLoad);
    meadow.goldenCut = 0.62;
    var flowers = [];
    var moveables = [];
    //let tulips: Tulip[] = [];
    // let daisys: Daisy[] = [];
    // let roses: Rose[] = [];
    // let starFlowers: StarFlower[] = [];
    // let bees: Bee[] = [];
    // let clouds: Cloud[] = [];
    // HandleLoad-Funktion
    function handleLoad(_event) {
        var canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        meadow.crc2 = canvas.getContext("2d");
        var horizon = meadow.crc2.canvas.height * meadow.goldenCut;
        drawBackground();
        drawSun({ x: 100, y: 75 }); // // {x: 100, y: 75} = Position der Sonne
        drawMountains({ x: 0, y: horizon }, 75, 200, "grey", "white");
        drawMountains({ x: 0, y: horizon }, 50, 150, "grey", "lightgrey");
        drawFirTree({ x: 300, y: 600 * meadow.goldenCut });
        drawTree({ x: 500, y: 600 * meadow.goldenCut });
        var background = meadow.crc2.getImageData(0, 0, 1000, 600);
        createTulip(5);
        createDaisy(5);
        createRose(5);
        createStarflower(5);
        createCloud(1);
        createBee(7);
        window.setInterval(update, 20, background);
    }
    // Tannenbaum
    function drawFirTree(_position) {
        for (var i = 0; i < 2; i++) {
            var randomX = 300 * Math.random();
            meadow.crc2.save();
            meadow.crc2.beginPath();
            meadow.crc2.rect(_position.x + randomX, _position.y, 20, -70);
            meadow.crc2.fillStyle = "rgba(150, 101, 73, 1)";
            meadow.crc2.fill();
            meadow.crc2.closePath();
            meadow.crc2.beginPath();
            meadow.crc2.moveTo(randomX + 250, 305);
            meadow.crc2.lineTo(randomX + 370, 305);
            meadow.crc2.lineTo(randomX + 310, 200);
            meadow.crc2.moveTo(randomX + 255, 250);
            meadow.crc2.lineTo(randomX + 365, 250);
            meadow.crc2.lineTo(randomX + 310, 155);
            meadow.crc2.fillStyle = "darkgreen";
            meadow.crc2.fill();
            meadow.crc2.restore();
            meadow.crc2.closePath();
        }
    }
    // Baum
    function drawTree(_position) {
        for (var i = 0; i < 2; i++) {
            var randomX = 400 * Math.random();
            meadow.crc2.save();
            meadow.crc2.beginPath();
            meadow.crc2.rect(_position.x + randomX, _position.y, 20, -70);
            meadow.crc2.fillStyle = "rgba(150, 101, 73, 1)";
            meadow.crc2.fill();
            meadow.crc2.closePath();
            meadow.crc2.beginPath();
            meadow.crc2.arc(_position.x + randomX, _position.y - 100, 40, 0, 2 * Math.PI);
            meadow.crc2.arc(_position.x + randomX - 20, _position.y - 140, 40, 0, 2 * Math.PI);
            meadow.crc2.arc(_position.x + randomX + 15, _position.y - 150, 40, 0, 2 * Math.PI);
            meadow.crc2.arc(_position.x + randomX + 55, _position.y - 130, 30, 0, 2 * Math.PI);
            meadow.crc2.arc(_position.x + randomX + 35, _position.y - 100, 35, 0, 2 * Math.PI);
            meadow.crc2.fillStyle = "rgba(124, 184, 62, 1)";
            meadow.crc2.fill();
            meadow.crc2.restore();
            meadow.crc2.closePath();
        }
    }
    //Tulpe
    function createTulip(_nTulip) {
        for (var i = 0; i < _nTulip; i++) {
            var tulip = new meadow.Tulip();
            flowers.push(tulip);
        }
    }
    //Gänseblümchen
    function createDaisy(_nFlower) {
        for (var i = 0; i < _nFlower; i++) {
            var daisy = new meadow.Daisy();
            flowers.push(daisy);
        }
    }
    // Rose
    function createRose(_nFlower) {
        for (var i = 0; i < _nFlower; i++) {
            var rose = new meadow.Rose();
            flowers.push(rose);
        }
    }
    // StarFlower
    function createStarflower(_nFlower) {
        for (var i = 0; i < _nFlower; i++) {
            var starFlower = new meadow.StarFlower();
            flowers.push(starFlower);
        }
    }
    // Biene
    function createBee(_nBee) {
        for (var i = 0; i < _nBee; i++) {
            var bee = new meadow.Bee();
            moveables.push(bee);
        }
    }
    // Hintergrund
    function drawBackground() {
        console.log("Background");
        var gradient = meadow.crc2.createLinearGradient(0, 0, 0, meadow.crc2.canvas.height); // Verlauf von oben nach unten
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(meadow.goldenCut, "white");
        gradient.addColorStop(0.62, "rgba(219, 254, 186, 1)");
        gradient.addColorStop(1, "rgba(121, 174, 70, 1)"); // 1 = ganz unten von der Höhe
        meadow.crc2.fillStyle = gradient;
        meadow.crc2.fillRect(0, 0, meadow.crc2.canvas.width, meadow.crc2.canvas.height);
    }
    // Sonne
    function drawSun(_position) {
        console.log("Sun", _position);
        var radius1 = 30;
        var radius2 = 150;
        var gradient = meadow.crc2.createRadialGradient(0, 0, radius1, 0, 0, radius2); // RadialGradient = Rund
        gradient.addColorStop(0, "rgba(255, 232, 139, 1)"); // Farbe
        gradient.addColorStop(1, "rgba(255, 232, 139, 0)"); // Komplette Transparenz der Farbe
        meadow.crc2.save(); // zwischenspeichern
        meadow.crc2.translate(_position.x, _position.y);
        meadow.crc2.fillStyle = gradient;
        meadow.crc2.arc(0, 0, radius2, 0, 2 * Math.PI);
        meadow.crc2.fill();
        meadow.crc2.restore(); // zurück gehen
    }
    // Wolke     
    function createCloud(_nClouds) {
        for (var i = 0; i < _nClouds; i++) {
            var cloud = new meadow.Cloud();
            moveables.push(cloud);
        }
    }
    // Berge
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains");
        var stepMin = 50;
        var stepMax = 150;
        var x = 0;
        meadow.crc2.save();
        meadow.crc2.translate(_position.x, _position.y);
        meadow.crc2.beginPath();
        meadow.crc2.moveTo(0, 0);
        meadow.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            var y = -_min - Math.random() * (_max - _min);
            meadow.crc2.lineTo(x, y);
        } while (x < meadow.crc2.canvas.width);
        meadow.crc2.lineTo(x, 0);
        meadow.crc2.closePath();
        var gradient = meadow.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.6, _colorHigh);
        meadow.crc2.fillStyle = gradient;
        meadow.crc2.fill();
        meadow.crc2.restore();
    }
    // Update-Funktion
    function update(_background) {
        console.log("updated");
        meadow.crc2.putImageData(_background, 0, 0);
        // for (let cloud of clouds) {
        //     cloud.move(1);
        //     cloud.drawCloud();
        // }
        for (var _i = 0, moveables_1 = moveables; _i < moveables_1.length; _i++) {
            var moveable = moveables_1[_i];
            moveable.draw();
            moveable.move(1);
        }
        for (var _a = 0, flowers_1 = flowers; _a < flowers_1.length; _a++) {
            var flower = flowers_1[_a];
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
})(meadow || (meadow = {}));
//# sourceMappingURL=flowermeadow.js.map