// ============================================
// 11. КОМПОЗИЦИЯ (Composition)
// ============================================

export class Engine {
    constructor(private horsePower: number) {}

    start(): void {
        console.log(`Двигатель ${this.horsePower} л.с. запущен`);
    }

    stop(): void {
        console.log('Двигатель остановлен');
    }

    getInfo(): string {
        return `${this.horsePower} л.с.`;
    }
}

