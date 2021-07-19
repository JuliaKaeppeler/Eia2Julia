"use strict";
// In Zusammenarbeit mit Karen Josten und Rebecca Räschke
var Soccer;
(function (Soccer) {
    class Moveable {
        constructor(_position, _fixPosition) {
            let x = 800 * Math.random();
            let y = 600 * Math.random();
            this.position = new Soccer.Vector(x, y);
        }
        //Kollision
        move(_timeslice) {
            this.position.add(this.velocity);
            // Kollision auf der x-Achse (horizontal)
            // Wenn die Position + 10 > 800 auf der x-Achse ist oder die Position - 5 < 0 auf der x-Achse,
            // dann soll die Geschwindigkeit auf -this.velocity.x gesetzt werden, 
            // da sonst die moveables aus dem Canvas gehen würde.
            if (this.position.x + 10 > 800 || this.position.x - 5 < 0) {
                this.velocity.x = -this.velocity.x;
            }
            // Kollision auf der y-Achse (vertical)
            // Wenn die Position + 10 > 600 auf der y-Achse ist oder die Position - 5 < 0 auf der y-Achse,
            // dann soll die Geschwindigkeit auf -this.velocity.y gesetzt werden, 
            // da sonst die moveables aus dem Canvas gehen würde.
            if (this.position.y + 10 > 600 || this.position.y - 5 < 0) {
                this.velocity.y = -this.velocity.y;
            }
        }
        draw() {
            // draw all moveables
        }
        moveToBall(_positionBall) {
            // moveToBall
        }
    }
    Soccer.Moveable = Moveable;
})(Soccer || (Soccer = {}));
//# sourceMappingURL=Moveable.js.map