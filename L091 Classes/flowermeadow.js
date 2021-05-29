var meadow;
(function (meadow) {
    window.addEventListener("load", handleLoad);
    meadow.goldenCut = 0.62;
    var flowers = [];
    var daisys = [];
    var roses = [];
    var starFlowers = [];
    var bees = [];
    var clouds = [];
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
        drawTulip(10);
        drawDaisy(10);
        drawRose(10);
        drawStarflower(10);
        drawCloud(1);
        drawBee(10);
        window.setInterval(update, 20, background);
    }
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
    function drawTulip(_nFlower) {
        for (var i = 0; i < _nFlower; i++) {
            var flower = new meadow.Flower();
            flowers.push(flower);
            //     //Stiel
            //     crc2.beginPath();
            //     crc2.rect(_position.x + randomX, _position.y + randomY, 3, 60);
            //     crc2.fillStyle = "darkgreen";
            //     crc2.fill();
            //     crc2.closePath();
            //     //Stielblatt rechts
            //     crc2.beginPath();
            //     crc2.arc(_position.x + randomX + -5, _position.y + randomY + 30, 15, 20, 50, true);
            //     crc2.fillStyle = "darkgreen";
            //     crc2.fill();
            //     crc2.closePath();
            //     // Halbkreis
            //     crc2.beginPath();
            //     crc2.arc(_position.x + randomX, _position.y + randomY, 15, 0, Math.PI );
            //     crc2.fillStyle = "rgba(255, 62, 157, 1)";
            //     crc2.fill();
            //     crc2.closePath();
            //     //Blüten
            //     crc2.beginPath();
            //     crc2.moveTo(_position.x + randomX + 15, _position.y + randomY + 1);
            //     crc2.lineTo(_position.x + randomX + 15, _position.y + randomY - 15);
            //     crc2.lineTo(_position.x + randomX + 1, _position.y + randomY + 1);
            //     crc2.lineTo(_position.x + randomX - 15, _position.y + randomY - 15);
            //     crc2.lineTo(_position.x + randomX - 15, _position.y + randomY + 1);
            //     crc2.lineTo(_position.x + randomX + 7.5, _position.y + randomY + 1);
            //     crc2.lineTo(_position.x + randomX + 1, _position.y + randomY - 15);
            //     crc2.lineTo(_position.x + randomX - 7.5, _position.y + randomY + 1);
            //     crc2.fillStyle = "rgba(255, 62, 157, 1)";
            //     crc2.fill();
            //     crc2.restore();
            //     crc2.closePath();
        }
    }
    //Gänseblümchen
    function drawDaisy(_nFlower) {
        for (var i = 0; i < _nFlower; i++) {
            var flower = new meadow.Daisy();
            daisys.push(flower);
            // for (let i: number = 0; i < 10; i ++) {
            //     let randomX: number = 800 * Math.random();
            //     let randomY: number = 150 * Math.random();
            //     //Stiel
            //     crc2.beginPath();
            //     crc2.rect(_position.x + randomX, _position.y + randomY, 3, 60);
            //     crc2.fillStyle = "darkgreen";
            //     crc2.fill();
            //     crc2.closePath();
            //     //Stielblatt links
            //     crc2.beginPath();
            //     crc2.arc(_position.x + randomX - 3, _position.y + randomY + 30, 10, 45, Math.PI );
            //     crc2.fillStyle = "darkgreen";
            //     crc2.fill();
            //     crc2.closePath();
            //     //Blütenblätter
            //     crc2.beginPath();
            //     crc2.arc(_position.x + randomX + 10, _position.y + randomY, 15, 0, 2 * Math.PI);
            //     crc2.arc(_position.x + randomX, _position.y + randomY + 10, 15, 0, 2 * Math.PI);
            //     crc2.arc(_position.x  + randomX - 10, _position.y + randomY, 15, 0, 2 * Math.PI);
            //     crc2.arc(_position.x + randomX, _position.y + randomY - 10, 15, 0, 2 * Math.PI);
            //     crc2.fillStyle = "white";
            //     crc2.fill();
            //     crc2.closePath();
            //     //Mitte
            //     crc2.beginPath();
            //     crc2.arc(_position.x + randomX, _position.y + randomY, 10, 0, 2 * Math.PI);
            //     crc2.fillStyle = "yellow";
            //     crc2.fill();
            //     crc2.closePath();
        }
    }
    function drawRose(_nFlower) {
        for (var i = 0; i < _nFlower; i++) {
            var flower = new meadow.Rose();
            roses.push(flower);
            //     //Stiel
            //     crc2.beginPath();
            //     crc2.rect(_position.x + randomX, _position.y + randomY, 3, 60);
            //     crc2.fillStyle = "darkgreen";
            //     crc2.fill();
            //     crc2.closePath();
            //     //Stielblatt rechts
            //     crc2.beginPath();
            //     crc2.moveTo(_position.x + randomX, _position.y + randomY + 30);
            //     crc2.quadraticCurveTo(_position.x + randomX + 15, _position.y + randomY + 5, _position.x + randomX + 0, _position.y + randomY + 40);
            //     crc2.quadraticCurveTo(_position.x + randomX - 15, _position.y + randomY + 5, _position.x + randomX + 4, _position.y + randomY + 30);
            //     crc2.fillStyle = "darkgreen";
            //     crc2.fill();
            //     crc2.closePath();
            //     // Halbkreis
            //     crc2.beginPath();
            //     crc2.arc(_position.x + randomX, _position.y + randomY, 15, 0, Math.PI );
            //     crc2.fillStyle = "red";
            //     crc2.fill();
            //     crc2.closePath();
            //     //Blüte
            //     crc2.beginPath();
            //     crc2.moveTo(_position.x + randomX + 15, _position.y + randomY + 1);
            //     crc2.lineTo(_position.x + randomX + 5, _position.y + randomY - 15);
            //     crc2.lineTo(_position.x + randomX + 0, _position.y + randomY - 10);
            //     crc2.lineTo(_position.x + randomX - 5, _position.y + randomY - 15);
            //     crc2.lineTo(_position.x + randomX - 15, _position.y + randomY + 1);
            //     crc2.fillStyle = "red";
            //     crc2.fill();
            //     crc2.restore();
            //     crc2.closePath();
        }
    }
    function drawStarflower(_nFlower) {
        for (var i = 0; i < _nFlower; i++) {
            var flower = new meadow.StarFlower();
            starFlowers.push(flower);
            // for (let i: number = 0; i < 5; i ++) {
            //     let randomX: number = 900 * Math.random();
            //     let randomY: number = 150 * Math.random();
            //     //Stiel
            //     crc2.beginPath();
            //     crc2.rect(_position.x + randomX, _position.y + randomY, 3, 60);
            //     crc2.fillStyle = "darkgreen";
            //     crc2.fill();
            //     crc2.closePath();
            //     //Stielblatt rechts
            //     crc2.beginPath();
            //     crc2.arc(_position.x + randomX + -5, _position.y + randomY + 30, 15, 20, 50, true);
            //     crc2.fillStyle = "darkgreen";
            //     crc2.fill();
            //     crc2.closePath();
            //     //Blüte
            //     crc2.beginPath();
            //     crc2.moveTo(_position.x + randomX - 10, _position.y + randomY + 20);
            //     crc2.lineTo(_position.x + randomX + 0, _position.y + randomY - 25);
            //     crc2.lineTo(_position.x + randomX + 15, _position.y + randomY + 15);
            //     crc2.lineTo(_position.x + randomX - 25, _position.y + randomY - 5);
            //     crc2.lineTo(_position.x + randomX + 25, _position.y + randomY - 15);
            //     crc2.lineTo(_position.x + randomX - 10, _position.y + randomY + 20);
            //     crc2.fillStyle = "rgba(255, 180, 62, 1)";
            //     crc2.fill();
            //     crc2.restore();
            //     crc2.closePath();
            //     // Mitte
            //     crc2.beginPath();
            //     crc2.save();
            //     crc2.arc(_position.x + randomX, _position.y + randomY, 5, 0, 2 * Math.PI);
            //     crc2.closePath();
            //     crc2.fillStyle = "pink";
            //     crc2.fill();
            //     crc2.restore();
            //     crc2.closePath();
        }
    }
    function drawBee(_nBee) {
        for (var i = 0; i < _nBee; i++) {
            var bee = new meadow.Bee();
            bees.push(bee);
        }
        // // Flügel
        // crc2.beginPath();
        // // links
        // crc2.moveTo(_position.x + 20, _position.y - 10);
        // crc2.bezierCurveTo(_position.x + 20, _position.y - 10 - 15, _position.x + 20 + 5, _position.y - 10 - 15, _position.x + 20 + 5, _position.y - 10);
        // // rechts
        // crc2.moveTo(_position.x + 20 + 5, _position.y - 10);
        // crc2.bezierCurveTo(_position.x + 20 + 10, _position.y - 10 - 15, _position.x + 20 + 15, _position.y - 10 - 15, _position.x + 20 + 10, _position.y);
        // crc2.fillStyle = "grey";
        // crc2.fill();
        // crc2.restore();
        // crc2.closePath();
        // // Stachel
        // crc2.beginPath();
        // crc2.moveTo(_position.x + 2, _position.y);
        // crc2.lineTo(_position.x + 45, _position.y);
        // crc2.stroke();
        // crc2.restore();
        // crc2.closePath();
        // // Körper
        // crc2.beginPath();
        // crc2.moveTo(_position.x, _position.y);
        // crc2.bezierCurveTo(_position.x + 5, _position.y - 20, _position.x + 35, _position.y - 15, _position.x + 40, _position.y);
        // crc2.moveTo(_position.x, _position.y);
        // crc2.bezierCurveTo(_position.x + 5, _position.y + 20, _position.x + 35, _position.y + 15, _position.x + 40, _position.y);
        // crc2.fillStyle = "yellow";
        // crc2.fill();
        // crc2.restore();
        // crc2.closePath();
        // // Fühler
        // crc2.beginPath();
        // crc2.moveTo(_position.x + 10, _position.y - 10);
        // crc2.bezierCurveTo(_position.x + 10, _position.y - 20, _position.x, _position.y - 15, _position.x + 5, _position.y - 15);
        // crc2.moveTo(_position.x + 10 + 8, _position.y - 8);
        // crc2.bezierCurveTo(_position.x + 10 + 8, _position.y - 20 - 8, _position.x + 10, _position.y - 15, _position.x + 5 + 10, _position.y - 15);
        // crc2.stroke();
        // crc2.restore();
        // crc2.closePath();
        // // Augen
        // crc2.beginPath();
        // crc2.save();
        // // links
        // crc2.arc(_position.x + 7, _position.y - 5, 1, 0, 2 * Math.PI);
        // // rechts
        // crc2.arc(_position.x + 12, _position.y - 4, 1, 0, 2 * Math.PI);
        // crc2.closePath();
        // crc2.fillStyle = "black";
        // crc2.fill();
        // crc2.restore();
        // crc2.closePath();
        // // Mund
        // crc2.beginPath();
        // crc2.moveTo(_position.x + 5, _position.y);
        // crc2.bezierCurveTo(_position.x + 6, _position.y + 5, _position.x + 8, _position.y + 5, _position.x + 10, _position.y);
        // crc2.stroke();
        // crc2.restore();
        // crc2.closePath();
    }
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
    function drawCloud(_nClouds) {
        for (var i = 0; i < _nClouds; i++) {
            var cloud = new meadow.Cloud();
            clouds.push(cloud);
        }
    }
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
    function update(_background) {
        console.log("updated");
        meadow.crc2.putImageData(_background, 0, 0);
        for (var _i = 0, clouds_1 = clouds; _i < clouds_1.length; _i++) {
            var cloud = clouds_1[_i];
            cloud.move(1);
            cloud.drawCloud();
        }
        for (var _a = 0, flowers_1 = flowers; _a < flowers_1.length; _a++) {
            var flower = flowers_1[_a];
            flower.move(1);
            flower.drawTulip();
        }
        for (var _b = 0, daisys_1 = daisys; _b < daisys_1.length; _b++) {
            var daisy = daisys_1[_b];
            daisy.move(1);
            daisy.drawDaisy();
        }
        for (var _c = 0, roses_1 = roses; _c < roses_1.length; _c++) {
            var rose = roses_1[_c];
            rose.move(1);
            rose.drawRose();
        }
        for (var _d = 0, starFlowers_1 = starFlowers; _d < starFlowers_1.length; _d++) {
            var starFlower = starFlowers_1[_d];
            starFlower.move(1);
            starFlower.drawStarFlower();
        }
        for (var _e = 0, bees_1 = bees; _e < bees_1.length; _e++) {
            var bee = bees_1[_e];
            bee.move(1);
            bee.drawBee();
        }
    }
})(meadow || (meadow = {}));
//# sourceMappingURL=flowermeadow.js.map