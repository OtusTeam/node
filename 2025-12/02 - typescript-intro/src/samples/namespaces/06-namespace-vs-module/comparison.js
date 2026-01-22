"use strict";
// ============================================
// 6. NAMESPACE VS MODULE
// ============================================
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringUtils = void 0;
// ========== NAMESPACE ==========
var MathUtils;
(function (MathUtils) {
    function add(a, b) {
        return a + b;
    }
    MathUtils.add = add;
    function multiply(a, b) {
        return a * b;
    }
    MathUtils.multiply = multiply;
    // Приватная функция
    function validate(n) {
        return !isNaN(n);
    }
    var Calculator = /** @class */ (function () {
        function Calculator() {
        }
        Calculator.prototype.compute = function (a, b, operation) {
            if (operation === "add")
                return add(a, b);
            return multiply(a, b);
        };
        return Calculator;
    }());
    MathUtils.Calculator = Calculator;
})(MathUtils || (MathUtils = {}));
console.log("\n--- 6. Namespace vs Module ---");
console.log("\n=== NAMESPACE ===");
console.log("Namespace add:", MathUtils.add(5, 3));
console.log("Namespace multiply:", MathUtils.multiply(4, 2));
var calc1 = new MathUtils.Calculator();
console.log("Calculator compute:", calc1.compute(10, 5, "add"));
// ========== MODULE (ES6) ==========
// Это альтернативный способ организации кода через модули
var StringUtils;
(function (StringUtils) {
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    StringUtils.capitalize = capitalize;
    function reverse(str) {
        return str.split("").reverse().join("");
    }
    StringUtils.reverse = reverse;
    var TextFormatter = /** @class */ (function () {
        function TextFormatter() {
        }
        TextFormatter.prototype.format = function (text) {
            return capitalize(text);
        };
        return TextFormatter;
    }());
    StringUtils.TextFormatter = TextFormatter;
})(StringUtils || (exports.StringUtils = StringUtils = {}));
console.log("\n=== MODULE ===");
console.log("Capitalize:", StringUtils.capitalize("hello"));
console.log("Reverse:", StringUtils.reverse("TypeScript"));
var formatter = new StringUtils.TextFormatter();
console.log("Formatter:", formatter.format("world"));
// ========== СРАВНЕНИЕ ==========
console.log("\n=== СРАВНЕНИЕ ===");
console.log("\nNAMESPACE:\n\u2713 \u0412\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u044F\u044F \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u043A\u043E\u0434\u0430\n\u2713 \u0413\u0440\u0443\u043F\u043F\u0438\u0440\u043E\u0432\u043A\u0430 \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u043E\u0439 \u043B\u043E\u0433\u0438\u043A\u0438\n\u2713 \u041F\u0440\u0438\u0432\u0430\u0442\u043D\u044B\u0435 \u0447\u043B\u0435\u043D\u044B \u0447\u0435\u0440\u0435\u0437 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 export\n\u2713 \u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0441\u043B\u0438\u044F\u043D\u0438\u0435 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0439\n\u2713 \u0413\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C \u0432\u0438\u0434\u0438\u043C\u043E\u0441\u0442\u0438\n\u2717 \u041D\u0435\u0442 tree-shaking\n\u2717 \u0421\u043B\u043E\u0436\u043D\u0435\u0435 \u0434\u043B\u044F \u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432\n\nMODULE (ES6):\n\u2713 \u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\n\u2713 Tree-shaking \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430\n\u2713 \u042F\u0432\u043D\u043E\u0435 \u0438\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435\n\u2713 \u0418\u0437\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C \u0432\u0438\u0434\u0438\u043C\u043E\u0441\u0442\u0438\n\u2713 \u041B\u0443\u0447\u0448\u0435 \u0434\u043B\u044F \u0431\u043E\u043B\u044C\u0448\u0438\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432\n\u2717 \u041D\u0435\u0442 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0441\u043B\u0438\u044F\u043D\u0438\u044F\n\u2717 \u0422\u0440\u0435\u0431\u0443\u0435\u0442 \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u043C\u043E\u0434\u0443\u043B\u0435\u0439 (webpack, etc)\n\n\u041A\u041E\u0413\u0414\u0410 \u0418\u0421\u041F\u041E\u041B\u042C\u0417\u041E\u0412\u0410\u0422\u042C NAMESPACE:\n- \u0412\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u044F\u044F \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0438\n- Type definitions (.d.ts \u0444\u0430\u0439\u043B\u044B)\n- \u041B\u0435\u0433\u0430\u0441\u0438 \u043A\u043E\u0434\n- \u041F\u0440\u043E\u0441\u0442\u044B\u0435 \u0441\u043A\u0440\u0438\u043F\u0442\u044B\n\n\u041A\u041E\u0413\u0414\u0410 \u0418\u0421\u041F\u041E\u041B\u042C\u0417\u041E\u0412\u0410\u0422\u042C MODULE:\n- \u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F\n- \u0411\u043E\u043B\u044C\u0448\u0438\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B\n- \u041A\u043E\u0433\u0434\u0430 \u043D\u0443\u0436\u0435\u043D tree-shaking\n- \u0420\u0430\u0431\u043E\u0442\u0430 \u0441 \u0432\u043D\u0435\u0448\u043D\u0438\u043C\u0438 \u043F\u0430\u043A\u0435\u0442\u0430\u043C\u0438\n");
