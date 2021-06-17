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
    var Rose = /** @class */ (function (_super) {
        __extends(Rose, _super);
        function Rose(_position) {
            var _this = _super.call(this, _position) || this;
            var x = 1000 * Math.random();
            var y = 150 * Math.random() + 620 * meadow.goldenCut;
            //this.position = new Vector(x, y);
            _this.nectarLiter = 0;
            if (_position)
                _this.position = _position;
            else
                _this.position = new meadow.Vector(x, y);
            return _this;
        }
        Rose.prototype.draw = function () {
            //Stiel
            meadow.crc2.beginPath();
            meadow.crc2.rect(this.position.x, this.position.y, 3, 60);
            meadow.crc2.fillStyle = "darkgreen";
            meadow.crc2.fill();
            meadow.crc2.closePath();
            //Stielblatt rechts
            meadow.crc2.beginPath();
            meadow.crc2.moveTo(this.position.x, this.position.y + 30);
            meadow.crc2.quadraticCurveTo(this.position.x + 15, this.position.y + 5, this.position.x + 0, this.position.y + 40);
            meadow.crc2.quadraticCurveTo(this.position.x - 15, this.position.y + 5, this.position.x + 4, this.position.y + 30);
            meadow.crc2.fillStyle = "darkgreen";
            meadow.crc2.fill();
            meadow.crc2.closePath();
            // Halbkreis
            meadow.crc2.beginPath();
            meadow.crc2.arc(this.position.x, this.position.y, 15, 0, Math.PI);
            meadow.crc2.fillStyle = "red";
            meadow.crc2.fill();
            meadow.crc2.closePath();
            //Blüte
            meadow.crc2.beginPath();
            meadow.crc2.moveTo(this.position.x + 15, this.position.y + 1);
            meadow.crc2.lineTo(this.position.x + 5, this.position.y - 15);
            meadow.crc2.lineTo(this.position.x + 0, this.position.y - 10);
            meadow.crc2.lineTo(this.position.x - 5, this.position.y - 15);
            meadow.crc2.lineTo(this.position.x - 15, this.position.y + 1);
            meadow.crc2.fillStyle = "red";
            meadow.crc2.fill();
            meadow.crc2.restore();
            meadow.crc2.closePath();
            // Füllstand
            meadow.crc2.beginPath();
            meadow.crc2.fillStyle = "red";
            meadow.crc2.fillRect(this.position.x + 20, this.position.y - 10, 10, 0 - this.nectarLiter);
            meadow.crc2.closePath();
        };
        return Rose;
    }(meadow.Flower));
    meadow.Rose = Rose;
})(meadow || (meadow = {}));
//# sourceMappingURL=Rose.js.map