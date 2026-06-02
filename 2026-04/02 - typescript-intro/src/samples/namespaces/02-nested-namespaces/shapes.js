// ============================================
// 2. ВЛОЖЕННЫЕ NAMESPACES
// ============================================
var Shapes;
(function (Shapes) {
    // Вложенный namespace для 2D фигур
    var TwoDimensional;
    (function (TwoDimensional) {
        var Circle = /** @class */ (function () {
            function Circle(center, radius) {
                this.center = center;
                this.radius = radius;
            }
            Circle.prototype.area = function () {
                return Math.PI * this.radius * this.radius;
            };
            Circle.prototype.perimeter = function () {
                return 2 * Math.PI * this.radius;
            };
            return Circle;
        }());
        TwoDimensional.Circle = Circle;
        var Rectangle = /** @class */ (function () {
            function Rectangle(width, height) {
                this.width = width;
                this.height = height;
            }
            Rectangle.prototype.area = function () {
                return this.width * this.height;
            };
            Rectangle.prototype.perimeter = function () {
                return 2 * (this.width + this.height);
            };
            return Rectangle;
        }());
        TwoDimensional.Rectangle = Rectangle;
    })(TwoDimensional = Shapes.TwoDimensional || (Shapes.TwoDimensional = {}));
    // Вложенный namespace для 3D фигур
    var ThreeDimensional;
    (function (ThreeDimensional) {
        var Sphere = /** @class */ (function () {
            function Sphere(center, radius) {
                this.center = center;
                this.radius = radius;
            }
            Sphere.prototype.volume = function () {
                return (4 / 3) * Math.PI * Math.pow(this.radius, 3);
            };
            Sphere.prototype.surfaceArea = function () {
                return 4 * Math.PI * Math.pow(this.radius, 2);
            };
            return Sphere;
        }());
        ThreeDimensional.Sphere = Sphere;
        var Cube = /** @class */ (function () {
            function Cube(sideLength) {
                this.sideLength = sideLength;
            }
            Cube.prototype.volume = function () {
                return Math.pow(this.sideLength, 3);
            };
            Cube.prototype.surfaceArea = function () {
                return 6 * Math.pow(this.sideLength, 2);
            };
            return Cube;
        }());
        ThreeDimensional.Cube = Cube;
    })(ThreeDimensional = Shapes.ThreeDimensional || (Shapes.ThreeDimensional = {}));
})(Shapes || (Shapes = {}));
// Использование вложенных namespaces
console.log("\n--- 2. Вложенные namespaces ---");
var circle = new Shapes.TwoDimensional.Circle({ x: 0, y: 0 }, 5);
console.log("2D Circle - Площадь:", circle.area().toFixed(2));
console.log("2D Circle - Периметр:", circle.perimeter().toFixed(2));
var rectangle = new Shapes.TwoDimensional.Rectangle(10, 5);
console.log("2D Rectangle - Площадь:", rectangle.area());
console.log("2D Rectangle - Периметр:", rectangle.perimeter());
var sphere = new Shapes.ThreeDimensional.Sphere({ x: 0, y: 0, z: 0 }, 5);
console.log("3D Sphere - Объём:", sphere.volume().toFixed(2));
console.log("3D Sphere - Площадь поверхности:", sphere.surfaceArea().toFixed(2));
var cube = new Shapes.ThreeDimensional.Cube(4);
console.log("3D Cube - Объём:", cube.volume());
console.log("3D Cube - Площадь поверхности:", cube.surfaceArea());
