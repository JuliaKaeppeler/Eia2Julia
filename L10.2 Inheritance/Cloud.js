var meadow;
(function (meadow) {
    var Cloud = /** @class */ (function () {
        function Cloud() {
            var x = 1000 * Math.random();
            var y = 50;
            this.position = new meadow.Vector(x, y);
            this.size = 50;
            // Geschwindigkeit und Richtung
            var a = -Math.random();
            this.velocity = new meadow.Vector(a, 0);
        }
        Cloud.prototype.move = function (_timeslice) {
            this.position.add(this.velocity);
            if (this.position.x + this.size > 1000 || this.position.x - this.size < 0) {
                this.velocity.x = -this.velocity.x;
            }
            // if (this.position.y + this.size > 600 || this.position.y - this.size < 0) {
            //     this.velocity.y = -this.velocity.y;
            // }
        };
        Cloud.prototype.drawCloud = function () {
            meadow.crc2.fillStyle = "white";
            meadow.crc2.beginPath();
            meadow.crc2.arc(this.position.x + 50, this.position.y, this.size, 0, 2 * Math.PI);
            meadow.crc2.fill();
            meadow.crc2.closePath();
            meadow.crc2.beginPath();
            meadow.crc2.arc(this.position.x, this.position.y + 50, this.size, 0, 2 * Math.PI);
            meadow.crc2.fill();
            meadow.crc2.closePath();
            meadow.crc2.beginPath();
            meadow.crc2.arc(this.position.x + 130, this.position.y, this.size, 0, 2 * Math.PI);
            meadow.crc2.fill();
            meadow.crc2.closePath();
            meadow.crc2.beginPath();
            meadow.crc2.arc(this.position.x + 210, this.position.y + 50, this.size, 0, 2 * Math.PI);
            meadow.crc2.fill();
            meadow.crc2.closePath();
            meadow.crc2.beginPath();
            meadow.crc2.arc(this.position.x + 150, this.position.y + 80, this.size, 0, 2 * Math.PI);
            meadow.crc2.fill();
            meadow.crc2.closePath();
            meadow.crc2.beginPath();
            meadow.crc2.arc(this.position.x + 80, this.position.y + 80, this.size, 0, 2 * Math.PI);
            meadow.crc2.fill();
            meadow.crc2.closePath();
        };
        return Cloud;
    }());
    meadow.Cloud = Cloud;
})(meadow || (meadow = {}));
//# sourceMappingURL=Cloud.js.map