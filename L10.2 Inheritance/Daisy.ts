namespace meadow { // gleicher Name des Namespace

    export class Daisy { // Klasse exportieren, damit sie drauf zugreifen kann
        type: string;
        color: string;
        position: Vector;
        size: number;
        velocity: Vector;

        constructor() {
            let x: number = 1000 * Math.random();
            let y: number = 150 * Math.random() + 620 * goldenCut;
            this.position = new Vector(x, y);

            this.velocity = new Vector(-1, 1); // Geschwindigkeit und Richtung
            
        }

        move(_timeslice: number): void { // move Methode
            this.position.add(this.velocity);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y > 600)
                this.position.y -= 200;
        }

        drawDaisy(): void {
            
            // for (let i: number = 0; i < 10; i ++) {
            //     let randomX: number = 800 * Math.random();
            //     let randomY: number = 150 * Math.random();
            //      this.position = new Vector(randomX, randomY);
    
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
        }
    }
}