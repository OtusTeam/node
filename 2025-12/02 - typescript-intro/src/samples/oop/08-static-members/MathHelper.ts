// ============================================
// 8. СТАТИЧЕСКИЕ ЧЛЕНЫ (Static Members)
// ============================================

export class MathHelper {
    static PI: number = 3.14159;

    static square(x: number): number {
        return x * x;
    }

    static circleArea(radius: number): number {
        return this.PI * this.square(radius);
    }

    // Счётчик экземпляров
    private static instanceCount: number = 0;

    constructor() {
        MathHelper.instanceCount++;
    }

    static getInstanceCount(): number {
        return MathHelper.instanceCount;
    }
}

