// ============================================
// 1. БАЗОВЫЙ NAMESPACE
// ============================================
var Geometry;
(function (Geometry) {
    // Экспортируемые функции доступны снаружи
    function calculateCircleArea(radius) {
        return Math.PI * radius * radius;
    }
    Geometry.calculateCircleArea = calculateCircleArea;
    function calculateRectangleArea(width, height) {
        return width * height;
    }
    Geometry.calculateRectangleArea = calculateRectangleArea;
    // Приватная функция - доступна только внутри namespace
    function validatePositive(value) {
        return value > 0;
    }
    function calculateTriangleArea(base, height) {
        if (!validatePositive(base) || !validatePositive(height)) {
            throw new Error("Значения должны быть положительными");
        }
        return (base * height) / 2;
    }
    Geometry.calculateTriangleArea = calculateTriangleArea;
    // Константы
    Geometry.PI = Math.PI;
    Geometry.E = Math.E;
})(Geometry || (Geometry = {}));
// Использование namespace
console.log("\n--- 1. Базовый namespace ---");
console.log("Площадь круга (r=5):", Geometry.calculateCircleArea(5));
console.log("Площадь прямоугольника (10x5):", Geometry.calculateRectangleArea(10, 5));
console.log("Площадь треугольника (6x4):", Geometry.calculateTriangleArea(6, 4));
console.log("PI:", Geometry.PI);
// Приватная функция недоступна
// Geometry.validatePositive(5); // ❌ Error
