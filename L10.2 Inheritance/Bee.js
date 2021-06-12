var meadow;
(function (meadow) {
    var Bee = /** @class */ (function () {
        function Bee() {
            var x = 1000 * Math.random();
            var y = 600 * Math.random();
            this.position = new meadow.Vector(x, y);
            this.size = 50;
            // Geschwindigkeit und Richtung
            var a = -Math.random();
            var b = Math.random();
            this.velocity = new meadow.Vector(a, b);
        }
        Bee.prototype.move = function (_timeslice) {
            this.position.add(this.velocity);
            if (this.position.x + this.size > 1000 || this.position.x - this.size < 0) {
                this.velocity.x = -this.velocity.x;
            }
            if (this.position.y + this.size > 600 || this.position.y - this.size < 0) {
                this.velocity.y = -this.velocity.y;
            }
            // if (this.position.x < 0)
            //     this.position.x += crc2.canvas.width;
        };
        Bee.prototype.drawBee = function () {
            // Flügel
            meadow.crc2.beginPath();
            // links
            meadow.crc2.moveTo(this.position.x + 20, this.position.y - 10);
            meadow.crc2.bezierCurveTo(this.position.x + 20, this.position.y - 10 - 15, this.position.x + 20 + 5, this.position.y - 10 - 15, this.position.x + 20 + 5, this.position.y - 10);
            // rechts
            meadow.crc2.moveTo(this.position.x + 20 + 5, this.position.y - 10);
            meadow.crc2.bezierCurveTo(this.position.x + 20 + 10, this.position.y - 10 - 15, this.position.x + 20 + 15, this.position.y - 10 - 15, this.position.x + 20 + 10, this.position.y);
            meadow.crc2.fillStyle = "grey";
            meadow.crc2.fill();
            meadow.crc2.restore();
            meadow.crc2.closePath();
            // Stachel
            meadow.crc2.beginPath();
            meadow.crc2.moveTo(this.position.x + 2, this.position.y);
            meadow.crc2.lineTo(this.position.x + 45, this.position.y);
            meadow.crc2.stroke();
            meadow.crc2.restore();
            meadow.crc2.closePath();
            // Körper
            meadow.crc2.beginPath();
            meadow.crc2.moveTo(this.position.x, this.position.y);
            meadow.crc2.bezierCurveTo(this.position.x + 5, this.position.y - 20, this.position.x + 35, this.position.y - 15, this.position.x + 40, this.position.y);
            meadow.crc2.moveTo(this.position.x, this.position.y);
            meadow.crc2.bezierCurveTo(this.position.x + 5, this.position.y + 20, this.position.x + 35, this.position.y + 15, this.position.x + 40, this.position.y);
            meadow.crc2.fillStyle = "yellow";
            meadow.crc2.fill();
            meadow.crc2.restore();
            meadow.crc2.closePath();
            // Fühler
            meadow.crc2.beginPath();
            meadow.crc2.moveTo(this.position.x + 10, this.position.y - 10);
            meadow.crc2.bezierCurveTo(this.position.x + 10, this.position.y - 20, this.position.x, this.position.y - 15, this.position.x + 5, this.position.y - 15);
            meadow.crc2.moveTo(this.position.x + 10 + 8, this.position.y - 8);
            meadow.crc2.bezierCurveTo(this.position.x + 10 + 8, this.position.y - 20 - 8, this.position.x + 10, this.position.y - 15, this.position.x + 5 + 10, this.position.y - 15);
            meadow.crc2.stroke();
            meadow.crc2.restore();
            meadow.crc2.closePath();
            // Augen
            meadow.crc2.beginPath();
            meadow.crc2.save();
            // links
            meadow.crc2.arc(this.position.x + 7, this.position.y - 5, 1, 0, 2 * Math.PI);
            // rechts
            meadow.crc2.arc(this.position.x + 12, this.position.y - 4, 1, 0, 2 * Math.PI);
            meadow.crc2.closePath();
            meadow.crc2.fillStyle = "black";
            meadow.crc2.fill();
            meadow.crc2.restore();
            meadow.crc2.closePath();
            // Mund
            meadow.crc2.beginPath();
            meadow.crc2.moveTo(this.position.x + 5, this.position.y);
            meadow.crc2.bezierCurveTo(this.position.x + 6, this.position.y + 5, this.position.x + 8, this.position.y + 5, this.position.x + 10, this.position.y);
            meadow.crc2.stroke();
            meadow.crc2.restore();
            meadow.crc2.closePath();
        };
        return Bee;
    }());
    meadow.Bee = Bee;
})(meadow || (meadow = {}));
//# sourceMappingURL=Bee.js.map