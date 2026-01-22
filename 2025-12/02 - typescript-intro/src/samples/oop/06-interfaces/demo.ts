import { Car } from './Car';
import { ElectricCar } from './ElectricCar';

export function demoInterfaces(): void {
    console.log('6. ИНТЕРФЕЙСЫ');
    
    const car = new Car("Toyota");
    car.start();
    car.stop();

    const tesla = new ElectricCar("Tesla Model 3");
    tesla.start();
    tesla.charge();
    console.log('');
}

