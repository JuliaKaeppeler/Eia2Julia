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
    var Daisy = /** @class */ (function (_super) {
        __extends(Daisy, _super);
        function Daisy(_position) {
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
        Daisy.prototype.draw = function () {
            //Stiel
            meadow.crc2.beginPath();
            meadow.crc2.rect(this.position.x, this.position.y, 3, 60);
            meadow.crc2.fillStyle = "darkgreen";
            meadow.crc2.fill();
            meadow.crc2.closePath();
            //Stielblatt links
            meadow.crc2.beginPath();
            meadow.crc2.arc(this.position.x - 3, this.position.y + 30, 10, 45, Math.PI);
            meadow.crc2.fillStyle = "darkgreen";
            meadow.crc2.fill();
            meadow.crc2.closePath();
            //Blütenblätter
            meadow.crc2.beginPath();
            meadow.crc2.arc(this.position.x + 10, this.position.y, 15, 0, 2 * Math.PI);
            meadow.crc2.arc(this.position.x, this.position.y + 10, 15, 0, 2 * Math.PI);
            meadow.crc2.arc(this.position.x - 10, this.position.y, 15, 0, 2 * Math.PI);
            meadow.crc2.arc(this.position.x, this.position.y - 10, 15, 0, 2 * Math.PI);
            meadow.crc2.fillStyle = "white";
            meadow.crc2.fill();
            meadow.crc2.closePath();
            //Mitte
            meadow.crc2.beginPath();
            meadow.crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            meadow.crc2.fillStyle = "yellow";
            meadow.crc2.fill();
            meadow.crc2.closePath();
            // Füllstand
            meadow.crc2.beginPath();
            meadow.crc2.fillStyle = "white";
            meadow.crc2.fillRect(this.position.x + 25, this.position.y - 10, 10, 0 - this.nectarLiter);
            meadow.crc2.closePath();
        };
        return Daisy;
    }(meadow.Flower));
    meadow.Daisy = Daisy;
})(meadow || (meadow = {}));
//# sourceMappingURL=Daisy.js.map