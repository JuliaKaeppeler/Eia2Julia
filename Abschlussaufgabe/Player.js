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
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        function Player(_team, _colorTeam1, _colorTeam2, _precision, _jerseyNumber, _position, _velocity) {
            var _this = _super.call(this, _position) || this;
            var x = 800 * Math.random();
            var y = 580;
            var a = -Math.random(); // Velocity
            var b = 2 * Math.random(); // Velocity
            _this.position = new Soccer.Vector(x, y);
            _this.colorTeam1 = "grey";
            _this.colorTeam2 = "purple";
            if (_position)
                _this.position = _position;
            else
                _this.position = new Soccer.Vector(x, y);
            _this.velocity = new Soccer.Vector(a, b);
            return _this;
        }
        Player.prototype.draw = function () {
            Soccer.crc2.beginPath();
            Soccer.crc2.arc(this.position.x, this.position.y, 8, 0, 2 * Math.PI);
            Soccer.crc2.fillStyle = this.colorTeam1;
            Soccer.crc2.fill();
            Soccer.crc2.closePath();
        };
        Player.prototype.move = function (_timeslice) {
            this.position.add(this.velocity);
            //mit Kollision
            if (this.position.x + 10 > 800 || this.position.x - 5 < 0) {
                this.velocity.x = -this.velocity.x;
            }
            if (this.position.y + 10 > 600 || this.position.y - 5 < 0) {
                this.velocity.y = -this.velocity.y;
            }
        };
        return Player;
    }(Soccer.Moveable));
    Soccer.Player = Player;
})(Soccer || (Soccer = {}));
//# sourceMappingURL=Player.js.map