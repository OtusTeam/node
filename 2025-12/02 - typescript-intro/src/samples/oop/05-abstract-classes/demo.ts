import { Rectangle } from './Rectangle';
import { Circle } from './Circle';

export function demoAbstractClasses(): void {
    console.log('5. АБСТРАКТНЫЕ КЛАССЫ');
    
    const rectangle = new Rectangle(10, 5);
    console.log('Прямоугольник:');
    rectangle.describe();

    const circle = new Circle(7);
    console.log('Круг:');
    circle.describe();
    console.log('');
}

