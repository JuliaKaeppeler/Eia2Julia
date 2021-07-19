"use strict";
// In Zusammenarbeit mit Karen Josten und Rebecca Räschke
var Soccer;
(function (Soccer) {
    class Referee extends Soccer.Moveable {
        constructor(_position) {
            super(_position); // Übernimmt aus Superklasse
            let x = 800 * Math.random();
            let y = 500 * Math.random();
            let a = -Math.random(); // Velocity
            let b = 3 * Math.random(); // Velocity
            this.position = new Soccer.Vector(x, y);
            this.color = "red";
            if (_position)
                this.position = _position;
            else
                this.position = new Soccer.Vector(x, y);
            this.velocity = new Soccer.Vector(a, b);
        }
        draw() {
            Soccer.crc2.beginPath();
            Soccer.crc2.arc(this.position.x, this.position.y, 8, 0, 2 * Math.PI);
            Soccer.crc2.fillStyle = this.color;
            Soccer.crc2.fill();
            Soccer.crc2.closePath();
        }
        move(_timeslice) {
            this.position.add(this.velocity); // Geschwindigigkeit wird an die Position übergeben.
            // Kollision auf der x-Achse (horizontal)
            // Wenn die Position + 10 > 800 auf der x-Achse ist oder die Position - 5 < 0 auf der x-Achse,
            //, dann soll die Geschwindigkeit auf -this.velocity.x gesetzt werden, 
            // da sonst der Referee aus dem Canvas gehen würde.
            if (this.position.x + 10 > 800 || this.position.x - 5 < 0) {
                this.velocity.x = -this.velocity.x;
            }
            // Kollision auf der y-Achse (vertical)
            // Wenn die Position + 10 > 600 auf der y-Achse ist oder die Position - 5 < 0 auf der y-Achse,
            // dann soll die Geschwindigkeit auf -this.velocity.y gesetzt werden, 
            // da sonst der Referee aus dem Canvas gehen würde.
            if (this.position.y + 10 > 600 || this.position.y - 5 < 0) {
                this.velocity.y = -this.velocity.y;
            }
        }
    }
    Soccer.Referee = Referee;
})(Soccer || (Soccer = {}));
//# sourceMappingURL=Referee.js.map