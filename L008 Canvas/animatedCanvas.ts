namespace generativeArt {
    

    window.addEventListener ("load", handleLoad);
    let crc2: CanvasRenderingContext2D;

        
    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
                return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
    }


    let x: number = Math.random() * 700;
    let y: number = Math.random() * 500;
    let dx: number = 4;
    let dy: number = 4;
    let radius: number = 30;
    function animate(): void {
        requestAnimationFrame(animate);
        crc2.clearRect(0, 0, innerWidth, innerHeight);

        crc2.beginPath();
        crc2.arc(x, y, radius, 0, Math.PI * 2, false);
        crc2.fillStyle = "white";
        crc2.fill();

        if (x + radius > 800 || x - radius < 0) {
            dx = -dx;
        }
        if (y + radius > 600 || y - radius < 0) {
            dy = -dy;
        }

        x += dx;
        y += dy;

    }

    animate();

}

