"use strict";
var Soccer;
(function (Soccer) {
    window.addEventListener("load", handleLoad);
    let moveables = [];
    let player = [];
    let form;
    let startButton;
    function handleLoad(_event) {
        // let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Soccer.crc2 = canvas.getContext("2d");
        drawSoccerfield();
        let soccerfield = Soccer.crc2.getImageData(0, 0, 800, 600);
        createBall(1);
        createReferee(1);
        createLinesman(1);
        form = document.querySelector("form");
        form.addEventListener("change", handleChange);
        startButton = document.querySelector("#startButton");
        startButton.addEventListener("click", createPlayer); // createPlayer wird aufgerufe
        window.setInterval(update, 20, soccerfield);
    }
    function handleChange(_event) {
        _event.preventDefault();
        let formData = new FormData(document.forms[0]);
        player = [];
        for (let entry of formData.entries()) {
            player.push(String(entry[1]));
        }
    }
    function createBall(_ballNumber) {
        for (let i = 0; i < _ballNumber; i++) {
            let ball = new Soccer.Ball();
            moveables.push(ball);
        }
    }
    function createReferee(_refereeNumber) {
        for (let i = 0; i < _refereeNumber; i++) {
            let referee = new Soccer.Referee();
            moveables.push(referee);
        }
    }
    function createLinesman(_nLinesman) {
        for (let i = 0; i < _nLinesman; i++) {
            let linesman1 = new Soccer.Linesman();
            linesman1.position.x = 900 * Math.random(); // setzt position.x von Linesman
            linesman1.position.y = 20;
            linesman1.velocity.x = Math.random();
            linesman1.velocity.y = 0;
            moveables.push(linesman1); //Werte des ersten Linienrichters in das Array pushen
            let linesman2 = new Soccer.Linesman();
            moveables.push(linesman2);
        }
    }
    function createPlayer() {
        let element = document.getElementById("startButton");
        element.disabled = true;
        for (let i = 0; i < 22; i++) {
            if (i <= 10) {
                let firstTeam = new Soccer.Player();
                //firstTeam.colorTeamOne = "blue";
                firstTeam.colorTeam1 = player[0];
                //firstTeam.precisionMax = player[4] + "px";
                //firstTeam.precisionMin = player[5] + "px";
                moveables.push(firstTeam);
            }
            else {
                let secondTeam = new Soccer.Player();
                //secondTeam.colorTeamTwo = "red";
                secondTeam.colorTeam2 = player[1];
                // secondTeam.precisionMax = player[4] + "px";
                // secondTeam.precisionMin = player[5] + "px";
                // secondTeam.position.x = 500; // setzt position.x von Linesman
                // secondTeam.position.y = 100;
                // secondTeam.velocity.x = Math.random();
                moveables.push(secondTeam);
            }
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
        for (let moveable of moveables) {
            moveable.draw();
            moveable.move(1);
        }
    }
})(Soccer || (Soccer = {}));
//# sourceMappingURL=main.js.map