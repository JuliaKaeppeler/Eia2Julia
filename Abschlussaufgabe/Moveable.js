var Soccer;
(function (Soccer) {
    var Moveable = /** @class */ (function () {
        function Moveable(_position) {
            //Velocity?
            var x = 800 * Math.random();
            var y = 600 * Math.random();
            this.position = new Soccer.Vector(x, y);
        }
        Moveable.prototype.move = function (_timeslice) {
            this.position.add(this.velocity);
            //mit Kollision
            if (this.position.x + 10 > 800 || this.position.x - 5 < 0) {
                this.velocity.x = -this.velocity.x;
            }
            if (this.position.y + 10 > 600 || this.position.y - 5 < 0) {
                this.velocity.y = -this.velocity.y;
            }
        };
        Moveable.prototype.draw = function () {
            // Test
        };
        return Moveable;
    }());
    Soccer.Moveable = Moveable;
})(Soccer || (Soccer = {}));
//# sourceMappingURL=Moveable.js.map