namespace Soccer {

    export abstract class Moveable {
       protected color: string;   
       protected position: Vector;
       protected velocity: Vector;

       constructor(_position?: Vector) {
        //Velocity?
        let x: number = 800 * Math.random();
        let y: number = 600 * Math.random();
        this.position = new Vector(x, y);
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
            
        public draw(): void {
            // Test
        }


    }
    


}