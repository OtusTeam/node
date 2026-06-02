import { Duck } from './Duck';
import { Bird, Seagull, Superman } from './examples';
import { run, makeFly, printName, getProperty, getFirstElement, getLength } from './functions';

export function demoGenericConstraints(): void {
    console.log('16. ОГРАНИЧЕНИЕ ОБОБЩЕНИЙ (Generic Constraints)');
    
    // Пример 1: Функция с множественным ограничением
    console.log('\n--- 1. Множественное ограничение (T extends IFlyable & ISwimmable) ---');
    const duck = new Duck("Утка Дональд");
    run(duck); // ✅ Утка может и летать, и плавать
    
    const seagull = new Seagull("Чайка");
    run(seagull); // ✅ Чайка тоже может и летать, и плавать
    
    // const bird1 = new Bird("Воробей");
    // run(bird1); // ❌ Ошибка! Bird не реализует ISwimmable
    
    // const fish = new Fish("Карп");
    // run(fish); // ❌ Ошибка! Fish не реализует IFlyable
    
    // Пример 2: Функция с одним ограничением
    console.log('\n--- 2. Одиночное ограничение (T extends IFlyable) ---');
    const bird = new Bird("Воробей");
    makeFly(bird); // ✅ OK
    makeFly(duck); // ✅ OK (Duck реализует IFlyable)
    
    const superman = new Superman("Супермен");
    makeFly(superman); // ✅ OK
    
    // const fish = new Fish("Лос   ось");
    // makeFly(fish); // ❌ Ошибка! Fish не летает
    
    // Пример 3: Ограничение по структуре объекта
    console.log('\n--- 3. Ограничение по структуре ({ name: string }) ---');
    printName(duck); // ✅ У утки есть name
    printName(bird); // ✅ У птицы есть name
    printName({ name: "Анонимный объект" }); // ✅ Любой объект с name
    
    // Пример 4: Ограничение по ключам (keyof)
    console.log('\n--- 4. Ограничение по ключам (K extends keyof T) ---');
    const user = { id: 1, name: "Иван", email: "ivan@example.com" };
    console.log('ID:', getProperty(user, "id")); // ✅ OK
    console.log('Name:', getProperty(user, "name")); // ✅ OK
    // console.log(getProperty(user, "age")); // ❌ Ошибка! 'age' не существует
    
    // Пример 5: Ограничение массивом
    console.log('\n--- 5. Ограничение массивом (T extends any[]) ---');
    const numbers = [1, 2, 3, 4, 5];
    const strings = ["a", "b", "c"];
    console.log('First number:', getFirstElement(numbers)); // 1
    console.log('First string:', getFirstElement(strings)); // "a"
    
    // Пример 6: Ограничение по свойству length
    console.log('\n--- 6. Ограничение по length ({ length: number }) ---');
    console.log('Array length:', getLength([1, 2, 3])); // 3
    console.log('String length:', getLength("Hello")); // 5
    console.log('String length:', getLength("TypeScript")); // 10
    // console.log(getLength(123)); // ❌ Ошибка! number не имеет length
    
    console.log('');
}

