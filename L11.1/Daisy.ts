namespace meadow { // gleicher Name des Namespace

    export class Daisy extends Flower { // Klasse exportieren, damit sie drauf zugreifen kann
        type: string;
        color: string;
        position: Vector;
        size: number;
        

        constructor(_position?: Vector) {
            super(_position);

            let x: number = 1000 * Math.random();
            let y: number = 150 * Math.random() + 620 * goldenCut;
            //this.position = new Vector(x, y);

            this.nectarLiter = 0;
            
            if (_position)
                this.position = _position;
            else this.position = new Vector(x, y);
        }

        public draw(): void {
                //Stiel
                crc2.beginPath();
                crc2.rect(this.position.x, this.position.y, 3, 60);
                crc2.fillStyle = "darkgreen";
                crc2.fill();
                crc2.closePath();
                //Stielblatt links
                crc2.beginPath();
                crc2.arc(this.position.x - 3, this.position.y + 30, 10, 45, Math.PI );
                crc2.fillStyle = "darkgreen";
                crc2.fill();
                crc2.closePath();
                //Blütenblätter
                crc2.beginPath();
                crc2.arc(this.position.x + 10, this.position.y, 15, 0, 2 * Math.PI);
                crc2.arc(this.position.x, this.position.y + 10, 15, 0, 2 * Math.PI);
                crc2.arc(this.position.x  - 10, this.position.y, 15, 0, 2 * Math.PI);
                crc2.arc(this.position.x, this.position.y - 10, 15, 0, 2 * Math.PI);
                crc2.fillStyle = "white";
                crc2.fill();
                crc2.closePath();
                //Mitte
                crc2.beginPath();
                crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
                crc2.fillStyle = "yellow";
                crc2.fill();
                crc2.closePath();
                // Füllstand
                crc2.beginPath();
                crc2.fillStyle = "white"; 
                crc2.fillRect(this.position.x + 25, this.position.y - 10, 10, 0 - this.nectarLiter);
                crc2.closePath();
        }

        // fillNectar(): void {
        //     if (this.nectarLiter < 20) {
        //         this.nectarLiter += 0.02;
        //     }
        // }

    }
}