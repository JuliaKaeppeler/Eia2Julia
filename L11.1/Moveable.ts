namespace meadow {

    export abstract class Moveable {
        protected position: Vector;
        protected velocity: Vector;
        protected color: string;
        protected size: number;

        constructor(_position?: Vector) {
            let x: number = 1000 * Math.random();
            let y: number = 50;
            this.position = new Vector(x, y);
            this.size = 50;

            // Geschwindigkeit und Richtung
            let a: number = -Math.random();
            this.velocity = new Vector(a, 0); 
            
        }

        public move(_timeslice: number): void { // move Methode
            this.position.add(this.velocity);
        
            if (this.position.x + this.size > 1000 || this.position.x - this.size < 0) {
                this.velocity.x = -this.velocity.x;
            }
        }

        public draw(): void {
            //
        }

    }
}

