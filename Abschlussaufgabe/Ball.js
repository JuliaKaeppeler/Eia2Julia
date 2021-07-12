"use strict";
var Soccer;
(function (Soccer) {
    class Ball extends Soccer.Moveable {
        constructor(_position) {
            super(_position);
            let x = 800 * Math.random();
            let y = 500 * Math.random();
            let a = -Math.random(); // Velocity
            let b = 3 * Math.random(); // Velocity
            this.position = new Soccer.Vector(x, y);
            this.color = "black";
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
    }
    Soccer.Ball = Ball;
})(Soccer || (Soccer = {}));
//# sourceMappingURL=Ball.js.map