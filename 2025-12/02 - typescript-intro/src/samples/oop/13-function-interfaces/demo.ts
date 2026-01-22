import { IFullNameBuilder } from './IFullNameBuilder';
import { simpleBuilder, formalBuilder, shortBuilder } from './functions';

export function demoFunctionInterfaces(): void {
    console.log('13. ИНТЕРФЕЙСЫ ФУНКЦИЙ (Function Interfaces)');
    
    // Использование разных реализаций
    console.log(simpleBuilder("Иван", "Петров"));
    console.log(formalBuilder("Иван", "Петров"));
    console.log(shortBuilder("Иван", "Петров"));
    
    // Можно создать функцию напрямую
    const casualBuilder: IFullNameBuilder = (name, surname) => `${name} ${surname}`;
    console.log(casualBuilder("Мария", "Иванова"));
    
    // Массив функций одного типа
    const builders: IFullNameBuilder[] = [simpleBuilder, formalBuilder, shortBuilder];
    console.log('\nВсе варианты:');
    builders.forEach(builder => {
        console.log(builder("Алексей", "Смирнов"));
    });
    
    console.log('');
}

