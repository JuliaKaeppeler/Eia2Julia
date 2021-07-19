//In Zusammenarbeit mit Karen Josten und Rebecca Räschke
namespace Soccer {

    export class Linesman extends Moveable {
        //public position: Vector;
        public velocity: Vector;
        protected color: string;   
       

       constructor(_position?: Vector) {
        super(_position);
        let x: number = 800 * Math.random();
        let y: number = 580;
        let a: number = - Math.random(); // Velocity
        let b: number = 0; // Velocity
        this.position = new Vector(x, y);
        this.color = "yellow";
        
        if (_position) 
        this.position = _position;
        else
        this.position = new Vector(x, y);
        this.velocity = new Vector(a, b);
        }

        // Linesman wird gezeichnet
        public draw(): void { 
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 8, 0, 2 * Math.PI);
            crc2.fillStyle = this.color;
            crc2.fill();
            crc2.closePath();
        }

        public move(_timeslice: number): void {
            this.position.add(this.velocity); // Geschwindigigkeit wird an die Position übergeben. 
            // Kollision auf der x-Achse
            // Wenn die Position + 10 > 800 ist oder die Position - 5 < 0, dann soll die Geschwindigkeit auf -this.velocity.x gesetzt werden, 
            // da sonst der Linesman aus dem Canvas gehen würde.
            if (this.position.x + 10 > 800 || this.position.x - 5 < 0) {
            this.velocity.x = -this.velocity.x;
            }
        }
    }
}