// In Zusammenarbeit mit Karen Josten und Rebecca Räschke
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
        this.position = new Vector(x, y); // wird zu neuem Vector
        this.velocity = new Vector(a, b); // wird zu neuem Vector
    
        }

        public draw(): void { 
            // Team 1: Spieler werden gezeichnet
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 8, 0, 2 * Math.PI);
            crc2.fillStyle = this.colorTeam1;
            crc2.fill();
            crc2.strokeText(this.jerseyNum, this.position.x, this.position.y + 4, 8);
            crc2.strokeStyle = "black";
            crc2.textAlign = "center"; 
            crc2.stroke();
            crc2.closePath();
            // Team 2: Spieler werden gezeichnet
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 8, 0, 2 * Math.PI);
            crc2.fillStyle = this.colorTeam2;
            crc2.fill();
            crc2.strokeText(this.jerseyNum, this.position.x, this.position.y + 4, 8);
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.closePath();
        }

    
        
        public moveToBall(_positionBall: Vector): void { 
            let positionBall: Vector = _positionBall;
            //Abstand Ball und Spieler D=(P2-P1)
            let xPos: number = positionBall.x - this.position.x;
            let yPos: number = positionBall.y - this.position.y;
            let xDefaultPos: number = this.fixPosition.x;
            let yDefaultPos: number = this.fixPosition.y;
            let radius: number = Math.hypot(yPos, xPos);

            // Wenn der Radius <= 130 dann bewegt der Spieler sich zum Ball
            if (radius <= 130) { 
               // Berechnung Abstand zwischen Spieler und Ball
                let position: Vector = new Vector(xPos, yPos); // neuer Vector      
                position.scale(this.velocityPlayer / radius); // Spieler bewegt sich mit seiner Geschwindigkeit
                this.position.add(position); // neue Position wird übergeben

                // Wenn Radius <= 5, dann nimmt Spieler den Ball an. Die Trikotnummer wird mit innerHTML übergeben (Score).
                // Aktivität BREAK_GAME: Spiel steht still
                if (radius <= 5) {
                    this.onBallPlayer = <HTMLElement>document.querySelector("#onBall");
                    this.onBallPlayer.innerHTML = this.jerseyNum;
                    activityPlayer = Activity.BREAK_GAME;
                }    
            } 
            // Wenn Radius > 130, wird der Spieler wieder auf die Startposition gesetzt.
            if (radius > 130) {
                this.position.set(xDefaultPos, yDefaultPos);
            }
        }
    }
 
}


