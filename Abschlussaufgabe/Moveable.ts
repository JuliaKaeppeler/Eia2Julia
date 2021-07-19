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

        public moveToBall(_positionBall: Vector): void {
            //
        }


    }
    


}