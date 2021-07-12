var Soccer;
(function (Soccer) {
    window.addEventListener("load", handleLoad);
    var moveables = [];
    function handleLoad(_event) {
        var canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Soccer.crc2 = canvas.getContext("2d");
        drawSoccerfield();
        var soccerfield = Soccer.crc2.getImageData(0, 0, 800, 600);
        createBall(1);
        createReferee(1);
        createLinesman(2);
        createPlayer(22);
        window.setInterval(update, 20, soccerfield);
    }
    function createBall(_ballNumber) {
        for (var i = 0; i < _ballNumber; i++) {
            var ball = new Soccer.Ball();
            moveables.push(ball);
        }
    }
    function createReferee(_refereeNumber) {
        for (var i = 0; i < _refereeNumber; i++) {
            var referee = new Soccer.Referee();
            moveables.push(referee);
        }
    }
    function createLinesman(_linesmanNumber) {
        for (var i = 0; i < _linesmanNumber; i++) {
            var linesman = new Soccer.Linesman();
            moveables.push(linesman);
        }
    }
    function createPlayer(_playerNumber) {
        for (var i = 0; i < _playerNumber; i++) {
            var player = new Soccer.Player();
            moveables.push(player);
        }
    }
    function drawSoccerfield() {
        // Gras
        Soccer.crc2.beginPath();
        Soccer.crc2.fillStyle = "green";
        Soccer.crc2.fillRect(0, 0, Soccer.crc2.canvas.width, Soccer.crc2.canvas.height);
        Soccer.crc2.closePath();
        // Mittellinie
        Soccer.crc2.beginPath();
        Soccer.crc2.moveTo(Soccer.crc2.canvas.width / 2, 0);
        Soccer.crc2.lineTo(Soccer.crc2.canvas.width / 2, 600);
        Soccer.crc2.strokeStyle = "white";
        Soccer.crc2.stroke();
        Soccer.crc2.closePath();
        //Mittelkreis
        Soccer.crc2.beginPath();
        Soccer.crc2.arc(Soccer.crc2.canvas.width / 2, Soccer.crc2.canvas.height / 2, 100, 0, 2 * Math.PI);
        Soccer.crc2.stroke();
        Soccer.crc2.closePath();
        Soccer.crc2.beginPath();
        Soccer.crc2.arc(Soccer.crc2.canvas.width / 2, Soccer.crc2.canvas.height / 2, 5, 0, 2 * Math.PI);
        Soccer.crc2.fillStyle = "white";
        Soccer.crc2.fill();
        Soccer.crc2.closePath();
        // kleines Tor rechts
        Soccer.crc2.beginPath();
        Soccer.crc2.moveTo(Soccer.crc2.canvas.width, Soccer.crc2.canvas.height / 2 - 50);
        Soccer.crc2.lineTo(Soccer.crc2.canvas.width - 50, Soccer.crc2.canvas.height / 2 - 50);
        Soccer.crc2.lineTo(Soccer.crc2.canvas.width - 50, Soccer.crc2.canvas.height / 2 + 50);
        Soccer.crc2.lineTo(Soccer.crc2.canvas.width, Soccer.crc2.canvas.height / 2 + 50);
        Soccer.crc2.stroke();
        Soccer.crc2.closePath();
        // großes Tor rechts
        Soccer.crc2.beginPath();
        Soccer.crc2.moveTo(Soccer.crc2.canvas.width, Soccer.crc2.canvas.height / 2 - 150);
        Soccer.crc2.lineTo(Soccer.crc2.canvas.width - 150, Soccer.crc2.canvas.height / 2 - 150);
        Soccer.crc2.lineTo(Soccer.crc2.canvas.width - 150, Soccer.crc2.canvas.height / 2 + 150);
        Soccer.crc2.lineTo(Soccer.crc2.canvas.width, Soccer.crc2.canvas.height / 2 + 150);
        Soccer.crc2.stroke();
        Soccer.crc2.closePath();
        //Halbkreis rechts
        Soccer.crc2.beginPath();
        Soccer.crc2.arc(670, Soccer.crc2.canvas.height / 2, 60, 1.9, 1.39 * Math.PI);
        Soccer.crc2.stroke();
        Soccer.crc2.closePath();
        // kleines Tor links
        Soccer.crc2.beginPath();
        Soccer.crc2.moveTo(0, Soccer.crc2.canvas.height / 2 - 50);
        Soccer.crc2.lineTo(0 + 50, Soccer.crc2.canvas.height / 2 - 50);
        Soccer.crc2.lineTo(0 + 50, Soccer.crc2.canvas.height / 2 + 50);
        Soccer.crc2.lineTo(0, Soccer.crc2.canvas.height / 2 + 50);
        Soccer.crc2.stroke();
        Soccer.crc2.closePath();
        // großes Tor links
        Soccer.crc2.beginPath();
        Soccer.crc2.moveTo(0, Soccer.crc2.canvas.height / 2 - 150);
        Soccer.crc2.lineTo(0 + 150, Soccer.crc2.canvas.height / 2 - 150);
        Soccer.crc2.lineTo(0 + 150, Soccer.crc2.canvas.height / 2 + 150);
        Soccer.crc2.lineTo(0, Soccer.crc2.canvas.height / 2 + 150);
        Soccer.crc2.stroke();
        Soccer.crc2.closePath();
        //Halbkreis links
        Soccer.crc2.beginPath();
        Soccer.crc2.arc(130, 300, 60, 5.05, 2.39 * Math.PI);
        Soccer.crc2.strokeStyle = "white";
        Soccer.crc2.stroke();
        Soccer.crc2.closePath();
    }
    function update(_soccerfield) {
        Soccer.crc2.putImageData(_soccerfield, 0, 0);
        for (var _i = 0, moveables_1 = moveables; _i < moveables_1.length; _i++) {
            var moveable = moveables_1[_i];
            moveable.draw();
            moveable.move(1);
        }
    }
})(Soccer || (Soccer = {}));
//# sourceMappingURL=main.js.map