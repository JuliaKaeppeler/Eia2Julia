namespace Soccer {

    export class Ball extends Moveable {
       protected color: string;   
       protected position: Vector;
       protected velocity: Vector;

       constructor(_position?: Vector) {
        super(_position);
        let x: number = 800 * Math.random();
        let y: number = 500 * Math.random();
        let a: number = - Math.random(); // Velocity
        let b: number = 3 * Math.random(); // Velocity
        this.position = new Vector(x, y);
        this.color = "black";
        
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


    }
    


}