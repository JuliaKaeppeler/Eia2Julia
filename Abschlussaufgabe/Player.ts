namespace Soccer {

    export class Player extends Moveable {
        public radius: number;
        public jerseyNum: string; 
        public precision: number;
        public colorTeam1: string;
        public colorTeam2: string;
        public position: Vector;
        public onBallPlayer: HTMLElement;
        declare public fixPosition: Vector;
        public velocity: Vector;
        public velocityPlayer: number;
        protected angle: number;
        protected team: number;   
        protected changePlayer: boolean;

       constructor(_team?: number, _colorTeam1?: string, _colorTeam2?: string, _precision?: number, _jerseyNumber?: number, _position?: Vector, _velocity?: Vector, _fixPosition?: Vector) {
        super(_position, _fixPosition);
        let x: number = 800 * Math.random();
        let y: number = 580;
        let a: number = - Math.random(); // Velocity
        let b: number = 2 * Math.random(); // Velocity
        this.position = new Vector(x, y);
        this.fixPosition = new Vector(x, y);
        

        if (_position) 
        this.position = _position;
        else
        this.position = new Vector(x, y);
        this.velocity = new Vector(a, b);
    
        }

        public draw(): void { 
            // Team 1
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 8, 0, 2 * Math.PI);
            crc2.fillStyle = this.colorTeam1;
            crc2.fill();
            crc2.strokeText(this.jerseyNum, this.position.x, this.position.y + 4, 8);
            crc2.strokeStyle = "black";
            crc2.textAlign = "center"; 
            crc2.stroke();
            crc2.closePath();
            // Team 2
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 8, 0, 2 * Math.PI);
            crc2.fillStyle = this.colorTeam2;
            crc2.fill();
            crc2.strokeText(this.jerseyNum, this.position.x, this.position.y + 4, 8);
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.closePath();

            // Radius um Spieler anzeigen lassen
            // crc2.beginPath();
            // crc2.arc(this.position.x, this.position.y, 130, 0, 2 * Math.PI);
            // crc2.stroke();
            // crc2.closePath();
            }

        public move(_timeslice: number): void {
            //Kollision
            if (this.position.x + 10 > 800 || this.position.x - 5 < 0) {
            this.velocity.x = -this.velocity.x;
            }
            if (this.position.y + 10 > 600 || this.position.y - 5 < 0) {
            this.velocity.y = -this.velocity.y;
            }
        }
        
        public moveToBall(_positionBall: Vector): void {
            console.log(this);
            let positionBall: Vector = _positionBall;
            //Abstand Ball und Spieler D=(P2-P1)
            let xPos: number = positionBall.x - this.position.x;
            let yPos: number = positionBall.y - this.position.y;
            let xDefaultPos: number = this.fixPosition.x;
            let yDefaultPos: number = this.fixPosition.y;
            let radius: number = Math.hypot(yPos, xPos);

            if (radius <= 130) {
               
                let position: Vector = new Vector(xPos, yPos);            
                position.scale(this.velocityPlayer / radius);
                this.position.add(position);

                if (radius <= 5) {
                    this.onBallPlayer = <HTMLElement>document.querySelector("#onBall");
                    this.onBallPlayer.innerHTML = this.jerseyNum;
                    activityPlayer = Activity.BREAK_GAME;
                }    
            } 
            if (radius > 130) {
                this.position.set(xDefaultPos, yDefaultPos);
            }
        }
    }
 
}


