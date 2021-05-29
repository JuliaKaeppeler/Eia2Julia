namespace meadow { // gleicher Name des Namespace

    export class StarFlower { // Klasse exportieren, damit sie drauf zugreifen kann
        type: string;
        color: string;
        position: Vector;
        size: number;
        velocity: Vector;

        constructor() {
            let x: number = 1000 * Math.random();
            let y: number = 150 * Math.random() + 620 * goldenCut;
            this.position = new Vector(x, y);

            // Geschwindigkeit und Richtung
            let a: number = -Math.random();
            let b: number = Math.random();
            this.velocity = new Vector(a, b); 
            
        }

        move(_timeslice: number): void { // move Methode
            this.position.add(this.velocity);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y > 600)
                this.position.y -= 200;
        }

        drawStarFlower(): void {
            
            // for (let i: number = 0; i < 5; i ++) {
            //     let randomX: number = 900 * Math.random();
            //     let randomY: number = 150 * Math.random();
            //     this.position = new Vector(randomX, randomY);
    
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
                //Blüte
                crc2.beginPath();
                crc2.moveTo(this.position.x - 10, this.position.y + 20);
                crc2.lineTo(this.position.x + 0, this.position.y - 25);
                crc2.lineTo(this.position.x + 15, this.position.y + 15);
                crc2.lineTo(this.position.x - 25, this.position.y - 5);
                crc2.lineTo(this.position.x + 25, this.position.y - 15);
                crc2.lineTo(this.position.x - 10, this.position.y + 20);
                crc2.fillStyle = "rgba(255, 180, 62, 1)";
                crc2.fill();
                crc2.restore();
                crc2.closePath();
                // Mitte
                crc2.beginPath();
                crc2.save();
                crc2.arc(this.position.x, this.position.y, 5, 0, 2 * Math.PI);
                crc2.closePath();
                crc2.fillStyle = "pink";
                crc2.fill();
                crc2.restore();
                crc2.closePath();
            //}
        }
    }
} 