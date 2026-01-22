// ============================================
// 4. ПСЕВДОНИМЫ NAMESPACES
// ============================================
var CompanyName;
(function (CompanyName) {
    var ProductA;
    (function (ProductA) {
        var Features;
        (function (Features) {
            var Advanced;
            (function (Advanced) {
                var DataProcessor = /** @class */ (function () {
                    function DataProcessor() {
                    }
                    DataProcessor.prototype.process = function (data) {
                        return "\u041E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043E: ".concat(data.toUpperCase());
                    };
                    return DataProcessor;
                }());
                Advanced.DataProcessor = DataProcessor;
                function formatData(data) {
                    return "[FORMATTED] ".concat(data);
                }
                Advanced.formatData = formatData;
            })(Advanced = Features.Advanced || (Features.Advanced = {}));
        })(Features = ProductA.Features || (ProductA.Features = {}));
    })(ProductA = CompanyName.ProductA || (CompanyName.ProductA = {}));
})(CompanyName || (CompanyName = {}));
// Использование без псевдонима - очень длинно!
var processor1 = new CompanyName.ProductA.Features.Advanced.DataProcessor();
console.log("\n--- 4. Псевдонимы namespaces ---");
console.log("Без псевдонима:", processor1.process("test data"));
// Создание псевдонима для упрощения
var AdvancedFeatures = CompanyName.ProductA.Features.Advanced;
// Теперь можно использовать короткое имя
var processor2 = new AdvancedFeatures.DataProcessor();
console.log("С псевдонимом:", processor2.process("test data"));
console.log("Форматирование:", AdvancedFeatures.formatData("Hello World"));
// Псевдоним для конкретного класса
var DataProc = CompanyName.ProductA.Features.Advanced.DataProcessor;
var processor3 = new DataProc();
console.log("Псевдоним класса:", processor3.process("another test"));
