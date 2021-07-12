namespace Soccer {
    window.addEventListener ("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    let moveables: Moveable[] = []; 

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
                return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawSoccerfield();
        let soccerfield: ImageData = crc2.getImageData(0, 0, 800, 600);
        createBall(1);
        createReferee(1);
        createLinesman(2);
        createPlayer(22);
        window.setInterval(update, 20, soccerfield);
    }

    function createBall(_ballNumber: number): void {
        for (let i: number = 0; i < _ballNumber; i++) {
            let ball: Ball = new Ball();
            moveables.push(ball);
        }
    }

    function createReferee(_refereeNumber: number): void {
            for (let i: number = 0; i < _refereeNumber; i++) {
                let referee: Referee = new Referee();
                moveables.push(referee);
            }
    }

    function createLinesman(_linesmanNumber: number): void {
        for (let i: number = 0; i < _linesmanNumber; i++) {
            let linesman: Linesman = new Linesman();
            moveables.push(linesman);
        }
    }

    function createPlayer(_playerNumber: number): void {
        for (let i: number = 0; i < _playerNumber; i++) {
            let player: Player = new Player();
            moveables.push(player);
        }
    }

    function drawSoccerfield(): void {
        // Gras
        crc2.beginPath();
        crc2.fillStyle = "green";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.closePath();
        // Mittellinie
        crc2.beginPath();
        crc2.moveTo(crc2.canvas.width / 2, 0);
        crc2.lineTo(crc2.canvas.width / 2, 600);
        crc2.strokeStyle = "white";
        crc2.stroke();
        crc2.closePath();
        //Mittelkreis
        crc2.beginPath();
        crc2.arc(crc2.canvas.width / 2, crc2.canvas.height / 2, 100, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(crc2.canvas.width / 2, crc2.canvas.height / 2, 5, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.closePath();
        // kleines Tor rechts
        crc2.beginPath();
        crc2.moveTo(crc2.canvas.width, crc2.canvas.height / 2 - 50);
        crc2.lineTo(crc2.canvas.width - 50, crc2.canvas.height / 2 - 50);
        crc2.lineTo(crc2.canvas.width - 50, crc2.canvas.height / 2 + 50);
        crc2.lineTo(crc2.canvas.width, crc2.canvas.height / 2 + 50);
        crc2.stroke();
        crc2.closePath();
        // großes Tor rechts
        crc2.beginPath();
        crc2.moveTo(crc2.canvas.width, crc2.canvas.height / 2 - 150);
        crc2.lineTo(crc2.canvas.width - 150, crc2.canvas.height / 2 - 150);
        crc2.lineTo(crc2.canvas.width - 150, crc2.canvas.height / 2 + 150);
        crc2.lineTo(crc2.canvas.width, crc2.canvas.height / 2 + 150);
        crc2.stroke();
        crc2.closePath();
        //Halbkreis rechts
        crc2.beginPath();
        crc2.arc(670, crc2.canvas.height / 2, 60, 1.9, 1.39 * Math.PI);
        crc2.stroke();
        crc2.closePath();

        // kleines Tor links
        crc2.beginPath();
        crc2.moveTo(0, crc2.canvas.height / 2 - 50);
        crc2.lineTo(0 + 50, crc2.canvas.height / 2 - 50);
        crc2.lineTo(0 + 50, crc2.canvas.height / 2 + 50);
        crc2.lineTo(0, crc2.canvas.height / 2 + 50);
        crc2.stroke();
        crc2.closePath();
        // großes Tor links
        crc2.beginPath();
        crc2.moveTo(0, crc2.canvas.height / 2 - 150);
        crc2.lineTo(0 + 150, crc2.canvas.height / 2 - 150);
        crc2.lineTo(0 + 150, crc2.canvas.height / 2 + 150);
        crc2.lineTo(0, crc2.canvas.height / 2 + 150);
        crc2.stroke();
        crc2.closePath();
        //Halbkreis links
        crc2.beginPath();
        crc2.arc(130, 300, 60, 5.05, 2.39 *  Math.PI); 
        crc2.strokeStyle = "white";
        crc2.stroke();
        crc2.closePath();
        
    }
    

    function update(_soccerfield: ImageData): void {
        crc2.putImageData(_soccerfield, 0, 0);
        for (let moveable of moveables) {
            moveable.draw();
            moveable.move(1);
            }
    }

    }
