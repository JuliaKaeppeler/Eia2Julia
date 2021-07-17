namespace Soccer {

    export class Ball extends Moveable {
        public target: Vector;
        public position: Vector;
        protected color: string;
        protected velocity: Vector;

        constructor(_position?: Vector) {
            super(_position);
            let x: number = 200;
            let y: number = 205;
            let a: number = - Math.random(); // Velocity
            let b: number = 3 * Math.random(); // Velocity
            this.position = new Vector(x, y);
            this.color = "black";
            this.target = new Vector(this.position.x, this.position.y);

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
            let differenceVector: Vector = Vector.getDifference(this.target, this.position); // weil Static
            this.velocity = new Vector(differenceVector.x / 10, differenceVector.y / 10);
            if (differenceVector.length <= 10) {
                this.velocity.x = 0;
                this.velocity.y = 0;
            }
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