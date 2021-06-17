var meadow;
(function (meadow) {
    var Flower = /** @class */ (function () {
        function Flower(_position) {
            var x = 1000 * Math.random();
            var y = 150 * Math.random() + 620 * meadow.goldenCut;
            this.position = new meadow.Vector(x, y);
            this.nectarLiter = 0;
        }
        Flower.prototype.draw = function () {
            //draw
        };
        Flower.prototype.fillNectar = function () {
            console.log("fill Nectar");
            if (this.nectarLiter < 20) {
                this.nectarLiter += 0.02;
            }
        };
        return Flower;
    }());
    meadow.Flower = Flower;
})(meadow || (meadow = {}));
//# sourceMappingURL=Flower.js.map