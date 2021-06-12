var meadow;
(function (meadow) {
    var Daisy = /** @class */ (function () {
        function Daisy() {
            var x = 1000 * Math.random();
            var y = 150 * Math.random() + 620 * meadow.goldenCut;
            this.position = new meadow.Vector(x, y);
            this.velocity = new meadow.Vector(-1, 1); // Geschwindigkeit und Richtung
        }
        Daisy.prototype.move = function (_timeslice) {
            this.position.add(this.velocity);
            if (this.position.x < 0)
                this.position.x += meadow.crc2.canvas.width;
            if (this.position.y > 600)
                this.position.y -= 200;
        };
        Daisy.prototype.drawDaisy = function () {
            // for (let i: number = 0; i < 10; i ++) {
            //     let randomX: number = 800 * Math.random();
            //     let randomY: number = 150 * Math.random();
            //      this.position = new Vector(randomX, randomY);
            //Stiel
            meadow.crc2.beginPath();
            meadow.crc2.rect(this.position.x, this.position.y, 3, 60);
            meadow.crc2.fillStyle = "darkgreen";
            meadow.crc2.fill();
            meadow.crc2.closePath();
            //Stielblatt links
            meadow.crc2.beginPath();
            meadow.crc2.arc(this.position.x - 3, this.position.y + 30, 10, 45, Math.PI);
            meadow.crc2.fillStyle = "darkgreen";
            meadow.crc2.fill();
            meadow.crc2.closePath();
            //Blütenblätter
            meadow.crc2.beginPath();
            meadow.crc2.arc(this.position.x + 10, this.position.y, 15, 0, 2 * Math.PI);
            meadow.crc2.arc(this.position.x, this.position.y + 10, 15, 0, 2 * Math.PI);
            meadow.crc2.arc(this.position.x - 10, this.position.y, 15, 0, 2 * Math.PI);
            meadow.crc2.arc(this.position.x, this.position.y - 10, 15, 0, 2 * Math.PI);
            meadow.crc2.fillStyle = "white";
            meadow.crc2.fill();
            meadow.crc2.closePath();
            //Mitte
            meadow.crc2.beginPath();
            meadow.crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            meadow.crc2.fillStyle = "yellow";
            meadow.crc2.fill();
            meadow.crc2.closePath();
        };
        return Daisy;
    }());
    meadow.Daisy = Daisy;
})(meadow || (meadow = {}));
//# sourceMappingURL=Daisy.js.map