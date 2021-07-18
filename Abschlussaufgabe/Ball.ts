namespace Soccer {

    export class Ball extends Moveable {
        public target: Vector;
        public goalLeft: HTMLElement;
        public goalRight: HTMLElement;
        public goal1: number = 0;
        public goal2: number = 0;
        protected color: string;
        protected velocity: Vector;
        private startPosition: Vector;
        

        constructor(_position?: Vector) {
            super(_position);
            let x: number = 400;
            let y: number = 300;
            let a: number = - Math.random(); // Velocity
            let b: number = 3 * Math.random(); // Velocity
            this.position = new Vector(x, y);
            this.color = "black";
            this.target = new Vector(this.position.x, this.position.y);
            let c: number = 400;
            let d: number = 300;
            this.startPosition = new Vector(c, d);

            if (_position)
                this.position = _position;
            else
                this.position = new Vector(x, y);
            this.velocity = new Vector(a, b);
        }

        public draw(): void {
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 8, 0, 2 * Math.PI);
            crc2.fillStyle = this.color;
            crc2.fill();
            crc2.closePath();
        }

        public move(_timeslice: number): void { 
            //gate first Team, left
            let posLeftX: number = 0 - this.position.x; //Differenz berechnen von Ball posx und player posx
            let posLeftY: number = 300 - this.position.y; //Differenz berechnen von Ball posy und player posy
            let radiusLeft: number = Math.hypot(posLeftY, posLeftX);
            //gate secondTeam, right
            let posRightX: number = 800 - this.position.x; //Differenz berechnen von Ball posx und player posx
            let posRightY: number = 300 - this.position.y; //Differenz berechnen von Ball posy und player posy
            let radiusRight: number = Math.hypot(posRightX, posRightY);

            let differenceVector: Vector = Vector.getDifference(this.target, this.position); // weil Static
            this.velocity = new Vector(differenceVector.x / 10, differenceVector.y / 10);
            if (differenceVector.length <= 10) {
                this.velocity.x = 0;
                this.velocity.y = 0;
            }
            this.position.add(this.velocity);

            if (radiusLeft <= 50) { //wenn Radius kleiner gleich 50
                this.goalLeft = <HTMLElement>document.querySelector("#goalTeam2"); 
                this.goal1++;
                this.goalLeft.innerHTML = this.goal1  + "";
                activityPlayer = Activity.BREAK_GAME;
                this.position.set(this.startPosition.x, this.startPosition.y);
                this.target.set(this.startPosition.x, this.startPosition.y);
                }

            if (radiusRight <= 50) {
                this.goalRight = <HTMLElement>document.querySelector("#goalTeam1"); 
                this.goal2++;
                this.goalRight.innerHTML = this.goal2  + "";
                activityPlayer = Activity.BREAK_GAME;
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



}