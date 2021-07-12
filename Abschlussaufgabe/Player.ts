namespace Soccer {

    export class Player extends Moveable {
       protected team: number;   
       protected colorTeam1: string;
       protected colorTeam2: string;
       protected position: Vector;
       protected velocity: Vector;
       protected precision: number;
       protected radius: number;
       protected jerseyNumber: number;
       protected changePlayer: boolean;

       constructor(_team?: number, _colorTeam1?: string, _colorTeam2?: string, _precision?: number, _jerseyNumber?: number, _position?: Vector, _velocity?: Vector) {
        super(_position);
        let x: number = 800 * Math.random();
        let y: number = 580;
        let a: number = - Math.random(); // Velocity
        let b: number = 2 * Math.random(); // Velocity
        this.position = new Vector(x, y);
        this.colorTeam1 = "grey";
        this.colorTeam2 = "purple";

        if (_position) 
        this.position = _position;
        else
        this.position = new Vector(x, y);
        this.velocity = new Vector(a, b);
        }

        public draw(): void { 
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 8, 0, 2 * Math.PI);
            crc2.fillStyle = this.colorTeam1;
            crc2.fill();
            crc2.closePath();
            }

        public move(_timeslice: number): void {
            this.position.add(this.velocity);
            
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