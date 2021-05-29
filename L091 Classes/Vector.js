var meadow;
(function (meadow) {
    var Vector = /** @class */ (function () {
        function Vector(_x, _y) {
            this.set(_x, _y);
        }
        Vector.prototype.set = function (_x, _y) {
            this.x = _x;
            this.y = _y;
        };
        Vector.prototype.scale = function (_factor) {
            this.x *= _factor;
            this.y *= _factor;
        };
        Vector.prototype.add = function (_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        };
        // Geschwindigkeit zufällig berechnen & Richtung festlegen
        Vector.prototype.random = function (_minLength, _maxLength) {
            var length = _minLength = Math.random() * (_maxLength - _minLength);
            // this.set(0, 10);
            this.scale(length);
        };
        return Vector;
    }());
    meadow.Vector = Vector;
})(meadow || (meadow = {}));
//# sourceMappingURL=Vector.js.map