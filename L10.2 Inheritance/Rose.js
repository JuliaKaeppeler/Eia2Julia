var meadow;
(function (meadow) {
    var Rose = /** @class */ (function () {
        function Rose() {
            var x = 1000 * Math.random();
            var y = 150 * Math.random() + 620 * meadow.goldenCut;
            this.position = new meadow.Vector(x, y);
            // Geschwindigkeit und Richtung
            var a = -Math.random();
            var b = Math.random();
            this.velocity = new meadow.Vector(a, b);
        }
        Rose.prototype.move = function (_timeslice) {
            this.position.add(this.velocity);
            if (this.position.x < 0)
                this.position.x += meadow.crc2.canvas.width;
            if (this.position.y > 600)
                this.position.y -= 200;
        };
        Rose.prototype.drawRose = function () {
            // for (let i: number = 0; i < 8; i ++) {
            //     let randomX: number = 900 * Math.random();
            //     let randomY: number = 150 * Math.random();
            //      this.position = new Vector(randomX, randomY);
            //Stiel
            meadow.crc2.beginPath();
            meadow.crc2.rect(this.position.x, this.position.y, 3, 60);
            meadow.crc2.fillStyle = "darkgreen";
            meadow.crc2.fill();
            meadow.crc2.closePath();
            //Stielblatt rechts
            meadow.crc2.beginPath();
            meadow.crc2.moveTo(this.position.x, this.position.y + 30);
            meadow.crc2.quadraticCurveTo(this.position.x + 15, this.position.y + 5, this.position.x + 0, this.position.y + 40);
            meadow.crc2.quadraticCurveTo(this.position.x - 15, this.position.y + 5, this.position.x + 4, this.position.y + 30);
            meadow.crc2.fillStyle = "darkgreen";
            meadow.crc2.fill();
            meadow.crc2.closePath();
            // Halbkreis
            meadow.crc2.beginPath();
            meadow.crc2.arc(this.position.x, this.position.y, 15, 0, Math.PI);
            meadow.crc2.fillStyle = "red";
            meadow.crc2.fill();
            meadow.crc2.closePath();
            //Blüte
            meadow.crc2.beginPath();
            meadow.crc2.moveTo(this.position.x + 15, this.position.y + 1);
            meadow.crc2.lineTo(this.position.x + 5, this.position.y - 15);
            meadow.crc2.lineTo(this.position.x + 0, this.position.y - 10);
            meadow.crc2.lineTo(this.position.x - 5, this.position.y - 15);
            meadow.crc2.lineTo(this.position.x - 15, this.position.y + 1);
            meadow.crc2.fillStyle = "red";
            meadow.crc2.fill();
            meadow.crc2.restore();
            meadow.crc2.closePath();
            //}
        };
        return Rose;
    }());
    meadow.Rose = Rose;
})(meadow || (meadow = {}));
//# sourceMappingURL=Rose.js.map