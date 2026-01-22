// ============================================
// 3. НАСЛЕДОВАНИЕ (Inheritance)
// ============================================

export class Animal {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log('Животное издаёт звук');
    }

    move(): void {
        console.log(`${this.name} двигается`);
    }
}

