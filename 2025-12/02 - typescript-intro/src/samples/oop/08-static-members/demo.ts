import { MathHelper } from './MathHelper';

export function demoStaticMembers(): void {
    console.log('8. СТАТИЧЕСКИЕ ЧЛЕНЫ');
    
    console.log(`Площадь круга (r=5): ${MathHelper.circleArea(5).toFixed(2)}`);
    console.log(`Квадрат числа 7: ${MathHelper.square(7)}`);

    const helper1 = new MathHelper();
    const helper2 = new MathHelper();
    console.log(`Создано экземпляров: ${MathHelper.getInstanceCount()}`);
    console.log('');
}

