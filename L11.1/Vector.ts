namespace meadow {
    export class Vector {
        public x: number;
        public y: number;

        constructor(_x: number, _y: number) {
            this.set(_x, _y);
        }

        public set(_x: number, _y: number): void {
            this.x = _x;
            this.y = _y;
        }

        public scale(_factor: number): void {
            this.x *= _factor; 
            this.y *= _factor;
        }

        public add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }

        // Geschwindigkeit zufällig berechnen & Richtung festlegen
        // random(_minLength: number, _maxLength: number): void {
        //     let length: number = _minLength = Math.random() * (_maxLength - _minLength);

           // this.set(0, 10);
            // this.scale(length);
        // }
    }
}