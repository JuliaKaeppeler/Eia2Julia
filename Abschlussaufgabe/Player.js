"use strict";
// In Zusammenarbeit mit Karen Josten und Rebecca Räschke
var Soccer;
(function (Soccer) {
    class Player extends Soccer.Moveable {
        constructor(_team, _colorTeam1, _colorTeam2, _precision, _jerseyNumber, _position, _velocity, _fixPosition) {
            super(_position, _fixPosition);
            let x = 800 * Math.random();
            let y = 580;
            let a = -Math.random(); // Velocity
            let b = 2 * Math.random(); // Velocity
            this.position = new Soccer.Vector(x, y);
            this.fixPosition = new Soccer.Vector(x, y);
            if (_position)
                this.position = _position;
            else
                this.position = new Soccer.Vector(x, y);
            this.velocity = new Soccer.Vector(a, b);
        }
        draw() {
            // Team 1
            Soccer.crc2.beginPath();
            Soccer.crc2.arc(this.position.x, this.position.y, 8, 0, 2 * Math.PI);
            Soccer.crc2.fillStyle = this.colorTeam1;
            Soccer.crc2.fill();
            Soccer.crc2.strokeText(this.jerseyNum, this.position.x, this.position.y + 4, 8);
            Soccer.crc2.strokeStyle = "black";
            Soccer.crc2.textAlign = "center";
            Soccer.crc2.stroke();
            Soccer.crc2.closePath();
            // Team 2
            Soccer.crc2.beginPath();
            Soccer.crc2.arc(this.position.x, this.position.y, 8, 0, 2 * Math.PI);
            Soccer.crc2.fillStyle = this.colorTeam2;
            Soccer.crc2.fill();
            Soccer.crc2.strokeText(this.jerseyNum, this.position.x, this.position.y + 4, 8);
            Soccer.crc2.strokeStyle = "black";
            Soccer.crc2.stroke();
            Soccer.crc2.closePath();
        }
        moveToBall(_positionBall) {
            let positionBall = _positionBall;
            //Abstand Ball und Spieler D=(P2-P1)
            let xPos = positionBall.x - this.position.x;
            let yPos = positionBall.y - this.position.y;
            let xDefaultPos = this.fixPosition.x;
            let yDefaultPos = this.fixPosition.y;
            let radius = Math.hypot(yPos, xPos);
            if (radius <= 130) {
                let position = new Soccer.Vector(xPos, yPos);
                position.scale(this.velocityPlayer / radius);
                this.position.add(position);
                if (radius <= 5) {
                    this.onBallPlayer = document.querySelector("#onBall");
                    this.onBallPlayer.innerHTML = this.jerseyNum;
                    Soccer.activityPlayer = Soccer.Activity.BREAK_GAME;
                }
            }
            if (radius > 130) {
                this.position.set(xDefaultPos, yDefaultPos);
            }
        }
    }
    Soccer.Player = Player;
})(Soccer || (Soccer = {}));
//# sourceMappingURL=Player.js.map