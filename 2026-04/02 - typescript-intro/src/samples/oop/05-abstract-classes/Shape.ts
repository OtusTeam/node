// ============================================
// 5. АБСТРАКТНЫЕ КЛАССЫ (Abstract Classes)
// ============================================

export abstract class Shape {
    abstract getArea(): number;
    abstract getPerimeter(): number;

    // Конкретный метод в абстрактном классе
    describe(): void {
        console.log(`Площадь: ${this.getArea()}, Периметр: ${this.getPerimeter()}`);
    }
}

