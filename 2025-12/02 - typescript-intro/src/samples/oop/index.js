"use strict";
// ============================================
// ООП в TypeScript - Примеры
// Object-Oriented Programming Examples
// ============================================
// 
// Все классы, интерфейсы и примеры разделены по отдельным файлам
// для лучшей организации и удобства изучения
// ============================================
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var demo_1 = require("./01-basic-class/demo");
var demo_2 = require("./02-access-modifiers/demo");
var demo_3 = require("./03-inheritance/demo");
var demo_4 = require("./04-polymorphism/demo");
var demo_5 = require("./05-abstract-classes/demo");
var demo_6 = require("./06-interfaces/demo");
var demo_7 = require("./07-getters-setters/demo");
var demo_8 = require("./08-static-members/demo");
var demo_9 = require("./09-readonly/demo");
var demo_10 = require("./10-constructor-shorthand/demo");
var demo_11 = require("./11-composition/demo");
var demo_12 = require("./12-generics/demo");
var demo_13 = require("./13-function-interfaces/demo");
var demo_14 = require("./14-indexable-types/demo");
var demo_15 = require("./15-advanced-interfaces/demo");
var demo_16 = require("./16-generic-constraints/demo");
var demo_17 = require("./17-decorators/demo");
console.log('=== ООП В TYPESCRIPT ===\n');
// Запуск всех демонстраций
function main() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0, demo_1.demoBasicClass)();
                    (0, demo_2.demoAccessModifiers)();
                    (0, demo_3.demoInheritance)();
                    (0, demo_4.demoPolymorphism)();
                    (0, demo_5.demoAbstractClasses)();
                    (0, demo_6.demoInterfaces)();
                    (0, demo_7.demoGettersSetters)();
                    (0, demo_8.demoStaticMembers)();
                    (0, demo_9.demoReadonly)();
                    (0, demo_10.demoConstructorShorthand)();
                    (0, demo_11.demoComposition)();
                    (0, demo_12.demoGenerics)();
                    (0, demo_13.demoFunctionInterfaces)();
                    (0, demo_14.demoIndexableTypes)();
                    (0, demo_15.demoAdvancedInterfaces)();
                    (0, demo_16.demoGenericConstraints)();
                    return [4 /*yield*/, (0, demo_17.demoDecorators)()];
                case 1:
                    _a.sent();
                    console.log('=== КОНЕЦ ПРИМЕРОВ ===');
                    return [2 /*return*/];
            }
        });
    });
}
main();
