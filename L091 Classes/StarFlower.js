var meadow;
(function (meadow) {
    var StarFlower = /** @class */ (function () {
        function StarFlower() {
            var x = 1000 * Math.random();
            var y = 150 * Math.random() + 620 * meadow.goldenCut;
            this.position = new meadow.Vector(x, y);
            // Geschwindigkeit und Richtung
            var a = -Math.random();
            var b = Math.random();
            this.velocity = new meadow.Vector(a, b);
        }
        StarFlower.prototype.move = function (_timeslice) {
            this.position.add(this.velocity);
            if (this.position.x < 0)
                this.position.x += meadow.crc2.canvas.width;
            if (this.position.y > 600)
                this.position.y -= 200;
        };
        StarFlower.prototype.drawStarFlower = function () {
            // for (let i: number = 0; i < 5; i ++) {
            //     let randomX: number = 900 * Math.random();
            //     let randomY: number = 150 * Math.random();
            //     this.position = new Vector(randomX, randomY);
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
            //Blüte
            meadow.crc2.beginPath();
            meadow.crc2.moveTo(this.position.x - 10, this.position.y + 20);
            meadow.crc2.lineTo(this.position.x + 0, this.position.y - 25);
            meadow.crc2.lineTo(this.position.x + 15, this.position.y + 15);
            meadow.crc2.lineTo(this.position.x - 25, this.position.y - 5);
            meadow.crc2.lineTo(this.position.x + 25, this.position.y - 15);
            meadow.crc2.lineTo(this.position.x - 10, this.position.y + 20);
            meadow.crc2.fillStyle = "rgba(255, 180, 62, 1)";
            meadow.crc2.fill();
            meadow.crc2.restore();
            meadow.crc2.closePath();
            // Mitte
            meadow.crc2.beginPath();
            meadow.crc2.save();
            meadow.crc2.arc(this.position.x, this.position.y, 5, 0, 2 * Math.PI);
            meadow.crc2.closePath();
            meadow.crc2.fillStyle = "pink";
            meadow.crc2.fill();
            meadow.crc2.restore();
            meadow.crc2.closePath();
            //}
        };
        return StarFlower;
    }());
    meadow.StarFlower = StarFlower;
})(meadow || (meadow = {}));
//# sourceMappingURL=StarFlower.js.map