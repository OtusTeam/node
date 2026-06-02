"use strict";
// ============================================
// 6. МНОЖЕСТВЕННЫЕ ДЕКОРАТОРЫ (Multiple Decorators)
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
exports.MathService = void 0;
exports.demoMultipleDecorators = demoMultipleDecorators;
// Порядок выполнения декораторов: снизу вверх для методов
function first() {
    console.log('first(): фабрика декоратора');
    return function (target, propertyKey, descriptor) {
        console.log('first(): вызов декоратора');
    };
}
function second() {
    console.log('second(): фабрика декоратора');
    return function (target, propertyKey, descriptor) {
        console.log('second(): вызов декоратора');
    };
}
// Декоратор для кэширования результата
function memoize(target, propertyKey, descriptor) {
    var originalMethod = descriptor.value;
    var cache = new Map(); // eslint-disable-line @typescript-eslint/no-explicit-any
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var key = JSON.stringify(args);
        if (cache.has(key)) {
            console.log("\u0412\u043E\u0437\u0432\u0440\u0430\u0442 \u0438\u0437 \u043A\u044D\u0448\u0430 \u0434\u043B\u044F ".concat(propertyKey, "(").concat(args, ")"));
            return cache.get(key);
        }
        var result = originalMethod.apply(this, args);
        cache.set(key, result);
        console.log("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D \u0432 \u043A\u044D\u0448 \u0434\u043B\u044F ".concat(propertyKey, "(").concat(args, ")"));
        return result;
    };
    return descriptor;
}
// Декоратор для повторных попыток
function retry(times) {
    return function (target, propertyKey, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return __awaiter(this, void 0, void 0, function () {
                var i, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            i = 0;
                            _a.label = 1;
                        case 1:
                            if (!(i < times)) return [3 /*break*/, 6];
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 4, , 5]);
                            return [4 /*yield*/, originalMethod.apply(this, args)];
                        case 3: return [2 /*return*/, _a.sent()];
                        case 4:
                            e_1 = _a.sent();
                            console.log("\u041F\u043E\u043F\u044B\u0442\u043A\u0430 ".concat(i + 1, " \u043D\u0435 \u0443\u0434\u0430\u043B\u0430\u0441\u044C"));
                            if (i === times - 1)
                                throw e_1;
                            return [3 /*break*/, 5];
                        case 5:
                            i++;
                            return [3 /*break*/, 1];
                        case 6: return [2 /*return*/];
                    }
                });
            });
        };
        return descriptor;
    };
}
var MathService = /** @class */ (function () {
    function MathService() {
        this.cache = new Map();
    }
    MathService.prototype.simpleMethod = function () {
        console.log('Выполнение simpleMethod');
    };
    MathService.prototype.fibonacci = function (n) {
        var key = "fib_".concat(n);
        if (this.cache.has(key)) {
            console.log("\u0412\u043E\u0437\u0432\u0440\u0430\u0442 \u0438\u0437 \u043A\u044D\u0448\u0430 \u0434\u043B\u044F fibonacci(".concat(n, ")"));
            return this.cache.get(key);
        }
        var result;
        if (n <= 1) {
            result = n;
        }
        else {
            result = this.fibonacci(n - 1) + this.fibonacci(n - 2);
        }
        this.cache.set(key, result);
        console.log("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D \u0432 \u043A\u044D\u0448 \u0434\u043B\u044F fibonacci(".concat(n, ")"));
        return result;
    };
    return MathService;
}());
exports.MathService = MathService;
function demoMultipleDecorators() {
    console.log('\n--- 6. Множественные декораторы ---');
    console.log('Примеры множественных декораторов:');
    console.log('- Порядок: снизу вверх для методов');
    console.log('- @first @second - порядок выполнения');
    console.log('- @memoize - кэширование результатов');
    var service = new MathService();
    service.simpleMethod();
    console.log('\nМемоизация (кэширование):');
    console.log('fib(5) =', service.fibonacci(5));
    console.log('fib(5) снова =', service.fibonacci(5)); // Из кэша
    console.log('fib(6) =', service.fibonacci(6));
}
