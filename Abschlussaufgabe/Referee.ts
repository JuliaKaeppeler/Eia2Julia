// In Zusammenarbeit mit Karen Josten und Rebecca Räschke
namespace Soccer {

    export class Referee extends Moveable {
       protected color: string;   
       protected velocity: Vector;

       constructor(_position?: Vector) { // Übernimmt position von Moveable
        super(_position); // Übernimmt aus Superklasse
        let x: number = 800 * Math.random();
        let y: number = 500 * Math.random();
        let a: number = - Math.random(); // Velocity
        let b: number = 3 * Math.random(); // Velocity
        this.position = new Vector(x, y);
        this.color = "red";
        
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
            this.position.add(this.velocity); // Geschwindigigkeit wird an die Position übergeben.
            // Kollision auf der x-Achse (horizontal)
            // Wenn die Position + 10 > 800 auf der x-Achse ist oder die Position - 5 < 0 auf der x-Achse,
            //, dann soll die Geschwindigkeit auf -this.velocity.x gesetzt werden, 
            // da sonst der Referee aus dem Canvas gehen würde.
            if (this.position.x + 10 > 800 || this.position.x - 5 < 0) {
            this.velocity.x = -this.velocity.x;
            }
            // Kollision auf der y-Achse (vertical)
            // Wenn die Position + 10 > 600 auf der y-Achse ist oder die Position - 5 < 0 auf der y-Achse,
            // dann soll die Geschwindigkeit auf -this.velocity.y gesetzt werden, 
            // da sonst der Referee aus dem Canvas gehen würde.
            if (this.position.y + 10 > 600 || this.position.y - 5 < 0) {
            this.velocity.y = -this.velocity.y;
            }
        }
    }
}