"use strict";
var Soccer;
(function (Soccer) {
    class Ball extends Soccer.Moveable {
        constructor(_position) {
            super(_position);
            this.goal1 = 0;
            this.goal2 = 0;
            let x = 400;
            let y = 300;
            let a = -Math.random(); // Velocity
            let b = 3 * Math.random(); // Velocity
            this.position = new Soccer.Vector(x, y);
            this.color = "black";
            this.target = new Soccer.Vector(this.position.x, this.position.y);
            let c = 400;
            let d = 300;
            this.startPosition = new Soccer.Vector(c, d);
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
            //gate first Team, left
            let posLeftX = 0 - this.position.x; //Differenz berechnen von Ball posx und player posx
            let posLeftY = 300 - this.position.y; //Differenz berechnen von Ball posy und player posy
            let radiusLeft = Math.hypot(posLeftY, posLeftX);
            //gate secondTeam, right
            let posRightX = 800 - this.position.x; //Differenz berechnen von Ball posx und player posx
            let posRightY = 300 - this.position.y; //Differenz berechnen von Ball posy und player posy
            let radiusRight = Math.hypot(posRightX, posRightY);
            let differenceVector = Soccer.Vector.getDifference(this.target, this.position); // weil Static
            this.velocity = new Soccer.Vector(differenceVector.x / 10, differenceVector.y / 10);
            if (differenceVector.length <= 10) {
                this.velocity.x = 0;
                this.velocity.y = 0;
            }
            this.position.add(this.velocity);
            if (radiusLeft <= 50) { //wenn Radius kleiner gleich 50
                this.goalLeft = document.querySelector("#goalTeam2");
                this.goal1++;
                this.goalLeft.innerHTML = this.goal1 + "";
                Soccer.activityPlayer = Soccer.Activity.BREAK_GAME;
                this.position.set(this.startPosition.x, this.startPosition.y);
                this.target.set(this.startPosition.x, this.startPosition.y);
            }
            if (radiusRight <= 50) {
                this.goalRight = document.querySelector("#goalTeam1");
                this.goal2++;
                this.goalRight.innerHTML = this.goal2 + "";
                Soccer.activityPlayer = Soccer.Activity.BREAK_GAME;
                this.position.set(this.startPosition.x, this.startPosition.y);
                this.target.set(this.startPosition.x, this.startPosition.y);
            }
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