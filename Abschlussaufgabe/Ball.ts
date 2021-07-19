// In Zusammenarbeit mit Karen Josten und Rebecca Räschke
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
            //Tor links - Team 1
            let posLeftX: number = 0 - this.position.x; //Berechnung: Abstand zwischen Tor links und Ball auf der x-Achse
            let posLeftY: number = 300 - this.position.y; //Berechnung: Abstand zwischen Tor links und Ball auf der y-Achse
            let radiusLeft: number = Math.hypot(posLeftY, posLeftX); //Berechnung: Radius mit Math.hypot, damit das Programm jede x- und y-Stelle kennt.
            //Tor rechts - Team 2
            let posRightX: number = 800 - this.position.x; //Berechnung: Abstand zwischen Tor rechts und Ball auf der x-Achse
            let posRightY: number = 300 - this.position.y; //Berechnung: Abstand zwischen Tor links und Ball auf der y-Achse
            let radiusRight: number = Math.hypot(posRightX, posRightY); //Berechnung: Radius mit Math.hypot, damit das Programm jede x- und y-Stelle kennt.
            // Geschwindigkeit
            let differenceVector: Vector = Vector.getDifference(this.target, this.position); // Berechnung: Abstand bzw. Vector zwischen Ziel (target: Click von Nutzer) und Position vom Ball
            this.velocity = new Vector(differenceVector.x / 10, differenceVector.y / 10); // Berechnung: Geschwindigkeit vom Ball: Der Abstand zwischen Ziel und Position vom Ball wird jeweils (x, y) durch 10 geteilt, damit der Ball langsamer wird.
            if (differenceVector.length <= 10) { // wenn der Abstand zwischen Ziel und Position vom Ball (also die Länge des Vectors) <= 10 ist, dann stoppt der Ball.
                this.velocity.x = 0; // Geschwindigkeit (x) also auf 0
                this.velocity.y = 0; // Geschwindigkeit (y) also auf 0
            }
            this.position.add(this.velocity); //Geschwindigkeit an Position

            // Tor links
            // Wenn der Radius (Abstand Tor links und Ball) <= 50 ist, wird ein Tor dazugerechnet und das Spiel stoppt.
            // Daraufhin wird der Ball auf die Startposition zurück gesetzt.
            if (radiusLeft <= 50) { 
                this.goalLeft = <HTMLElement>document.querySelector("#goalTeam2"); // HTMLElement mit id="goalTeam2"
                this.goal1++; // Tor dazu rechnen mit ++
                this.goalLeft.innerHTML = this.goal1  + ""; //Wird mit innerHTML übergeben und auf der Webseite angezeigt
                activityPlayer = Activity.BREAK_GAME;
                this.position.set(this.startPosition.x, this.startPosition.y); 
                this.target.set(this.startPosition.x, this.startPosition.y); 
                }
            
            // gleiches git für Tor rechts, wenn radiusRight <= 50
            if (radiusRight <= 50) {
                this.goalRight = <HTMLElement>document.querySelector("#goalTeam1"); 
                this.goal2++;
                this.goalRight.innerHTML = this.goal2  + "";
                activityPlayer = Activity.BREAK_GAME;
                this.position.set(this.startPosition.x, this.startPosition.y);
                this.target.set(this.startPosition.x, this.startPosition.y);
                }
        }


    }



}