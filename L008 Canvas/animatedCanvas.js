var generativeArt;
(function (generativeArt) {
    window.addEventListener("load", handleLoad);
    var crc2;
    function handleLoad(_event) {
        var canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
    }
    var x = Math.random() * 700;
    var y = Math.random() * 500;
    var dx = 4;
    var dy = 4;
    var radius = 30;
    function animate() {
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
})(generativeArt || (generativeArt = {}));
//# sourceMappingURL=animatedCanvas.js.map