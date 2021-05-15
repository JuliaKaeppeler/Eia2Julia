var flowermeadow;
(function (flowermeadow) {
    window.addEventListener("load", handleLoad);
    var crc2;
    var goldenCut = 0.62;
    function handleLoad(_event) {
        var canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        var horizon = crc2.canvas.height * goldenCut;
        drawBackground();
        drawSun({ x: 100, y: 75 }); // // {x: 100, y: 75} = Position der Sonne
        drawCloud({ x: 500, y: 125 }, { x: 250, y: 75 }); // {x: 500, y:125} = Position der Wolke {x: 250, y: 75} = Größe der Wolke
        drawMountains({ x: 0, y: horizon }, 75, 200, "grey", "white");
        drawMountains({ x: 0, y: horizon }, 50, 150, "grey", "lightgrey");
        drawFirTree({ x: 300, y: 600 * goldenCut });
        drawTree({ x: 500, y: 600 * goldenCut });
        drawTulip({ x: 0, y: 400 });
        drawDaisy({ x: 0, y: 400 });
        drawRose({ x: 0, y: 400 });
        drawStarflower({ x: 0, y: 400 });
        drawBee({ x: 750, y: 300 });
    }
    function drawFirTree(_position) {
        for (var i = 0; i < 2; i++) {
            var randomX = 300 * Math.random();
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
    function drawTree(_position) {
        for (var i = 0; i < 2; i++) {
            var randomX = 400 * Math.random();
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
    function drawTulip(_position) {
        for (var i = 0; i < 10; i++) {
            var randomX = 900 * Math.random();
            var randomY = 150 * Math.random();
            //Stiel
            crc2.beginPath();
            crc2.rect(_position.x + randomX, _position.y + randomY, 3, 60);
            crc2.fillStyle = "darkgreen";
            crc2.fill();
            crc2.closePath();
            //Stielblatt rechts
            crc2.beginPath();
            crc2.arc(_position.x + randomX + -5, _position.y + randomY + 30, 15, 20, 50, true);
            crc2.fillStyle = "darkgreen";
            crc2.fill();
            crc2.closePath();
            // Halbkreis
            crc2.beginPath();
            crc2.arc(_position.x + randomX, _position.y + randomY, 15, 0, Math.PI);
            crc2.fillStyle = "rgba(255, 62, 157, 1)";
            crc2.fill();
            crc2.closePath();
            //Blüten
            crc2.beginPath();
            crc2.moveTo(_position.x + randomX + 15, _position.y + randomY + 1);
            crc2.lineTo(_position.x + randomX + 15, _position.y + randomY - 15);
            crc2.lineTo(_position.x + randomX + 1, _position.y + randomY + 1);
            crc2.lineTo(_position.x + randomX - 15, _position.y + randomY - 15);
            crc2.lineTo(_position.x + randomX - 15, _position.y + randomY + 1);
            crc2.lineTo(_position.x + randomX + 7.5, _position.y + randomY + 1);
            crc2.lineTo(_position.x + randomX + 1, _position.y + randomY - 15);
            crc2.lineTo(_position.x + randomX - 7.5, _position.y + randomY + 1);
            crc2.fillStyle = "rgba(255, 62, 157, 1)";
            crc2.fill();
            crc2.restore();
            crc2.closePath();
        }
    }
    //Gänseblümchen
    function drawDaisy(_position) {
        for (var i = 0; i < 10; i++) {
            var randomX = 800 * Math.random();
            var randomY = 150 * Math.random();
            //Stiel
            crc2.beginPath();
            crc2.rect(_position.x + randomX, _position.y + randomY, 3, 60);
            crc2.fillStyle = "darkgreen";
            crc2.fill();
            crc2.closePath();
            //Stielblatt links
            crc2.beginPath();
            crc2.arc(_position.x + randomX - 3, _position.y + randomY + 30, 10, 45, Math.PI);
            crc2.fillStyle = "darkgreen";
            crc2.fill();
            crc2.closePath();
            //Blütenblätter
            crc2.beginPath();
            crc2.arc(_position.x + randomX + 10, _position.y + randomY, 15, 0, 2 * Math.PI);
            crc2.arc(_position.x + randomX, _position.y + randomY + 10, 15, 0, 2 * Math.PI);
            crc2.arc(_position.x + randomX - 10, _position.y + randomY, 15, 0, 2 * Math.PI);
            crc2.arc(_position.x + randomX, _position.y + randomY - 10, 15, 0, 2 * Math.PI);
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.closePath();
            //Mitte
            crc2.beginPath();
            crc2.arc(_position.x + randomX, _position.y + randomY, 10, 0, 2 * Math.PI);
            crc2.fillStyle = "yellow";
            crc2.fill();
            crc2.closePath();
        }
    }
    function drawRose(_position) {
        for (var i = 0; i < 8; i++) {
            var randomX = 900 * Math.random();
            var randomY = 150 * Math.random();
            //Stiel
            crc2.beginPath();
            crc2.rect(_position.x + randomX, _position.y + randomY, 3, 60);
            crc2.fillStyle = "darkgreen";
            crc2.fill();
            crc2.closePath();
            //Stielblatt rechts
            crc2.beginPath();
            crc2.moveTo(_position.x + randomX, _position.y + randomY + 30);
            crc2.quadraticCurveTo(_position.x + randomX + 15, _position.y + randomY + 5, _position.x + randomX + 0, _position.y + randomY + 40);
            crc2.quadraticCurveTo(_position.x + randomX - 15, _position.y + randomY + 5, _position.x + randomX + 4, _position.y + randomY + 30);
            crc2.fillStyle = "darkgreen";
            crc2.fill();
            crc2.closePath();
            // Halbkreis
            crc2.beginPath();
            crc2.arc(_position.x + randomX, _position.y + randomY, 15, 0, Math.PI);
            crc2.fillStyle = "red";
            crc2.fill();
            crc2.closePath();
            //Blüte
            crc2.beginPath();
            crc2.moveTo(_position.x + randomX + 15, _position.y + randomY + 1);
            crc2.lineTo(_position.x + randomX + 5, _position.y + randomY - 15);
            crc2.lineTo(_position.x + randomX + 0, _position.y + randomY - 10);
            crc2.lineTo(_position.x + randomX - 5, _position.y + randomY - 15);
            crc2.lineTo(_position.x + randomX - 15, _position.y + randomY + 1);
            crc2.fillStyle = "red";
            crc2.fill();
            crc2.restore();
            crc2.closePath();
        }
    }
    function drawStarflower(_position) {
        for (var i = 0; i < 5; i++) {
            var randomX = 900 * Math.random();
            var randomY = 150 * Math.random();
            //Stiel
            crc2.beginPath();
            crc2.rect(_position.x + randomX, _position.y + randomY, 3, 60);
            crc2.fillStyle = "darkgreen";
            crc2.fill();
            crc2.closePath();
            //Stielblatt rechts
            crc2.beginPath();
            crc2.arc(_position.x + randomX + -5, _position.y + randomY + 30, 15, 20, 50, true);
            crc2.fillStyle = "darkgreen";
            crc2.fill();
            crc2.closePath();
            //Blüte
            crc2.beginPath();
            crc2.moveTo(_position.x + randomX - 10, _position.y + randomY + 20);
            crc2.lineTo(_position.x + randomX + 0, _position.y + randomY - 25);
            crc2.lineTo(_position.x + randomX + 15, _position.y + randomY + 15);
            crc2.lineTo(_position.x + randomX - 25, _position.y + randomY - 5);
            crc2.lineTo(_position.x + randomX + 25, _position.y + randomY - 15);
            crc2.lineTo(_position.x + randomX - 10, _position.y + randomY + 20);
            crc2.fillStyle = "rgba(255, 180, 62, 1)";
            crc2.fill();
            crc2.restore();
            crc2.closePath();
            // Mitte
            crc2.beginPath();
            crc2.save();
            crc2.arc(_position.x + randomX, _position.y + randomY, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "pink";
            crc2.fill();
            crc2.restore();
            crc2.closePath();
        }
    }
    function drawBee(_position) {
        // Flügel
        crc2.beginPath();
        // links
        crc2.moveTo(_position.x + 20, _position.y - 10);
        crc2.bezierCurveTo(_position.x + 20, _position.y - 10 - 15, _position.x + 20 + 5, _position.y - 10 - 15, _position.x + 20 + 5, _position.y - 10);
        // rechts
        crc2.moveTo(_position.x + 20 + 5, _position.y - 10);
        crc2.bezierCurveTo(_position.x + 20 + 10, _position.y - 10 - 15, _position.x + 20 + 15, _position.y - 10 - 15, _position.x + 20 + 10, _position.y);
        crc2.fillStyle = "grey";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        // Stachel
        crc2.beginPath();
        crc2.moveTo(_position.x + 2, _position.y);
        crc2.lineTo(_position.x + 45, _position.y);
        crc2.stroke();
        crc2.restore();
        crc2.closePath();
        // Körper
        crc2.beginPath();
        crc2.moveTo(_position.x, _position.y);
        crc2.bezierCurveTo(_position.x + 5, _position.y - 20, _position.x + 35, _position.y - 15, _position.x + 40, _position.y);
        crc2.moveTo(_position.x, _position.y);
        crc2.bezierCurveTo(_position.x + 5, _position.y + 20, _position.x + 35, _position.y + 15, _position.x + 40, _position.y);
        crc2.fillStyle = "yellow";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        // Fühler
        crc2.beginPath();
        crc2.moveTo(_position.x + 10, _position.y - 10);
        crc2.bezierCurveTo(_position.x + 10, _position.y - 20, _position.x, _position.y - 15, _position.x + 5, _position.y - 15);
        crc2.moveTo(_position.x + 10 + 8, _position.y - 8);
        crc2.bezierCurveTo(_position.x + 10 + 8, _position.y - 20 - 8, _position.x + 10, _position.y - 15, _position.x + 5 + 10, _position.y - 15);
        crc2.stroke();
        crc2.restore();
        crc2.closePath();
        // Augen
        crc2.beginPath();
        crc2.save();
        // links
        crc2.arc(_position.x + 7, _position.y - 5, 1, 0, 2 * Math.PI);
        // rechts
        crc2.arc(_position.x + 12, _position.y - 4, 1, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        // Mund
        crc2.beginPath();
        crc2.moveTo(_position.x + 5, _position.y);
        crc2.bezierCurveTo(_position.x + 6, _position.y + 5, _position.x + 8, _position.y + 5, _position.x + 10, _position.y);
        crc2.stroke();
        crc2.restore();
        crc2.closePath();
    }
    function drawBackground() {
        console.log("Background");
        var gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height); // Verlauf von oben nach unten
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(goldenCut, "white");
        gradient.addColorStop(0.62, "rgba(219, 254, 186, 1)");
        gradient.addColorStop(1, "rgba(121, 174, 70, 1)"); // 1 = ganz unten von der Höhe
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawSun(_position) {
        console.log("Sun", _position);
        var radius1 = 30;
        var radius2 = 150;
        var gradient = crc2.createRadialGradient(0, 0, radius1, 0, 0, radius2); // RadialGradient = Rund
        gradient.addColorStop(0, "rgba(255, 232, 139, 1)"); // Farbe
        gradient.addColorStop(1, "rgba(255, 232, 139, 0)"); // Komplette Transparenz der Farbe
        crc2.save(); // zwischenspeichern
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, radius2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore(); // zurück gehen
    }
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        //Wolke baut sich aus mehreren Kreisen zusammen
        var nParticles = 90;
        var radiusParticle = 35;
        var particle = new Path2D();
        var gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI); // Bogen um 0, 0 mit dem Radius: radiusParticle und vom Winkel 0 bis 2*PI
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)"); //Wir wollen den Kreis in weiß haben, aber entsprechend Transparent. 
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)"); //Wir wollen den Kreis in weiß haben, aber entsprechend Transparent. 
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (var drawn = 0; drawn < nParticles; drawn++) {
            crc2.save(); // Ich muss save und restore für jeden Particel machen, damit die einzelnen Particles nicht nach oben verflüchtigen
            var x = (Math.random() - 0.5) * _size.x; // x soll eine number sein und ist gleich ein Zufallswert zwischen 0 und 1. Da ziehe ich 0.5 ab, dann habe ich einen Wert zwischen -0.5 und +0.5. Wichtig ist Klammern wegen Punkt vor Strich. Undd dann multipliziere ich das mit der Größe.
            var y = -(Math.random() * _size.y); //Zufallszahl zwischen 0 und 1 und das kann ich mit der Ausdehnung der Vertikalen multipliziern. Aber ich brauche den negativen Wert deswegen - (Math.Random()..)
            crc2.translate(x, y);
            crc2.fill(particle); // Mein Pfad soll zum zeichnen genutzt werden
            crc2.restore();
        }
        crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains");
        var stepMin = 50;
        var stepMax = 150;
        var x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            var y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        var gradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.6, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
})(flowermeadow || (flowermeadow = {}));
//# sourceMappingURL=flowermeadow.js.map