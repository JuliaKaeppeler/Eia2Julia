namespace meadow {
    export abstract class Flower {
        protected color: string;
        protected size: number;
        protected position: Vector;
        protected nectarLiter: number;
        

        constructor(_position?: Vector) {
            let x: number = 1000 * Math.random();
            let y: number = 150 * Math.random() + 620 * goldenCut;
            this.position = new Vector(x, y);

            this.nectarLiter = 0;
            
        }

    public draw(): void {
        //draw
    }

    public fillNectar(): void {
        console.log("fill Nectar");
        if (this.nectarLiter < 20) {
            this.nectarLiter += 0.02;
        }
    }
    }
}