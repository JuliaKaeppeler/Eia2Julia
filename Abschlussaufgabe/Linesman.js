var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Soccer;
(function (Soccer) {
    var Linesman = /** @class */ (function (_super) {
        __extends(Linesman, _super);
        function Linesman(_position) {
            var _this = _super.call(this, _position) || this;
            var x = 800 * Math.random();
            var y = 580;
            var a = -Math.random(); // Velocity
            var b = 0; // Velocity
            _this.position = new Soccer.Vector(x, y);
            _this.color = "yellow";
            if (_position)
                _this.position = _position;
            else
                _this.position = new Soccer.Vector(x, y);
            _this.velocity = new Soccer.Vector(a, b);
            return _this;
        }
        Linesman.prototype.draw = function () {
            Soccer.crc2.beginPath();
            Soccer.crc2.arc(this.position.x, this.position.y, 8, 0, 2 * Math.PI);
            Soccer.crc2.fillStyle = this.color;
            Soccer.crc2.fill();
            Soccer.crc2.closePath();
        };
        Linesman.prototype.move = function (_timeslice) {
            this.position.add(this.velocity);
            if (this.position.x + 10 > 800 || this.position.x - 5 < 0) {
                this.velocity.x = -this.velocity.x;
            }
        };
        return Linesman;
    }(Soccer.Moveable));
    Soccer.Linesman = Linesman;
})(Soccer || (Soccer = {}));
//# sourceMappingURL=Linesman.js.map