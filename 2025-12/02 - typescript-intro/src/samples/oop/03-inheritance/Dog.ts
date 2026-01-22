import { Animal } from './Animal';

export class Dog extends Animal {
    private breed: string;

    constructor(name: string, breed: string) {
        super(name); // Вызов конструктора родительского класса
        this.breed = breed;
    }

    // Переопределение метода (Method Override)
    makeSound(): void {
        console.log(`${this.name} лает: Гав-гав!`);
    }

    fetch(): void {
        console.log(`${this.name} приносит мяч`);
    }

    getInfo(): string {
        return `Собака: ${this.name}, порода: ${this.breed}`;
    }
}

