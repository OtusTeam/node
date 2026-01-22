import { Person } from './Person';

export function demoBasicClass(): void {
    console.log('1. БАЗОВЫЙ КЛАСС');
    
    const person1 = new Person("Иван", 30);
    console.log(person1.introduce());
    console.log('');
}

