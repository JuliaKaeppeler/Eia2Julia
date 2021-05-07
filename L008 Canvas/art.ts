namespace generativeArt {
    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener ("load", handleLoad);
    let crc2: CanvasRenderingContext2D;

        
    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
                return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
    
        drawLines();
        drawRectRandomPosition();
        drawCircle();
        drawTriangle();
        

    }

    function drawLines(): void {
        for (let i: number = 0; i < 20; i ++) {
            let xPos: number = 800;
            let yPos: number = 600;
            crc2.beginPath();
            crc2.lineWidth = 80 * Math.random();
            crc2.moveTo(-1000, -1000);
            crc2.lineTo(xPos + 4000 * Math.random(), yPos + 4000 * Math.random());
            crc2.strokeStyle = "rgba(247, 82, 163, 0.19)";
            crc2.stroke();
        }
    }

    function drawRectRandomPosition(): void {

        for (let i: number = 0; i < 10; i ++) {
            let xPos: number = crc2.canvas.width * Math.random();
            let yPos: number = crc2.canvas.height * Math.random();
            crc2.beginPath();
            crc2.rect(xPos, yPos, 300 * Math.random(), 400 * Math.random());
            let gradient: CanvasGradient = crc2.createLinearGradient(800 * Math.random(), 1500 * Math.random(), 0, 0);

            gradient.addColorStop(0, "rgba(247, 144, 60, 0.3)");
            gradient.addColorStop(1, "rgba(155, 59, 247, 0.3)");
            crc2.fillStyle = gradient;
            crc2.fill();
            crc2.fill(); 
            crc2.shadowBlur = 30;
            crc2.shadowColor = "black";
            crc2.closePath();
            
        }
    }

    function drawCircle(): void {
        for (let i: number = 0; i < 20; i ++) {
            let xPos: number = crc2.canvas.width * Math.random();
            let yPos: number = crc2.canvas.height * Math.random();
            crc2.beginPath();
            crc2.arc(xPos, yPos, 100 * Math.random(), 0, 2 * Math.PI );
            
            let gradient: CanvasGradient = crc2.createLinearGradient(800 * Math.random(), 1500 * Math.random(), 0, 0);

            gradient.addColorStop(0, "rgba(252, 25, 25, 0.5)");
            gradient.addColorStop(1, "rgba(81, 177, 248, 0.33)");
            crc2.fillStyle = gradient;
            crc2.fill();
            crc2.closePath();
        }
    }
    
    function drawTriangle(): void {
        for (let i: number = 0; i < 3; i ++) {
            let xPos: number = crc2.canvas.width * Math.random();
            let yPos: number = crc2.canvas.height * Math.random();
            crc2.beginPath();
            crc2.moveTo(xPos, yPos);
            crc2.lineTo(10, 300);
            crc2.lineTo(310, 300);
            crc2.fillStyle = "rgba(0, 0, 0, 0.24)";
            crc2.fill();
            crc2.closePath();
        }
    }
    


}