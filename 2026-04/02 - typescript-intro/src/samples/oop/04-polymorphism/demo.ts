// ============================================
// 4. ПОЛИМОРФИЗМ (Polymorphism)
// ============================================

import { Animal } from '../03-inheritance/Animal';
import { Dog } from '../03-inheritance/Dog';
import { Cat } from '../03-inheritance/Cat';

export function demoPolymorphism(): void {
    console.log('4. ПОЛИМОРФИЗМ');
    
    const animals: Animal[] = [
        new Dog("Рекс", "Лабрадор"),
        new Cat("Барсик"),
        new Dog("Шарик", "Дворняга")
    ];

    animals.forEach(animal => {
        animal.makeSound(); // Каждое животное издаёт свой звук
    });
    console.log('');
}

