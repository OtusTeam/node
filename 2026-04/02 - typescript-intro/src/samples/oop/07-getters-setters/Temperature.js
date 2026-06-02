"use strict";
// ============================================
// 7. ГЕТТЕРЫ И СЕТТЕРЫ (Getters and Setters)
// ============================================
Object.defineProperty(exports, "__esModule", { value: true });
exports.Temperature = void 0;
var Temperature = /** @class */ (function () {
    function Temperature(celsius) {
        this._celsius = celsius;
    }
    Object.defineProperty(Temperature.prototype, "celsius", {
        // Getter
        get: function () {
            return this._celsius;
        },
        // Setter
        set: function (value) {
            if (value < -273.15) {
                console.log('Температура не может быть ниже абсолютного нуля');
                return;
            }
            this._celsius = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Temperature.prototype, "fahrenheit", {
        get: function () {
            return this._celsius * 9 / 5 + 32;
        },
        set: function (value) {
            this._celsius = (value - 32) * 5 / 9;
        },
        enumerable: false,
        configurable: true
    });
    return Temperature;
}());
exports.Temperature = Temperature;
