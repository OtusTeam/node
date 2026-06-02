"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.demoAbstractClasses = demoAbstractClasses;
var Rectangle_1 = require("./Rectangle");
var Circle_1 = require("./Circle");
function demoAbstractClasses() {
    console.log('5. АБСТРАКТНЫЕ КЛАССЫ');
    var rectangle = new Rectangle_1.Rectangle(10, 5);
    console.log('Прямоугольник:');
    rectangle.describe();
    var circle = new Circle_1.Circle(7);
    console.log('Круг:');
    circle.describe();
    console.log('');
}
