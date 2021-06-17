var meadow;
(function (meadow) {
    var Moveable = /** @class */ (function () {
        function Moveable(_position) {
            var x = 1000 * Math.random();
            var y = 50;
            this.position = new meadow.Vector(x, y);
            this.size = 50;
            // Geschwindigkeit und Richtung
            var a = -Math.random();
            this.velocity = new meadow.Vector(a, 0);
        }
        Moveable.prototype.move = function (_timeslice) {
            this.position.add(this.velocity);
            if (this.position.x + this.size > 1000 || this.position.x - this.size < 0) {
                this.velocity.x = -this.velocity.x;
            }
        };
        Moveable.prototype.draw = function () {
            //
        };
        return Moveable;
    }());
    meadow.Moveable = Moveable;
})(meadow || (meadow = {}));
//# sourceMappingURL=Moveable.js.map