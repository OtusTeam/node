"use strict";
// ============================================
// 4. ДЕКОРАТОР ПАРАМЕТРА (Parameter Decorator)
// ============================================
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
exports.demoParameterDecorator = demoParameterDecorator;
// Примечание: Декораторы параметров требуют reflect-metadata
// В этом примере показана концепция
var OrderService = /** @class */ (function () {
    function OrderService() {
    }
    OrderService.prototype.createOrder = function (orderId, quantity) {
        return "\u0417\u0430\u043A\u0430\u0437 ".concat(orderId, ", \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E: ").concat(quantity);
    };
    return OrderService;
}());
exports.OrderService = OrderService;
function demoParameterDecorator() {
    console.log('\n--- 4. Декораторы параметра ---');
    console.log('Примеры декораторов параметров:');
    console.log('- @logParameter - логирование параметров');
    console.log('- @required - обязательный параметр');
    console.log('- @validate - валидация параметра');
    var service = new OrderService();
    var result = service.createOrder("ORD-123", 5);
    console.log('\nРезультат:', result);
}
