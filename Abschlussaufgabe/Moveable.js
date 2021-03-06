"use strict";
var Soccer;
(function (Soccer) {
    class Moveable {
        constructor(_position) {
            //Velocity?
            let x = 800 * Math.random();
            let y = 600 * Math.random();
            this.position = new Soccer.Vector(x, y);
        }
        move(_timeslice) {
            this.position.add(this.velocity);
            //mit Kollision
            if (this.position.x + 10 > 800 || this.position.x - 5 < 0) {
                this.velocity.x = -this.velocity.x;
            }
            if (this.position.y + 10 > 600 || this.position.y - 5 < 0) {
                this.velocity.y = -this.velocity.y;
            }
        }
        draw() {
            // Test
        }
    }
    Soccer.Moveable = Moveable;
})(Soccer || (Soccer = {}));
//# sourceMappingURL=Moveable.js.map