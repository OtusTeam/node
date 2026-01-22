import { colors, translations, fruits, ages, users } from './examples';

export function demoIndexableTypes(): void {
    console.log('14. ИНТЕРФЕЙСЫ МАССИВОВ И СЛОВАРЕЙ (Indexable Types)');
    
    // Словарь цветов
    console.log('Цвета:');
    console.log(`Красный: ${colors["red"]}`);
    console.log(`Зелёный: ${colors["green"]}`);
    console.log(`Синий: ${colors["blue"]}`);
    
    // Словарь переводов
    console.log('\nПереводы:');
    console.log(`hello -> ${translations["hello"]}`);
    console.log(`thanks -> ${translations["thanks"]}`);
    
    // Массив фруктов
    console.log('\nФрукты:');
    console.log(`Первый фрукт: ${fruits[0]}`);
    console.log(`Второй фрукт: ${fruits[1]}`);
    
    // Словарь возрастов
    console.log('\nВозраст:');
    console.log(`Иван: ${ages["Иван"]} лет`);
    console.log(`Мария: ${ages["Мария"]} лет`);
    
    // Словарь пользователей
    console.log('\nПользователи:');
    console.log(`Админ: ${users.admin}`);
    console.log(`user1: ${users["user1"]}`);
    
    // Перебор всех ключей
    console.log('\nВсе цвета:');
    for (let colorName in colors) {
        console.log(`  ${colorName}: ${colors[colorName]}`);
    }
    
    console.log('');
}

