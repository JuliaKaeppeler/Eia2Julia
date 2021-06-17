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
var meadow;
(function (meadow) {
    var Cloud = /** @class */ (function (_super) {
        __extends(Cloud, _super);
        function Cloud(_size, _position) {
            var _this = _super.call(this, _position) || this;
            var x = 1000 * Math.random();
            var y = 50;
            // this.position = new Vector(x, y);
            // this.size = 50;
            // Geschwindigkeit und Richtung
            var a = -Math.random();
            // this.velocity = new Vector(a, 0); 
            if (_position)
                _this.position = _position;
            else
                _this.position = new meadow.Vector(x, y);
            if (_size)
                _this.size = _size;
            else
                _this.size = 50;
            return _this;
        }
        Cloud.prototype.draw = function () {
            meadow.crc2.fillStyle = "white";
            meadow.crc2.beginPath();
            meadow.crc2.arc(this.position.x + 50, this.position.y, this.size, 0, 2 * Math.PI);
            meadow.crc2.fill();
            meadow.crc2.closePath();
            meadow.crc2.beginPath();
            meadow.crc2.arc(this.position.x, this.position.y + 50, this.size, 0, 2 * Math.PI);
            meadow.crc2.fill();
            meadow.crc2.closePath();
            meadow.crc2.beginPath();
            meadow.crc2.arc(this.position.x + 130, this.position.y, this.size, 0, 2 * Math.PI);
            meadow.crc2.fill();
            meadow.crc2.closePath();
            meadow.crc2.beginPath();
            meadow.crc2.arc(this.position.x + 210, this.position.y + 50, this.size, 0, 2 * Math.PI);
            meadow.crc2.fill();
            meadow.crc2.closePath();
            meadow.crc2.beginPath();
            meadow.crc2.arc(this.position.x + 150, this.position.y + 80, this.size, 0, 2 * Math.PI);
            meadow.crc2.fill();
            meadow.crc2.closePath();
            meadow.crc2.beginPath();
            meadow.crc2.arc(this.position.x + 80, this.position.y + 80, this.size, 0, 2 * Math.PI);
            meadow.crc2.fill();
            meadow.crc2.closePath();
        };
        return Cloud;
    }(meadow.Moveable));
    meadow.Cloud = Cloud;
})(meadow || (meadow = {}));
//# sourceMappingURL=Cloud.js.map