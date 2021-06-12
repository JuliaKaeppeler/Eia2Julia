namespace meadow { // gleicher Name des Namespace

    export class Bee { // Klasse exportieren, damit sie drauf zugreifen kann
        type: string;
        color: string;
        position: Vector;
        size: number;
        velocity: Vector;

        constructor() {
            let x: number = 1000 * Math.random();
            let y: number = 600 * Math.random();
            this.position = new Vector(x, y);
            this.size = 50;

            // Geschwindigkeit und Richtung
            let a: number = -Math.random();
            let b: number = Math.random();
            this.velocity = new Vector(a, b); 
            
        }

        move(_timeslice: number): void { // move Methode
            this.position.add(this.velocity);

            if (this.position.x + this.size > 1000 || this.position.x - this.size < 0) {
                this.velocity.x = -this.velocity.x;
            }

            if (this.position.y + this.size > 600 || this.position.y - this.size < 0) {
                this.velocity.y = -this.velocity.y;
            }
            
            // if (this.position.x < 0)
            //     this.position.x += crc2.canvas.width;

        }

        drawBee(): void {
            
            // Flügel
        crc2.beginPath();
        // links
        crc2.moveTo(this.position.x + 20, this.position.y - 10);
        crc2.bezierCurveTo(this.position.x + 20, this.position.y - 10 - 15, this.position.x + 20 + 5, this.position.y - 10 - 15, this.position.x + 20 + 5, this.position.y - 10);
        // rechts
        crc2.moveTo(this.position.x + 20 + 5, this.position.y - 10);
        crc2.bezierCurveTo(this.position.x + 20 + 10, this.position.y - 10 - 15, this.position.x + 20 + 15, this.position.y - 10 - 15, this.position.x + 20 + 10, this.position.y);
        crc2.fillStyle = "grey";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        // Stachel
        crc2.beginPath();
        crc2.moveTo(this.position.x + 2, this.position.y);
        crc2.lineTo(this.position.x + 45, this.position.y);
        crc2.stroke();
        crc2.restore();
        crc2.closePath();
        // Körper
        crc2.beginPath();
        crc2.moveTo(this.position.x, this.position.y);
        crc2.bezierCurveTo(this.position.x + 5, this.position.y - 20, this.position.x + 35, this.position.y - 15, this.position.x + 40, this.position.y);
        crc2.moveTo(this.position.x, this.position.y);
        crc2.bezierCurveTo(this.position.x + 5, this.position.y + 20, this.position.x + 35, this.position.y + 15, this.position.x + 40, this.position.y);
        crc2.fillStyle = "yellow";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        // Fühler
        crc2.beginPath();
        crc2.moveTo(this.position.x + 10, this.position.y - 10);
        crc2.bezierCurveTo(this.position.x + 10, this.position.y - 20, this.position.x, this.position.y - 15, this.position.x + 5, this.position.y - 15);
        crc2.moveTo(this.position.x + 10 + 8, this.position.y - 8);
        crc2.bezierCurveTo(this.position.x + 10 + 8, this.position.y - 20 - 8, this.position.x + 10, this.position.y - 15, this.position.x + 5 + 10, this.position.y - 15);
        crc2.stroke();
        crc2.restore();
        crc2.closePath();
        // Augen
        crc2.beginPath();
        crc2.save();
        // links
        crc2.arc(this.position.x + 7, this.position.y - 5, 1, 0, 2 * Math.PI);
        // rechts
        crc2.arc(this.position.x + 12, this.position.y - 4, 1, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.restore();
        crc2.closePath();
        // Mund
        crc2.beginPath();
        crc2.moveTo(this.position.x + 5, this.position.y);
        crc2.bezierCurveTo(this.position.x + 6, this.position.y + 5, this.position.x + 8, this.position.y + 5, this.position.x + 10, this.position.y);
        crc2.stroke();
        crc2.restore();
        crc2.closePath();
        }
    }
} 