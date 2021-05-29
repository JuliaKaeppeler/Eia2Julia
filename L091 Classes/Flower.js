var meadow;
(function (meadow) {
    var Flower = /** @class */ (function () {
        function Flower() {
            var x = 1000 * Math.random();
            var y = 150 * Math.random() + 620 * meadow.goldenCut;
            this.position = new meadow.Vector(x, y);
            this.velocity = new meadow.Vector(1, 0); // Geschwindigkeit und Richtung
        }
        Flower.prototype.move = function (_timeslice) {
            this.position.add(this.velocity);
            if (this.position.x > meadow.crc2.canvas.width)
                this.position.x -= meadow.crc2.canvas.width;
        };
        Flower.prototype.drawTulip = function () {
            // for (let i: number = 0; i < 10; i ++) {
            // let randomX: number = 900 * Math.random();
            // let randomY: number = 150 * Math.random();
            //this.position = new Vector(randomX, randomY);
            //Stiel
            meadow.crc2.beginPath();
            meadow.crc2.rect(this.position.x, this.position.y, 3, 60);
            meadow.crc2.fillStyle = "darkgreen";
            meadow.crc2.fill();
            meadow.crc2.closePath();
            //Stielblatt rechts
            meadow.crc2.beginPath();
            meadow.crc2.arc(this.position.x + -5, this.position.y + 30, 15, 20, 50, true);
            meadow.crc2.fillStyle = "darkgreen";
            meadow.crc2.fill();
            meadow.crc2.closePath();
            // Halbkreis
            meadow.crc2.beginPath();
            meadow.crc2.arc(this.position.x, this.position.y, 15, 0, Math.PI);
            meadow.crc2.fillStyle = "rgba(255, 62, 157, 1)";
            meadow.crc2.fill();
            meadow.crc2.closePath();
            //Blüten
            meadow.crc2.beginPath();
            meadow.crc2.moveTo(this.position.x + 15, this.position.y + 1);
            meadow.crc2.lineTo(this.position.x + 15, this.position.y - 15);
            meadow.crc2.lineTo(this.position.x + 1, this.position.y + 1);
            meadow.crc2.lineTo(this.position.x - 15, this.position.y - 15);
            meadow.crc2.lineTo(this.position.x - 15, this.position.y + 1);
            meadow.crc2.lineTo(this.position.x + 7.5, this.position.y + 1);
            meadow.crc2.lineTo(this.position.x + 1, this.position.y - 15);
            meadow.crc2.lineTo(this.position.x - 7.5, this.position.y + 1);
            meadow.crc2.fillStyle = "rgba(255, 62, 157, 1)";
            meadow.crc2.fill();
            meadow.crc2.restore();
            meadow.crc2.closePath();
            // }
        };
        return Flower;
    }());
    meadow.Flower = Flower;
})(meadow || (meadow = {}));
//# sourceMappingURL=Flower.js.map