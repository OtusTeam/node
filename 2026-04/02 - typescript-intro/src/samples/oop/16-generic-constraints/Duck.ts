import { IFlyable } from './IFlyable';
import { ISwimmable } from './ISwimmable';

export class Duck implements IFlyable, ISwimmable {
    constructor(public name: string) {}

    fly(): void {
        console.log(`${this.name} летит`);
    }

    swim(): void {
        console.log(`${this.name} плывёт`);
    }
}

