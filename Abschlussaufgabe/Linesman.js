"use strict";
//In Zusammenarbeit mit Karen Josten und Rebecca Räschke
var Soccer;
(function (Soccer) {
    class Linesman extends Soccer.Moveable {
        constructor(_position) {
            super(_position);
            let x = 800 * Math.random();
            let y = 580;
            let a = -Math.random(); // Velocity
            let b = 0; // Velocity
            this.position = new Soccer.Vector(x, y);
            this.color = "yellow";
            if (_position)
                this.position = _position;
            else
                this.position = new Soccer.Vector(x, y);
            this.velocity = new Soccer.Vector(a, b);
        }
        // Linesman wird gezeichnet
        draw() {
            Soccer.crc2.beginPath();
            Soccer.crc2.arc(this.position.x, this.position.y, 8, 0, 2 * Math.PI);
            Soccer.crc2.fillStyle = this.color;
            Soccer.crc2.fill();
            Soccer.crc2.closePath();
        }
        move(_timeslice) {
            this.position.add(this.velocity); // Geschwindigigkeit wird an die Position übergeben. 
            // Kollision auf der x-Achse
            // Wenn die Position + 10 > 800 ist oder die Position - 5 < 0, dann soll die Geschwindigkeit auf -this.velocity.x gesetzt werden, 
            // da sonst der Linesman aus dem Canvas gehen würde.
            if (this.position.x + 10 > 800 || this.position.x - 5 < 0) {
                this.velocity.x = -this.velocity.x;
            }
        }
    }
    Soccer.Linesman = Linesman;
})(Soccer || (Soccer = {}));
//# sourceMappingURL=Linesman.js.map