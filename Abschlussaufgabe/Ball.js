"use strict";
var Soccer;
(function (Soccer) {
    class Ball extends Soccer.Moveable {
        constructor(_position) {
            super(_position);
            let x = 200;
            let y = 205;
            let a = -Math.random(); // Velocity
            let b = 3 * Math.random(); // Velocity
            this.position = new Soccer.Vector(x, y);
            this.color = "black";
            this.target = new Soccer.Vector(this.position.x, this.position.y);
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
            let differenceVector = Soccer.Vector.getDifference(this.target, this.position); // weil Static
            this.velocity = new Soccer.Vector(differenceVector.x / 10, differenceVector.y / 10);
            if (differenceVector.length <= 10) {
                this.velocity.x = 0;
                this.velocity.y = 0;
            }
            this.position.add(this.velocity);
            //mit Kollision
            if (this.position.x + 10 > 800 || this.position.x - 5 < 0) {
                this.velocity.x = -this.velocity.x;
            }
            if (this.position.y + 10 > 600 || this.position.y - 5 < 0) {
                this.velocity.y = -this.velocity.y;
            }
        }
    }
    Soccer.Ball = Ball;
})(Soccer || (Soccer = {}));
//# sourceMappingURL=Ball.js.map