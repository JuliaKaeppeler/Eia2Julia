// In Zusammenarbeit mit Karen Josten und Rebecca Räschke
namespace Soccer {

    export enum Activity {
        FOLLOW_BALL,
        FLY_BALL,
        BREAK_GAME
    }

    window.addEventListener ("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    let moveables: Moveable[] = [];
    let player: string[] = [];
    let formArrayOne: string [] = [];
    let formArrayTwo: string [] = [];
    let form: HTMLElement;
    let startButton: HTMLElement;
    let ball: Ball;
    let time: boolean = false; // timeOut


    export let activityPlayer: Activity = Activity.FOLLOW_BALL; 

    // CanvasRenderingContext wird generiert
    // crc2 bei Zeichnungen
    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        if (!canvas)
                 return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawSoccerfield(); //Soccerfield wird gezeichnet
        let soccerfield: ImageData = crc2.getImageData(0, 0, 800, 600); // Hintergrund soccefield wird gespeichert als Bild
        ball = new Ball(); // Ball erzeugen
        moveables.push(ball); // ball wird in Array moveables gepusht
        createReferee(1); // 1 Schiedsrichter wird aufgerufen
        createLinesman(1); // Hier 1, weil in der Funktion schon 2 Lienienrichter erstellt werden. 

        form = <HTMLElement>document.querySelector("form"); // form: Veränderung der Werte z.B. Trickot-Farbe verändern.
        form.addEventListener("change", handleChange); // change listener

        startButton = <HTMLElement>document.querySelector("#startButton"); // Click auf Startbutton
        startButton.addEventListener("click", createPlayer); // createPlayer wird aufgerufen

        canvas.addEventListener("click", getPositionClick); // click listener installieren wir auf dem Canvas, damit auf dem ganzen Canvas geklickt werden kann
        window.addEventListener("keydown", playSound); // keydown listener

        window.setInterval(update, 25, soccerfield); // Die Update-Funltion wird alle 25ms. aufgerufen.

        let div: HTMLElement = document.createElement("div");  // Div wird erstellt
        div.innerHTML = "Player Stats"; // Mit innerHTML wird "Player Stats" übergeben
        div.setAttribute("class", "stats"); // Klasse für das Div erstellen. class="stats"
        div.id = "stats"; // id wird erstellt. id="stats"
        document.body.appendChild(div); // Div wird an Body übergeben
    }

    // Array wird erstellt mit Name formData
    // neues FormData wird erstellt (HTML)
    // entry: jeder Eintrag im Element wird durchgegangen
    function handleChange(_event: Event): void { 
        _event.preventDefault();
        let formData: FormData = new FormData(document.forms[0]); //Index ist bei 0, da es das erste Formelement ist
        player = []; 
        for (let entry of formData.entries()) { // entry: jeder Eintrag im Element wird durchgegangen 
        player.push(String(entry[1])); // Alle Werte von player werden in das Form Array gepusht
        } 
    }

    // Click mit der Maus auf bestimmte Position
    function getPositionClick(_event: MouseEvent): void {
        let position: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop); 
        ball.target = position; // Das Ziel vom Ball ist die Position
        
