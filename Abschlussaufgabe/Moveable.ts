// In Zusammenarbeit mit Karen Josten und Rebecca Räschke
namespace Soccer {

    export abstract class Moveable {
        public position: Vector;
        public fixPosition: Vector;
        protected color: string;   
        protected velocity: Vector;
        
        constructor(_position?: Vector, _fixPosition?: Vector) {
        let x: number = 800 * Math.random();
        let y: number = 600 * Math.random();
        this.position = new Vector(x, y);
        }
        
        //Kollision
        public move(_timeslice: number): void {
            this.position.add(this.velocity);
            // Kollision auf der x-Achse (horizontal)
            // Wenn die Position + 10 > 800 auf der x-Achse ist oder die Position - 5 < 0 auf der x-Achse,
            // dann soll die Geschwindigkeit auf -this.velocity.x gesetzt werden, 
            // da sonst die moveables aus dem Canvas gehen würde.
            if (this.position.x + 10 > 800 || this.position.x - 5 < 0) {
            this.velocity.x = -this.velocity.x;
            }
            // Kollision auf der y-Achse (vertical)
            // Wenn die Position + 10 > 600 auf der y-Achse ist oder die Position - 5 < 0 auf der y-Achse,
            // dann soll die Geschwindigkeit auf -this.velocity.y gesetzt werden, 
            // da sonst die moveables aus dem Canvas gehen würde.
            if (this.position.y + 10 > 600 || this.position.y - 5 < 0) {
            this.velocity.y = -this.velocity.y;
            }
        }
        

        public draw(): void {
            // draw all moveables
        }

        public moveToBall(_positionBall: Vector): void {
            // moveToBall
        }


    }
    


}