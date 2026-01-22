"use strict";
// ============================================
// 7. КЛАССЫ (Classes)
// ============================================
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = exports.Circle = void 0;
exports.demoClasses = demoClasses;
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    Circle.prototype.getPerimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    return Circle;
}());
exports.Circle = Circle;
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.getPerimeter = function () {
        return 2 * (this.width + this.height);
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
function demoClasses() {
    console.log('7. КЛАССЫ (Classes)');
    var circle = new Circle(5);
    console.log('Circle area:', circle.getArea().toFixed(2));
    var rectangle = new Rectangle(10, 5);
    console.log('Rectangle area:', rectangle.getArea());
    console.log('✅ Interface: рекомендуется для контрактов');
    console.log('✅ Type: тоже работает\n');
}