        activityPlayer = Activity.FLY_BALL;
    }

    // HTMLAudioElement wird erzeugt mir dem Namen des Songs. 
    //Song wird abgespielt, wenn man auf eine Keyboardtaste drückt.
    function playSound(_event: KeyboardEvent): void {
        let audio: HTMLAudioElement = new Audio ("cant_stop_smilin.mp3");
        audio.play();
    }

    function createReferee(_refereeNumber: number): void { // Übergabeparameter refereeNumber (Der Wert der Variable ist die Anzahl der Schiedsrichter) -
            for (let i: number = 0; i < _refereeNumber; i++) { //Variable i wird immer um 1 erhöht, solange i kleiner ist als Variable refereeNumber. 
                let referee: Referee = new Referee();
                moveables.push(referee);
            }
    }

    function createLinesman(_linesmanNumber: number): void { // Übergabeparameter linesmanNumber (Der Wert der Variable ist die Anzahl der Linienrichter) 
        for (let i: number = 0; i < _linesmanNumber; i++) { // for-Schleife erstellt Linienrichter. i++ (um ein Linienrichter erhöhen bzw.linesmanNumber um eins erhöhen.) 
            let linesman1: Linesman = new Linesman(); // erstellt ersten Linienrichter
            linesman1.position.x = 800 * Math.random(); // setzt position.x von Linesman
            linesman1.position.y = 20; // setzt position.y von Linesman
            linesman1.velocity.x = Math.random(); // setzt velocity.x von Linesman auf Random
            linesman1.velocity.y = 0; // setzt velocity.y von Linesman auf 0, damit er nur horizontal läuft
            moveables.push(linesman1); //Werte des ersten Linienrichters in das Array pushen

            let linesman2: Linesman = new Linesman(); // erstellt zweiten Linienrichter
            moveables.push(linesman2); // Werte des zweiten Linienrichters in das Array pushen
        }
    }

    // Erstellung der Spieler
    function createPlayer(_event: MouseEvent): void {
        let element: HTMLInputElement = <HTMLInputElement> document.getElementById("startButton");
        element.disabled = true;
        for (let i: number = 0; i < 22; i++) {

        //Player 1 Team 1
        if (i == 0) {
            let player1Team1: Player = new Player();
            player1Team1.colorTeam1 = player[0];
            player1Team1.position.x = 60; // Position auf der x-Achse bei dem sich der Spieler befindet 
            player1Team1.position.y = 230; // Position auf der y-Achse bei dem sich der Spieler befindet 
            player1Team1.fixPosition.x = 60; // feste Startposition
            player1Team1.fixPosition.y = 230; // feste Startposition
            player1Team1.jerseyNum = "1"; //Trikot-Nummer
            player1Team1.velocityPlayer = getRandomVelocity(Number(player[2]), Number(player[3]));
            player1Team1.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
            moveables.push(player1Team1); // Spieler in moveables Array pushen
        }

        //Player 2 Team 1
        if (i == 1) {
            let player2Team1: Player = new Player();
            player2Team1.colorTeam1 = player[0];
            player2Team1.position.x = 60;
            player2Team1.position.y = 380;
            player2Team1.fixPosition.x = 60;
            player2Team1.fixPosition.y = 380;
            player2Team1.jerseyNum = "2";
            player2Team1.velocityPlayer = getRandomVelocity(Number(player[2]), Number(player[3]));
            player2Team1.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
            moveables.push(player2Team1);
        }

        //Player 3 Team 1
        if (i == 2) {
            let player3Team1: Player = new Player();
            player3Team1.colorTeam1 = player[0];
            player3Team1.position.x = 240;
            player3Team1.position.y = 100;
            player3Team1.fixPosition.x = 240;
            player3Team1.fixPosition.y = 100;
            player3Team1.jerseyNum = "3";
            player3Team1.velocityPlayer = getRandomVelocity(Number(player[2]), Number(player[3]));
            player3Team1.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
            moveables.push(player3Team1);
        }

        //Player 4 Team1
        if (i == 3) {
            let player4Team1: Player = new Player();
            player4Team1.colorTeam1 = player[0];
            player4Team1.position.x = 240;
            player4Team1.position.y = 500;
            player4Team1.fixPosition.x = 240;
            player4Team1.fixPosition.y = 500;
            player4Team1.jerseyNum = "4";
            player4Team1.velocityPlayer = getRandomVelocity(Number(player[2]), Number(player[3]));
            player4Team1.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
            moveables.push(player4Team1);
        }

        //Player 5 Team 1
        if (i == 4) {
            let player5Team1: Player = new Player();
            player5Team1.colorTeam1 = player[0];
            player5Team1.position.x = 400;
            player5Team1.position.y = 230;
            player5Team1.fixPosition.x = 400;
            player5Team1.fixPosition.y = 230;
            player5Team1.jerseyNum = "5";
            player5Team1.velocityPlayer = getRandomVelocity(Number(player[2]), Number(player[3]));
            player5Team1.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
            moveables.push(player5Team1);
        }

        //Player 6 Team 1
        if (i == 5) {
            let player6Team1: Player = new Player();
            player6Team1.colorTeam1 = player[0];
            player6Team1.position.x = 400;
            player6Team1.position.y = 530;
            player6Team1.fixPosition.x = 400;
            player6Team1.fixPosition.y = 530;
            player6Team1.jerseyNum = "6";
            player6Team1.velocityPlayer = getRandomVelocity(Number(player[2]), Number(player[3]));
            player6Team1.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
            moveables.push(player6Team1);
        }

        //Player 7 Team 1
        if (i == 6) {
            let player7Team1: Player = new Player();
            player7Team1.colorTeam1 = player[0];
            player7Team1.position.x = 560;
            player7Team1.position.y = 200;
            player7Team1.fixPosition.x = 560;
            player7Team1.fixPosition.y = 200;
            player7Team1.jerseyNum = "7";
            player7Team1.velocityPlayer = getRandomVelocity(Number(player[2]), Number(player[3]));
            player7Team1.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
            moveables.push(player7Team1);
        }

        //Player 8 Team 1
        if (i == 7) {
            let player8Team1: Player = new Player();
            player8Team1.colorTeam1 = player[0];
            player8Team1.position.x = 560;
            player8Team1.position.y = 300;
            player8Team1.fixPosition.x = 560;
            player8Team1.fixPosition.y = 300;
            player8Team1.jerseyNum = "8";
            player8Team1.velocityPlayer = getRandomVelocity(Number(player[2]), Number(player[3]));
            player8Team1.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
            moveables.push(player8Team1);
        }

        //Player 9 Team 1
        if (i == 8) {
            let player9Team1: Player = new Player();
            player9Team1.colorTeam1 = player[0];
            player9Team1.position.x = 560;
            player9Team1.position.y = 400;
            player9Team1.fixPosition.x = 560;
            player9Team1.fixPosition.y = 400;
            player9Team1.jerseyNum = "9";
            player9Team1.velocityPlayer = getRandomVelocity(Number(player[2]), Number(player[3]));
            player9Team1.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
            moveables.push(player9Team1);
        }

        //Player 10 Team 1
        if (i == 9) {
            let player10Team1: Player = new Player();
            player10Team1.colorTeam1 = player[0];
            player10Team1.position.x = 740;
            player10Team1.position.y = 80;
            player10Team1.fixPosition.x = 740;
            player10Team1.fixPosition.y = 80;
            player10Team1.jerseyNum = "10";
            player10Team1.velocityPlayer = getRandomVelocity(Number(player[2]), Number(player[3]));
            player10Team1.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
            moveables.push(player10Team1);
        }

        //Player 11 Team 1
        if (i == 10) {
            let player11Team1: Player = new Player();
            player11Team1.colorTeam1 = player[0];
            player11Team1.position.x = 740;
            player11Team1.position.y = 530;
            player11Team1.fixPosition.x = 740;
            player11Team1.fixPosition.y = 530;
            player11Team1.jerseyNum = "11";
            player11Team1.velocityPlayer = getRandomVelocity(Number(player[2]), Number(player[3]));
            player11Team1.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
            moveables.push(player11Team1);
        }

        //Player 1 Team 2
        if (i == 11) {
            let player1Team2: Player = new Player();
            player1Team2.colorTeam2 = player[1];
            player1Team2.position.x = 60;
            player1Team2.position.y = 80;
            player1Team2.fixPosition.x = 60;
            player1Team2.fixPosition.y = 80;
            player1Team2.jerseyNum = "12";
            player1Team2.velocityPlayer = getRandomVelocity(Number(player[2]), Number(player[3]));
            player1Team2.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
            moveables.push(player1Team2);
        }

        //Player 2 Team 2
        if (i == 12) {
            let player2Team2: Player = new Player();
            player2Team2.colorTeam2 = player[1];
            player2Team2.position.x = 60;
            player2Team2.position.y = 530;
            player2Team2.fixPosition.x = 60;
            player2Team2.fixPosition.y = 530;
            player2Team2.jerseyNum = "13";
            player2Team2.velocityPlayer = getRandomVelocity(Number(player[2]), Number(player[3]));
            player2Team2.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
            moveables.push(player2Team2);
        }

        //Player 3 Team 2
        if (i == 13) {
            let player3Team2: Player = new Player();
            player3Team2.colorTeam2 = player[1];
            player3Team2.position.x = 240;
            player3Team2.position.y = 200;
            player3Team2.fixPosition.x = 240;
            player3Team2.fixPosition.y = 200;
            player3Team2.jerseyNum = "14";
            player3Team2.velocityPlayer = getRandomVelocity(Number(player[2]), Number(player[3]));
            player3Team2.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
            moveables.push(player3Team2);
        }

        //Player 4 Team 2
        if (i == 14) {
            let player4Team2: Player = new Player();
            player4Team2.colorTeam2 = player[1];
            player4Team2.position.x = 240;
            player4Team2.position.y = 300;
            player4Team2.fixPosition.x = 240;
            player4Team2.fixPosition.y = 300;
            player4Team2.jerseyNum = "15";
            player4Team2.velocityPlayer = getRandomVelocity(Number(player[2]), Number(player[3]));
            player4Team2.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
            moveables.push(player4Team2);
        }

        //Player 5 Team 2
        if (i == 15) {
            let player5Team2: Player = new Player();
            player5Team2.colorTeam2 = player[1];
            player5Team2.position.x = 240;
            player5Team2.position.y = 400;
            player5Team2.fixPosition.x = 250;
            player5Team2.fixPosition.y = 400;
            player5Team2.jerseyNum = "16";
            player5Team2.velocityPlayer = getRandomVelocity(Number(player[2]), Number(player[3]));
            player5Team2.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
            moveables.push(player5Team2);
        }
        
        //Player 6 Team 2
        if (i == 16) {
            let player6Team2: Player = new Player();
            player6Team2.colorTeam2 = player[1];
            player6Team2.position.x = 400;
            player6Team2.position.y = 80;
            player6Team2.fixPosition.x = 400;
            player6Team2.fixPosition.y = 80;
            player6Team2.jerseyNum = "17";
            player6Team2.velocityPlayer = getRandomVelocity(Number(player[2]), Number(player[3]));
            player6Team2.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
            moveables.push(player6Team2);
        }

        //Player 7 Team 2
        if (i == 17) {
            let player7Team2: Player = new Player();
            player7Team2.colorTeam2 = player[1];
            player7Team2.position.x = 400;
            player7Team2.position.y = 380;
            player7Team2.fixPosition.x = 400;
            player7Team2.fixPosition.y = 380;
            player7Team2.jerseyNum = "18";
            player7Team2.velocityPlayer = getRandomVelocity(Number(player[2]), Number(player[3]));
            player7Team2.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
            moveables.push(player7Team2);
        }

        //Player 8 Team 2
        if (i == 18) {
            let player8Team2: Player = new Player();
            player8Team2.colorTeam2 = player[1];
            player8Team2.position.x = 560;
            player8Team2.position.y = 100;
            player8Team2.fixPosition.x = 560;
            player8Team2.fixPosition.y = 100;
            player8Team2.jerseyNum = "19";
            player8Team2.velocityPlayer = getRandomVelocity(Number(player[2]), Number(player[3]));
            player8Team2.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
            moveables.push(player8Team2);
        }

        //Player 9 Team 2
        if (i == 19) {
            let player9Team2: Player = new Player();
            player9Team2.colorTeam2 = player[1];
            player9Team2.position.x = 560;
            player9Team2.position.y = 500;
            player9Team2.fixPosition.x = 560;
            player9Team2.fixPosition.y = 500;
            player9Team2.jerseyNum = "20";
            player9Team2.velocityPlayer = getRandomVelocity(Number(player[2]), Number(player[3]));
            player9Team2.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
            moveables.push(player9Team2);
        }

        //Player 10 Team 2
        if (i == 20) {
            let player10Team2: Player = new Player();
            player10Team2.colorTeam2 = player[1];
            player10Team2.position.x = 740;
            player10Team2.position.y = 230;
            player10Team2.fixPosition.x = 740;
            player10Team2.fixPosition.y = 230;
            player10Team2.jerseyNum = "21";
            player10Team2.velocityPlayer = getRandomVelocity(Number(player[2]), Number(player[3]));
            player10Team2.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
            moveables.push(player10Team2);
        }

        //Player 11 Team 2
        if (i == 21) {
            let player11Team2: Player = new Player();
            player11Team2.colorTeam2 = player[1];
            player11Team2.position.x = 740;
            player11Team2.position.y = 380;
            player11Team2.fixPosition.x = 740;
            player11Team2.fixPosition.y = 380;
            player11Team2.jerseyNum = "22";
            player11Team2.velocityPlayer = getRandomVelocity(Number(player[2]), Number(player[3]));
            player11Team2.precision = getRandomPrecision(Number(player[4]), Number(player[5]));
            moveables.push(player11Team2);
        }
    }

        let form: HTMLFormElement = document.createElement("form"); // HTMLFormElement wirdd erstelt
        document.body.appendChild(form); // und an body übergeben

        let fieldset: HTMLFieldSetElement = document.createElement("fieldset");
        form.appendChild(fieldset);

        let legend: HTMLElement = document.createElement("legend");
        legend.innerHTML = "Team 1";
        fieldset.appendChild(legend);

        let selectPlayerTeam1: HTMLSelectElement = document.createElement("select");
        selectPlayerTeam1.setAttribute("id", "selectPlayerTeam1");
        selectPlayerTeam1.addEventListener("change", showPlayerStats1); 
        selectPlayerTeam1.name = "team1Selection";
        fieldset.appendChild(selectPlayerTeam1);
        
        for (let i: number = 0; i < 12; i++) {
            let option: HTMLOptionElement = document.createElement("option");
            option.value = i + "";
            if (i == 0) {
                option.text = "Choose Player";
                selectPlayerTeam1.add(option);
            }
            else {
                option.text = "Player " + i;
                selectPlayerTeam1.add(option);
            }
        }
        
        let form2: HTMLFormElement = document.createElement("form");
        selectPlayerTeam1.setAttribute("id", "selectPlayerTeam2");
        form2.classList.add("hallo");
        document.body.appendChild(form2);

        let fieldset2: HTMLFieldSetElement = document.createElement("fieldset");
        form2.appendChild(fieldset2);

        let legend2: HTMLElement = document.createElement("legend");
        legend2.innerHTML = "Team 2";
        fieldset2.appendChild(legend2);

        let selectPlayerTeam2: HTMLSelectElement = document.createElement("select");
        selectPlayerTeam2.addEventListener("change", showPlayerStats2);
        selectPlayerTeam2.classList.add("selectClass2");
        selectPlayerTeam2.name = "team2Selection";
        fieldset2.appendChild(selectPlayerTeam2);
        for (let i: number = 11; i < 23; i++) {
            let option: HTMLOptionElement = document.createElement("option");
            option.value = i + "";

            if (i == 11) {
                option.text = "Choose Player";
                selectPlayerTeam2.add(option);
            }
            else {
                option.text = "Player " + i;
                selectPlayerTeam2.add(option);
            }
        }   

        let div: HTMLDivElement = document.createElement("div");
        div.setAttribute("class", "reference");
        document.body.appendChild(div);
        div.appendChild(form);
        div.appendChild(form2); 
}

    function showPlayerStats1(_event: Event): void {
        
        let div: HTMLDivElement = <HTMLDivElement>document.getElementById("stats");

        _event.preventDefault(); //
        let formData: FormData = new FormData(document.forms[1]);
        formArrayOne = [];

        for (let entry of formData) {
            formArrayOne.push(String(entry[1]));

        }
        
        for (let i: number = 0; i < moveables.length; i++) {
            let player: Moveable = moveables[i];
            if (player instanceof Player) {
                if (player.jerseyNum == formArrayOne[0]) {
                    div.innerHTML = "Jersey Number " + player.jerseyNum + "<br> Position X " + Math.floor(player.position.x) + "<br> Position Y " + Math.floor(player.position.y) + "<br> Jersey Color " + player.colorTeam1 + "<br> Velocity " + player.velocityPlayer + "<br> Precision " + player.precision + "<br>";
                }
            }
        }

        let buttonDeletePlayerTeam1: HTMLButtonElement = document.createElement("button");
        buttonDeletePlayerTeam1.innerHTML = "Remove Player";
        div.appendChild(buttonDeletePlayerTeam1);

        buttonDeletePlayerTeam1.addEventListener("click", deleteTeam1Player);
    }

    function showPlayerStats2(_event: Event): void {
        let div: HTMLDivElement = <HTMLDivElement>document.getElementById("stats"); //"stats" -> Form

        _event.preventDefault();
        let formData: FormData = new FormData(document.forms[2]);
        formArrayTwo = [];
    
        for (let entry of formData) {
            formArrayTwo.push(String(entry[1]));
    
        }
        
        for (let i: number = 0; i < moveables.length; i++) {
            let player: Moveable = moveables[i];
            if (player instanceof Player) {
                if (player.jerseyNum == formArrayTwo[0]) {
                    div.innerHTML = "Jersey Number " + player.jerseyNum + "<br> Position X " + Math.floor(player.position.x) + "<br> Position Y " + Math.floor(player.position.y) + "<br> Jersey Color " + player.colorTeam2 + "<br> Velocity " + player.velocityPlayer + "<br> Precision " + player.precision + "<br>";
                }
            }
        }

        let buttonDeleteTeam2: HTMLButtonElement = document.createElement("button");
        buttonDeleteTeam2.innerHTML = "Remove Player";
        div.appendChild(buttonDeleteTeam2);

        buttonDeleteTeam2.addEventListener("click", deleteTeam2Player);

    }

    // Spieler aus Team 1 wird gelöscht
    function deleteTeam1Player(_event: MouseEvent): void {
        for (let b: number = 0; b < moveables.length; b++) {
            let player1: Moveable = moveables[b];
            //wenn player1 eine instanceof Player ist
            if (player1 instanceof Player) { 
                    if (player1.jerseyNum == formArrayOne[0] && player1.colorTeam1) {
                    moveables.splice(b, 1);
                }
            }
        }
    }

    //Spieler aus Team zwei wird gelöscht
    function deleteTeam2Player(_event: MouseEvent): void {
        for (let b: number = 0; b < moveables.length; b++) {
            let player2: Moveable = moveables[b];
            //wenn player2 eine instanceof Player ist
            if (player2 instanceof Player) { 
                if (player2.jerseyNum == formArrayTwo[0] && player2.colorTeam2) {
                moveables.splice(b, 1);
                }
            }
        }
    }

    //Berechnung der random Velocity
    function getRandomVelocity(_min: number, _max: number): number {
        let velocity: number = _max - _min;
        let random: number = Math.random();
        let multiplied: number = random * velocity;
        let floored: number = Math.floor(multiplied);
        let answer: number = floored + _min;
        return answer;
    }

    // Berechnung der random Präzision
    function getRandomPrecision(_min: number, _max: number): number {
        let precision: number = _max - _min;
        let random: number = Math.random();
        let multiplied: number = random * precision;
        let floored: number = Math.floor(multiplied);
        let answer: number = floored + _min;
        return answer;
    }


    function drawSoccerfield(): void {
        // gras
        crc2.beginPath();
        crc2.fillStyle = "green";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.closePath();
        // center line
        crc2.beginPath();
        crc2.moveTo(crc2.canvas.width / 2, 0);
        crc2.lineTo(crc2.canvas.width / 2, 600);
        crc2.strokeStyle = "white";
        crc2.stroke();
        crc2.closePath();
        //center circle
        crc2.beginPath();
        crc2.arc(crc2.canvas.width / 2, crc2.canvas.height / 2, 100, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.closePath();
        //center point
        crc2.beginPath();
        crc2.arc(crc2.canvas.width / 2, crc2.canvas.height / 2, 5, 0, 2 * Math.PI);
        crc2.fillStyle = "white";
        crc2.fill();
        crc2.closePath();
        // goal area right
        crc2.beginPath();
        crc2.moveTo(crc2.canvas.width, crc2.canvas.height / 2 - 50);
        crc2.lineTo(crc2.canvas.width - 50, crc2.canvas.height / 2 - 50);
        crc2.lineTo(crc2.canvas.width - 50, crc2.canvas.height / 2 + 50);
        crc2.lineTo(crc2.canvas.width, crc2.canvas.height / 2 + 50);
        crc2.strokeStyle = "white";
        crc2.stroke();
        crc2.closePath();
        // penalty area right
        crc2.beginPath();
        crc2.moveTo(crc2.canvas.width, crc2.canvas.height / 2 - 150);
        crc2.lineTo(crc2.canvas.width - 150, crc2.canvas.height / 2 - 150);
        crc2.lineTo(crc2.canvas.width - 150, crc2.canvas.height / 2 + 150);
        crc2.lineTo(crc2.canvas.width, crc2.canvas.height / 2 + 150);
        crc2.strokeStyle = "white";
        crc2.stroke();
        crc2.closePath();
        //semicircle right
        crc2.beginPath();
        crc2.arc(670, crc2.canvas.height / 2, 60, 1.9, 1.39 * Math.PI);
        crc2.strokeStyle = "white";
        crc2.stroke();
        crc2.closePath();
        // goal area left
        crc2.beginPath();
        crc2.moveTo(0, crc2.canvas.height / 2 - 50);
        crc2.lineTo(0 + 50, crc2.canvas.height / 2 - 50);
        crc2.lineTo(0 + 50, crc2.canvas.height / 2 + 50);
        crc2.lineTo(0, crc2.canvas.height / 2 + 50);
        crc2.strokeStyle = "white";
        crc2.stroke();
        crc2.closePath();
        // penalty area left
        crc2.beginPath();
        crc2.moveTo(0, crc2.canvas.height / 2 - 150);
        crc2.lineTo(0 + 150, crc2.canvas.height / 2 - 150);
        crc2.lineTo(0 + 150, crc2.canvas.height / 2 + 150);
        crc2.lineTo(0, crc2.canvas.height / 2 + 150);
        crc2.strokeStyle = "white";
        crc2.stroke();
        crc2.closePath();
        //semicircle left
        crc2.beginPath();
        crc2.arc(130, 300, 60, 5.05, 2.39 *  Math.PI); 
        crc2.strokeStyle = "white";
        crc2.stroke();
        crc2.closePath();
    }
    

    function update(_soccerfield: ImageData): void {  
        crc2.putImageData(_soccerfield, 0, 0); // Hintergrund wird als Bild eingefügt
        let positionBall: Vector = ball.position; // positiobBall wird die ball.position zugewiesen

        for (let moveable of moveables) { //moveables[] wird durchgegangen
            moveable.draw(); // und hier wird alles gezeichnet was in dem Array ist
        }  
        switch (activityPlayer) { 
            case Activity.FOLLOW_BALL:
                for (let moveable of moveables) {
                    moveable.move(1 / 15);
                    moveable.moveToBall(positionBall);
                   }        
                break;
            case Activity.BREAK_GAME:
                break;
            case Activity.FLY_BALL: // wenn Spieler sich beim Ball befindet, dann rufen wir FLY_BALL auf. 
                if (time == false) { // Wenn time(false) == false
                setTimeout(timeOut, 500); // Damit der Spieler nicht direkt zum Ball rennt, artet er 500 ms. // Nach 500ms wird timeOut aufgerufen
                time = true; 
            }
                ball.move(1 / 25);
        }
    }

    function timeOut(): void { 
        activityPlayer = Activity.FOLLOW_BALL; 
        time = false; 
    }
}
