// // ============================================
// // 6. МНОЖЕСТВЕННЫЕ ДЕКОРАТОРЫ (Multiple Decorators)
// // ============================================

// // Порядок выполнения декораторов: снизу вверх для методов
// function first() {
//   console.log("first(): фабрика декоратора");
//   return function (
//     _target: any,
//     propertyKey: string,
//     descriptor: PropertyDescriptor
//   ) {
//     // eslint-disable-line @typescript-eslint/no-explicit-any
//     console.log("first(): вызов декоратора");
//   };
// }

// function second() {
//   console.log("second(): фабрика декоратора");
//   return function (
//     target: any,
//     propertyKey: string,
//     descriptor: PropertyDescriptor
//   ) {
//     // eslint-disable-line @typescript-eslint/no-explicit-any
//     console.log("second(): вызов декоратора");
//   };
// }

// // Декоратор для кэширования результата
// function memoize(
//   target: any,
//   propertyKey: string,
//   descriptor: PropertyDescriptor
// ) {
//   // eslint-disable-line @typescript-eslint/no-explicit-any
//   const originalMethod = descriptor.value;
//   const cache = new Map<string, any>(); // eslint-disable-line @typescript-eslint/no-explicit-any

//   descriptor.value = function (...args: any[]) {
//     // eslint-disable-line @typescript-eslint/no-explicit-any
//     const key = JSON.stringify(args);

//     if (cache.has(key)) {
//       console.log(`Возврат из кэша для ${propertyKey}(${args})`);
//       return cache.get(key);
//     }

//     const result = originalMethod.apply(this, args);
//     cache.set(key, result);
//     console.log(`Результат сохранён в кэш для ${propertyKey}(${args})`);
//     return result;
//   };

//   return descriptor;
// }

// // Декоратор для повторных попыток
// function retry(times: number) {
//   return function (
//     target: any,
//     propertyKey: string,
//     descriptor: PropertyDescriptor
//   ) {
//     // eslint-disable-line @typescript-eslint/no-explicit-any
//     const originalMethod = descriptor.value;

//     descriptor.value = async function (...args: any[]) {
//       // eslint-disable-line @typescript-eslint/no-explicit-any
//       for (let i = 0; i < times; i++) {
//         try {
//           return await originalMethod.apply(this, args);
//         } catch (e) {
//           console.log(`Попытка ${i + 1} не удалась`);
//           if (i === times - 1) throw e;
//         }
//       }
//     };

//     return descriptor;
//   };
// }

// export class MathService {
//   private cache = new Map<string, number>();

//   simpleMethod(): void {
//     console.log("Выполнение simpleMethod");
//   }

//   fibonacci(n: number): number {
//     const key = `fib_${n}`;

//     if (this.cache.has(key)) {
//       console.log(`Возврат из кэша для fibonacci(${n})`);
//       return this.cache.get(key)!;
//     }

//     let result: number;
//     if (n <= 1) {
//       result = n;
//     } else {
//       result = this.fibonacci(n - 1) + this.fibonacci(n - 2);
//     }

//     this.cache.set(key, result);
//     console.log(`Результат сохранён в кэш для fibonacci(${n})`);
//     return result;
//   }
// }

// export function demoMultipleDecorators(): void {
//   console.log("\n--- 6. Множественные декораторы ---");

//   console.log("Примеры множественных декораторов:");
//   console.log("- Порядок: снизу вверх для методов");
//   console.log("- @first @second - порядок выполнения");
//   console.log("- @memoize - кэширование результатов");

//   const service = new MathService();
//   service.simpleMethod();

//   console.log("\nМемоизация (кэширование):");
//   console.log("fib(5) =", service.fibonacci(5));
//   console.log("fib(5) снова =", service.fibonacci(5)); // Из кэша
//   console.log("fib(6) =", service.fibonacci(6));
// }

// // @retry(3)
// // class MathService {
// //   simpleMethod(): void {
// //     console.log("Выполнение simpleMethod");
// //   }
// // }
