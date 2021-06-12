namespace meadow { // gleicher Name des Namespace

    export class Cloud { // Klasse exportieren, damit sie drauf zugreifen kann
        type: string;
        color: string;
        position: Vector;
        size: number;
        velocity: Vector;

        constructor() {
            let x: number = 1000 * Math.random();
            let y: number = 50;
            this.position = new Vector(x, y);
            this.size = 50;

            // Geschwindigkeit und Richtung
            let a: number = -Math.random();
            this.velocity = new Vector(a, 0); 
            
        }

        move(_timeslice: number): void { // move Methode
            this.position.add(this.velocity);

            if (this.position.x + this.size > 1000 || this.position.x - this.size < 0) {
                this.velocity.x = -this.velocity.x;
            }

            // if (this.position.y + this.size > 600 || this.position.y - this.size < 0) {
            //     this.velocity.y = -this.velocity.y;
            // }
        }

        drawCloud(): void {

            crc2.fillStyle = "white";
            crc2.beginPath();
            crc2.arc(this.position.x + 50, this.position.y, this.size, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
    
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y + 50, this.size, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
    
            crc2.beginPath();
            crc2.arc(this.position.x + 130, this.position.y, this.size, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
    
            crc2.beginPath();
            crc2.arc(this.position.x + 210, this.position.y + 50, this.size, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
    
            crc2.beginPath();
            crc2.arc(this.position.x + 150, this.position.y + 80, this.size, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
    
            crc2.beginPath();
            crc2.arc(this.position.x + 80, this.position.y + 80, this.size, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
        }
    }
} 