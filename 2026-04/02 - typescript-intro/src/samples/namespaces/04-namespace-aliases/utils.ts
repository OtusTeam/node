// ============================================
// 4. ПСЕВДОНИМЫ NAMESPACES
// ============================================

namespace CompanyName {
  export namespace ProductA {
    export namespace Features {
      export namespace Advanced {
        export class DataProcessor {
          process(data: string): string {
            return `Обработано: ${data.toUpperCase()}`;
          }
        }

        export function formatData(data: string): string {
          return `[FORMATTED] ${data}`;
        }
      }
    }
  }
}

// Использование без псевдонима - очень длинно!
const processor1 =
  new CompanyName.ProductA.Features.Advanced.DataProcessor();
console.log("\n--- 4. Псевдонимы namespaces ---");
console.log("Без псевдонима:", processor1.process("test data"));

// Создание псевдонима для упрощения
import AdvancedFeatures = CompanyName.ProductA.Features.Advanced;

// Теперь можно использовать короткое имя
const processor2 = new AdvancedFeatures.DataProcessor();
console.log("С псевдонимом:", processor2.process("test data"));
console.log("Форматирование:", AdvancedFeatures.formatData("Hello World"));

// Псевдоним для конкретного класса
import DataProc = CompanyName.ProductA.Features.Advanced.DataProcessor;

const processor3 = new DataProc();
console.log("Псевдоним класса:", processor3.process("another test"));

