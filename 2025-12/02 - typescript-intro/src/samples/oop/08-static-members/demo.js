"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.demoStaticMembers = demoStaticMembers;
var MathHelper_1 = require("./MathHelper");
function demoStaticMembers() {
    console.log('8. СТАТИЧЕСКИЕ ЧЛЕНЫ');
    console.log("\u041F\u043B\u043E\u0449\u0430\u0434\u044C \u043A\u0440\u0443\u0433\u0430 (r=5): ".concat(MathHelper_1.MathHelper.circleArea(5).toFixed(2)));
    console.log("\u041A\u0432\u0430\u0434\u0440\u0430\u0442 \u0447\u0438\u0441\u043B\u0430 7: ".concat(MathHelper_1.MathHelper.square(7)));
    var helper1 = new MathHelper_1.MathHelper();
    var helper2 = new MathHelper_1.MathHelper();
    console.log("\u0421\u043E\u0437\u0434\u0430\u043D\u043E \u044D\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440\u043E\u0432: ".concat(MathHelper_1.MathHelper.getInstanceCount()));
    console.log('');
}
