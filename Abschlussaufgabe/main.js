"use strict";
var Soccer;
(function (Soccer) {
    let Activity;
    (function (Activity) {
        Activity[Activity["FOLLOW_BALL"] = 0] = "FOLLOW_BALL";
        Activity[Activity["FLY_BALL"] = 1] = "FLY_BALL";
        Activity[Activity["BREAK_GAME"] = 2] = "BREAK_GAME";
        Activity[Activity["CHANGE_PLAYER"] = 3] = "CHANGE_PLAYER";
    })(Activity = Soccer.Activity || (Soccer.Activity = {}));
    window.addEventListener("load", handleLoad);
    let moveables = [];
    let player = [];
    let form;
    let startButton;
    let ball;
    let time = false; // timeOut
    Soccer.activityPlayer = Activity.FOLLOW_BALL;
    function handleLoad(_event) {
        // let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Soccer.crc2 = canvas.getContext("2d");
        drawSoccerfield();
        let soccerfield = Soccer.crc2.getImageData(0, 0, 800, 600);
        //createBall(1);
        ball = new Soccer.Ball(); // Ball generieren
        moveables.push(ball);
        createReferee(1);
        createLinesman(1);
        form = document.querySelector("form");
        form.addEventListener("change", handleChange);
        startButton = document.querySelector("#startButton");
        startButton.addEventListener("click", createPlayer); // createPlayer wird aufgerufe
        canvas.addEventListener("click", getPositionClick);
        window.setInterval(update, 25, soccerfield);
    }
    function handleChange(_event) {
        _event.preventDefault();
        let formData = new FormData(document.forms[0]);
        player = [];
        for (let entry of formData.entries()) {
            player.push(String(entry[1]));
        }
    }
    function getPositionClick(_event) {
        let position = new Soccer.Vector(_event.clientX - Soccer.crc2.canvas.offsetLeft, _event.clientY - Soccer.crc2.canvas.offsetTop);
        ball.target = position;
        Soccer.activityPlayer = Activity.FLY_BALL;
    }
    function createReferee(_refereeNumber) {
        for (let i = 0; i < _refereeNumber; i++) {
            let referee = new Soccer.Referee();
            moveables.push(referee);
        }
    }
    function createLinesman(_linesmanNumber) {
        for (let i = 0; i < _linesmanNumber; i++) {
            let linesman1 = new Soccer.Linesman();
            linesman1.position.x = 800 * Math.random(); // setzt position.x von Linesman
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
            //Player 1 Team 1
            if (i == 0) {
                let player1Team1 = new Soccer.Player();
                player1Team1.colorTeam1 = player[0];
                player1Team1.position.x = 60;
                player1Team1.position.y = 230;
                player1Team1.fixPosition.x = 60;
                player1Team1.fixPosition.y = 230;
                player1Team1.jerseyNum = "1";
                player1Team1.velocityTwo = getRandomVelocity(Number(player[2]), Number(player[3]));
                player1Team1.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
                moveables.push(player1Team1);
            }
            //Player 2 Team 1
            if (i == 1) {
                let player2Team1 = new Soccer.Player();
                player2Team1.colorTeam1 = player[0];
                player2Team1.position.x = 60;
                player2Team1.position.y = 380;
                player2Team1.fixPosition.x = 60;
                player2Team1.fixPosition.y = 380;
                player2Team1.jerseyNum = "2";
                player2Team1.velocityTwo = getRandomVelocity(Number(player[2]), Number(player[3]));
                player2Team1.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
                moveables.push(player2Team1);
            }
            //Player 3 Team 1
            if (i == 2) {
                let player3Team1 = new Soccer.Player();
                player3Team1.colorTeam1 = player[0];
                player3Team1.position.x = 240;
                player3Team1.position.y = 100;
                player3Team1.fixPosition.x = 240;
                player3Team1.fixPosition.y = 100;
                player3Team1.jerseyNum = "3";
                player3Team1.velocityTwo = getRandomVelocity(Number(player[2]), Number(player[3]));
                player3Team1.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
                moveables.push(player3Team1);
            }
            //Player 4 Team1
            if (i == 3) {
                let player4Team1 = new Soccer.Player();
                player4Team1.colorTeam1 = player[0];
                player4Team1.position.x = 240;
                player4Team1.position.y = 500;
                player4Team1.fixPosition.x = 240;
                player4Team1.fixPosition.y = 500;
                player4Team1.jerseyNum = "4";
                player4Team1.velocityTwo = getRandomVelocity(Number(player[2]), Number(player[3]));
                player4Team1.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
                moveables.push(player4Team1);
            }
            //Player 5 Team 1
            if (i == 4) {
                let player5Team1 = new Soccer.Player();
                player5Team1.colorTeam1 = player[0];
                player5Team1.position.x = 400;
                player5Team1.position.y = 230;
                player5Team1.fixPosition.x = 400;
                player5Team1.fixPosition.y = 230;
                player5Team1.jerseyNum = "5";
                player5Team1.velocityTwo = getRandomVelocity(Number(player[2]), Number(player[3]));
                player5Team1.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
                moveables.push(player5Team1);
            }
            //Player 6 Team 1
            if (i == 5) {
                let player6Team1 = new Soccer.Player();
                player6Team1.colorTeam1 = player[0];
                player6Team1.position.x = 400;
                player6Team1.position.y = 530;
                player6Team1.fixPosition.x = 400;
                player6Team1.fixPosition.y = 530;
                player6Team1.jerseyNum = "6";
                player6Team1.velocityTwo = getRandomVelocity(Number(player[2]), Number(player[3]));
                player6Team1.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
                moveables.push(player6Team1);
            }
            //Player 7 Team 1
            if (i == 6) {
                let player7Team1 = new Soccer.Player();
                player7Team1.colorTeam1 = player[0];
                player7Team1.position.x = 560;
                player7Team1.position.y = 200;
                player7Team1.fixPosition.x = 560;
                player7Team1.fixPosition.y = 200;
                player7Team1.jerseyNum = "7";
                player7Team1.velocityTwo = getRandomVelocity(Number(player[2]), Number(player[3]));
                player7Team1.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
                moveables.push(player7Team1);
            }
            //Player 8 Team 1
            if (i == 7) {
                let player8Team1 = new Soccer.Player();
                player8Team1.colorTeam1 = player[0];
                player8Team1.position.x = 560;
                player8Team1.position.y = 300;
                player8Team1.fixPosition.x = 560;
                player8Team1.fixPosition.y = 300;
                player8Team1.jerseyNum = "8";
                player8Team1.velocityTwo = getRandomVelocity(Number(player[2]), Number(player[3]));
                player8Team1.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
                moveables.push(player8Team1);
            }
            //Player 9 Team 1
            if (i == 8) {
                let player9Team1 = new Soccer.Player();
                player9Team1.colorTeam1 = player[0];
                player9Team1.position.x = 560;
                player9Team1.position.y = 400;
                player9Team1.fixPosition.x = 560;
                player9Team1.fixPosition.y = 400;
                player9Team1.jerseyNum = "9";
                player9Team1.velocityTwo = getRandomVelocity(Number(player[2]), Number(player[3]));
                player9Team1.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
                moveables.push(player9Team1);
            }
            //Player 10 Team 1
            if (i == 9) {
                let player10Team1 = new Soccer.Player();
                player10Team1.colorTeam1 = player[0];
                player10Team1.position.x = 740;
                player10Team1.position.y = 80;
                player10Team1.fixPosition.x = 740;
                player10Team1.fixPosition.y = 80;
                player10Team1.jerseyNum = "10";
                player10Team1.velocityTwo = getRandomVelocity(Number(player[2]), Number(player[3]));
                player10Team1.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
                moveables.push(player10Team1);
            }
            //Player 11 Team 1
            if (i == 10) {
                let player11Team1 = new Soccer.Player();
                player11Team1.colorTeam1 = player[0];
                player11Team1.position.x = 740;
                player11Team1.position.y = 530;
                player11Team1.fixPosition.x = 740;
                player11Team1.fixPosition.y = 530;
                player11Team1.jerseyNum = "11";
                player11Team1.velocityTwo = getRandomVelocity(Number(player[2]), Number(player[3]));
                player11Team1.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
                moveables.push(player11Team1);
            }
            //Player 1 Team 2
            if (i == 11) {
                let player1Team2 = new Soccer.Player();
                player1Team2.colorTeam2 = player[1];
                player1Team2.position.x = 60;
                player1Team2.position.y = 80;
                player1Team2.fixPosition.x = 60;
                player1Team2.fixPosition.y = 80;
                player1Team2.jerseyNum = "12";
                player1Team2.velocityTwo = getRandomVelocity(Number(player[2]), Number(player[3]));
                player1Team2.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
                moveables.push(player1Team2);
            }
            //Player 2 Team 2
            if (i == 12) {
                let player2Team2 = new Soccer.Player();
                player2Team2.colorTeam2 = player[1];
                player2Team2.position.x = 60;
                player2Team2.position.y = 530;
                player2Team2.fixPosition.x = 60;
                player2Team2.fixPosition.y = 530;
                player2Team2.jerseyNum = "13";
                player2Team2.velocityTwo = getRandomVelocity(Number(player[2]), Number(player[3]));
                player2Team2.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
                moveables.push(player2Team2);
            }
            //Player 3 Team 2
            if (i == 13) {
                let player3Team2 = new Soccer.Player();
                player3Team2.colorTeam2 = player[1];
                player3Team2.position.x = 240;
                player3Team2.position.y = 200;
                player3Team2.fixPosition.x = 240;
                player3Team2.fixPosition.y = 200;
                player3Team2.jerseyNum = "14";
                player3Team2.velocityTwo = getRandomVelocity(Number(player[2]), Number(player[3]));
                player3Team2.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
                moveables.push(player3Team2);
            }
            //Player 4 Team 2
            if (i == 14) {
                let player4Team2 = new Soccer.Player();
                player4Team2.colorTeam2 = player[1];
                player4Team2.position.x = 240;
                player4Team2.position.y = 300;
                player4Team2.fixPosition.x = 240;
                player4Team2.fixPosition.y = 300;
                player4Team2.jerseyNum = "15";
                player4Team2.velocityTwo = getRandomVelocity(Number(player[2]), Number(player[3]));
                player4Team2.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
                moveables.push(player4Team2);
            }
            //Player 5 Team 2
            if (i == 15) {
                let player5Team2 = new Soccer.Player();
                player5Team2.colorTeam2 = player[1];
                player5Team2.position.x = 240;
                player5Team2.position.y = 400;
                player5Team2.fixPosition.x = 250;
                player5Team2.fixPosition.y = 400;
                player5Team2.jerseyNum = "16";
                player5Team2.velocityTwo = getRandomVelocity(Number(player[2]), Number(player[3]));
                player5Team2.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
                moveables.push(player5Team2);
            }
            //Player 6 Team 2
            if (i == 16) {
                let player6Team2 = new Soccer.Player();
                player6Team2.colorTeam2 = player[1];
                player6Team2.position.x = 400;
                player6Team2.position.y = 80;
                player6Team2.fixPosition.x = 400;
                player6Team2.fixPosition.y = 80;
                player6Team2.jerseyNum = "17";
                player6Team2.velocityTwo = getRandomVelocity(Number(player[2]), Number(player[3]));
                player6Team2.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
                moveables.push(player6Team2);
            }
            //Player 7 Team 2
            if (i == 17) {
                let player7Team2 = new Soccer.Player();
                player7Team2.colorTeam2 = player[1];
                player7Team2.position.x = 400;
                player7Team2.position.y = 380;
                player7Team2.fixPosition.x = 400;
                player7Team2.fixPosition.y = 380;
                player7Team2.jerseyNum = "18";
                player7Team2.velocityTwo = getRandomVelocity(Number(player[2]), Number(player[3]));
                player7Team2.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
                moveables.push(player7Team2);
            }
            //Player 8 Team 2
            if (i == 18) {
                let player8Team2 = new Soccer.Player();
                player8Team2.colorTeam2 = player[1];
                player8Team2.position.x = 560;
                player8Team2.position.y = 100;
                player8Team2.fixPosition.x = 560;
                player8Team2.fixPosition.y = 100;
                player8Team2.jerseyNum = "19";
                player8Team2.velocityTwo = getRandomVelocity(Number(player[2]), Number(player[3]));
                player8Team2.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
                moveables.push(player8Team2);
            }
            //Player 9 Team 2
            if (i == 19) {
                let player9Team2 = new Soccer.Player();
                player9Team2.colorTeam2 = player[1];
                player9Team2.position.x = 560;
                player9Team2.position.y = 500;
                player9Team2.fixPosition.x = 560;
                player9Team2.fixPosition.y = 500;
                player9Team2.jerseyNum = "20";
                player9Team2.velocityTwo = getRandomVelocity(Number(player[2]), Number(player[3]));
                player9Team2.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
                moveables.push(player9Team2);
            }
            //Player 10 Team 2
            if (i == 20) {
                let player10Team2 = new Soccer.Player();
                player10Team2.colorTeam2 = player[1];
                player10Team2.position.x = 740;
                player10Team2.position.y = 230;
                player10Team2.fixPosition.x = 740;
                player10Team2.fixPosition.y = 230;
                player10Team2.jerseyNum = "21";
                player10Team2.velocityTwo = getRandomVelocity(Number(player[2]), Number(player[3]));
                player10Team2.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
                moveables.push(player10Team2);
            }
            //Player 11 Team 2
            if (i == 21) {
                let player11Team2 = new Soccer.Player();
                player11Team2.colorTeam2 = player[1];
                player11Team2.position.x = 740;
                player11Team2.position.y = 380;
                player11Team2.fixPosition.x = 740;
                player11Team2.fixPosition.y = 380;
                player11Team2.jerseyNum = "22";
                player11Team2.velocityTwo = getRandomVelocity(Number(player[2]), Number(player[3]));
                player11Team2.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
                moveables.push(player11Team2);
            }
        }
    }
    function getRandomVelocity(_min, _max) {
        let velocity = _max - _min;
        let random = Math.random();
        let multiplied = random * velocity;
        let floored = Math.floor(multiplied);
        let answer = floored + _min;
        return answer;
    }
    function getRandomPrecision(_min, _max) {
        let precision = _max - _min;
        let random = Math.random();
        let multiplied = random * precision;
        let floored = Math.floor(multiplied);
        let answer = floored + _min;
        return answer;
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
        let positionBall = ball.position;
        for (let moveable of moveables) {
            moveable.draw();
        }
        switch (Soccer.activityPlayer) {
            case Activity.FOLLOW_BALL:
                for (let moveable of moveables) {
                    moveable.move(1 / 15);
                    moveable.moveToBall(positionBall);
                }
                break;
            case Activity.BREAK_GAME:
                break;
            case Activity.CHANGE_PLAYER:
            case Activity.FLY_BALL:
                if (time == false) {
                    setTimeout(timeOut, 500);
                    time = true;
                }
                ball.move(1 / 25);
        }
    }
    function timeOut() {
        Soccer.activityPlayer = Activity.FOLLOW_BALL;
        time = false;
    }
})(Soccer || (Soccer = {}));
//# sourceMappingURL=main.js.map