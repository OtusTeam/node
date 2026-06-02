import { IVehicle } from './IVehicle';
import { IElectric } from './IElectric';

export class ElectricCar implements IVehicle, IElectric {
    brand: string;
    speed: number;
    batteryLevel: number;

    constructor(brand: string) {
        this.brand = brand;
        this.speed = 0;
        this.batteryLevel = 100;
    }

    start(): void {
        if (this.batteryLevel > 0) {
            console.log(`${this.brand} (электромобиль) запускается бесшумно`);
            this.speed = 80;
        } else {
            console.log('Батарея разряжена');
        }
    }

    stop(): void {
        console.log(`${this.brand} останавливается`);
        this.speed = 0;
    }

    charge(): void {
        console.log('Зарядка...');
        this.batteryLevel = 100;
        console.log('Батарея заряжена на 100%');
    }
}

