"use strict";
// In Zusammenarbeit mit Karen Josten und Rebecca Räschke
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
            //Tor links - Team 1
            let posLeftX = 0 - this.position.x; //Berechnung: Abstand zwischen Tor links und Ball auf der x-Achse
            let posLeftY = 300 - this.position.y; //Berechnung: Abstand zwischen Tor links und Ball auf der y-Achse
            let radiusLeft = Math.hypot(posLeftY, posLeftX); //Berechnung: Radius mit Math.hypot, damit das Programm jede x- und y-Stelle kennt.
            //Tor rechts - Team 2
            let posRightX = 800 - this.position.x; //Berechnung: Abstand zwischen Tor rechts und Ball auf der x-Achse
            let posRightY = 300 - this.position.y; //Berechnung: Abstand zwischen Tor links und Ball auf der y-Achse
            let radiusRight = Math.hypot(posRightX, posRightY); //Berechnung: Radius mit Math.hypot, damit das Programm jede x- und y-Stelle kennt.
            // Geschwindigkeit
            let differenceVector = Soccer.Vector.getDifference(this.target, this.position); // Berechnung: Abstand bzw. Vector zwischen Ziel (target: Click von Nutzer) und Position vom Ball
            this.velocity = new Soccer.Vector(differenceVector.x / 10, differenceVector.y / 10); // Berechnung: Geschwindigkeit vom Ball: Der Abstand zwischen Ziel und Position vom Ball wird jeweils (x, y) durch 10 geteilt, damit der Ball langsamer wird.
            if (differenceVector.length <= 10) { // wenn der Abstand zwischen Ziel und Position vom Ball (also die Länge des Vectors) <= 10 ist, dann stoppt der Ball.
                this.velocity.x = 0; // Geschwindigkeit (x) also auf 0
                this.velocity.y = 0; // Geschwindigkeit (y) also auf 0
            }
            this.position.add(this.velocity); //Geschwindigkeit an Position
            // Tor links
            // Wenn der Radius (Abstand Tor links und Ball) <= 50 ist, wird ein Tor dazugerechnet und das Spiel stoppt.
            // Daraufhin wird der Ball auf die Startposition zurück gesetzt.
            if (radiusLeft <= 50) {
                this.goalLeft = document.querySelector("#goalTeam2"); // HTMLElement mit id="goalTeam2"
                this.goal1++; // Tor dazu rechnen mit ++
                this.goalLeft.innerHTML = this.goal1 + ""; //Wird mit innerHTML übergeben und auf der Webseite angezeigt
                Soccer.activityPlayer = Soccer.Activity.BREAK_GAME;
                this.position.set(this.startPosition.x, this.startPosition.y);
                this.target.set(this.startPosition.x, this.startPosition.y);
            }
            // gleiches git für Tor rechts, wenn radiusRight <= 50
            if (radiusRight <= 50) {
                this.goalRight = document.querySelector("#goalTeam1");
                this.goal2++;
                this.goalRight.innerHTML = this.goal2 + "";
                Soccer.activityPlayer = Soccer.Activity.BREAK_GAME;
                this.position.set(this.startPosition.x, this.startPosition.y);
                this.target.set(this.startPosition.x, this.startPosition.y);
            }
        }
    }
    Soccer.Ball = Ball;
})(Soccer || (Soccer = {}));
//# sourceMappingURL=Ball.js.map