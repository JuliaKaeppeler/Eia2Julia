namespace meadow { // gleicher Name des Namespace

    export class Tulip extends Flower { // Klasse exportieren, damit sie drauf zugreifen kann
        type: string;
        color: string;
        position: Vector;
        size: number;
        //nectarLiter: number;

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
                //Stielblatt rechts
                crc2.beginPath();
                crc2.arc(this.position.x + -5, this.position.y + 30, 15, 20, 50, true);
                crc2.fillStyle = "darkgreen";
                crc2.fill();
                crc2.closePath();
                // Halbkreis
                crc2.beginPath();
                crc2.arc(this.position.x, this.position.y, 15, 0, Math.PI );
                crc2.fillStyle = "rgba(255, 62, 157, 1)";
                crc2.fill();
                crc2.closePath();
                //Blüten
                crc2.beginPath();
                crc2.moveTo(this.position.x + 15, this.position.y + 1);
                crc2.lineTo(this.position.x + 15, this.position.y - 15);
                crc2.lineTo(this.position.x + 1, this.position.y + 1);
                crc2.lineTo(this.position.x - 15, this.position.y - 15);
                crc2.lineTo(this.position.x - 15, this.position.y + 1);
                crc2.lineTo(this.position.x + 7.5, this.position.y + 1);
                crc2.lineTo(this.position.x + 1, this.position.y - 15);
                crc2.lineTo(this.position.x - 7.5, this.position.y + 1);
                crc2.fillStyle = "rgba(255, 62, 157, 1)";
                crc2.fill();
                crc2.restore();
                crc2.closePath();
                // Füllstand
                crc2.beginPath();
                crc2.fillStyle = "rgba(255, 62, 157, 1)"; 
                crc2.fillRect(this.position.x + 20, this.position.y - 10, 10, 0 - this.nectarLiter);
                crc2.closePath();
        }

        // fillNectar(): void {
        //     //console.log("Nektarfüllung");
        //     if (this.nectarLiter < 20) {
        //         this.nectarLiter += 0.02;
        //     }
        // }

    }
} 