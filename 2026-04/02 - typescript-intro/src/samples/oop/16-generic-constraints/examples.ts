// Примеры классов для демонстрации

import { IFlyable } from './IFlyable';
import { ISwimmable } from './ISwimmable';

export class Bird implements IFlyable {
    constructor(public name: string) {}

    fly(): void {
        console.log(`${this.name} (птица) летит`);
    }
}

export class Fish implements ISwimmable {
    constructor(public name: string) {}

    swim(): void {
        console.log(`${this.name} (рыба) плывёт`);
    }
}

export class Seagull implements IFlyable, ISwimmable {
    constructor(public name: string) {}

    fly(): void {
        console.log(`${this.name} (чайка) летит над водой`);
    }

    swim(): void {
        console.log(`${this.name} (чайка) плывёт по воде`);
    }
}

// Класс с дополнительными методами
export class Superman implements IFlyable {
    constructor(public name: string) {}

    fly(): void {
        console.log(`${this.name} летит как супергерой!`);
    }

    useSuperPower(): void {
        console.log(`${this.name} использует суперсилу!`);
    }
}

