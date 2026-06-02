import { Dog } from './Dog';
import { Cat } from './Cat';

export function demoInheritance(): void {
    console.log('3. НАСЛЕДОВАНИЕ');
    
    const dog = new Dog("Бобик", "Овчарка");
    console.log(dog.getInfo());
    dog.makeSound();
    dog.fetch();

    const cat = new Cat("Мурка");
    cat.makeSound();
    cat.climb();
    console.log('');
}

