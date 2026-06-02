import { Automobile } from './Automobile';

export function demoComposition(): void {
    console.log('11. КОМПОЗИЦИЯ');
    
    const car = new Automobile("BMW X5", 340, 20);
    console.log(car.getSpecs());
    car.start();
    car.stop();
    console.log('');
}

