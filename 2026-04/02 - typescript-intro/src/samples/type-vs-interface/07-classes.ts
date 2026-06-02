// ============================================
// 7. КЛАССЫ (Classes)
// ============================================

// ✅ INTERFACE - идеально для контрактов классов
interface IShape {
    getArea(): number;
    getPerimeter(): number;
}

export class Circle implements IShape {
    constructor(private radius: number) {}
    
    getArea(): number {
        return Math.PI * this.radius ** 2;
    }
    
    getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

// ✅ TYPE - тоже работает с классами
type Shape = {
    getArea(): number;
    getPerimeter(): number;
};

export class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}
    
    getArea(): number {
        return this.width * this.height;
    }
    
    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

export function demoClasses(): void {
    console.log('7. КЛАССЫ (Classes)');
    
    const circle = new Circle(5);
    console.log('Circle area:', circle.getArea().toFixed(2));
    
    const rectangle = new Rectangle(10, 5);
    console.log('Rectangle area:', rectangle.getArea());
    
    console.log('✅ Interface: рекомендуется для контрактов');
    console.log('✅ Type: тоже работает\n');
}

